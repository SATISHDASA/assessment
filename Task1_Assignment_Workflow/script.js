const STORAGE_KEY = "assignmentflow_demo_records_v1";
const $ = (id) => document.getElementById(id);
let records = loadRecords();

function loadRecords() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"); }
  catch { return []; }
}
function saveRecords() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
  render();
}
function makeId() { return "AF-" + Date.now().toString(36).toUpperCase() + "-" + Math.random().toString(36).slice(2,6).toUpperCase(); }
function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}
function render() {
  $("totalCount").textContent = records.length;
  $("submittedCount").textContent = records.filter(r => r.status === "SUBMITTED").length;
  $("evaluationCount").textContent = records.filter(r => r.status === "UNDER_EVALUATION").length;
  $("feedbackCount").textContent = records.filter(r => r.status === "FEEDBACK_PUBLISHED").length;
  const q = $("searchInput").value.toLowerCase();
  const status = $("statusFilter").value;
  const visible = records.filter(r => (!status || r.status === status) &&
    [r.assignmentId,r.courseCode,r.studentRef,r.receiptRef,r.facultyRef].join(" ").toLowerCase().includes(q));
  $("recordsBody").innerHTML = visible.map(r => `<tr>
    <td>${escapeHtml(r.assignmentId)}</td><td>${escapeHtml(r.courseCode)}</td>
    <td>${escapeHtml(r.studentRef)}</td><td>${escapeHtml(r.submissionDate)}</td>
    <td>${escapeHtml(r.receiptRef)}</td><td><span class="status ${escapeHtml(r.status)}">${escapeHtml(r.status)}</span></td>
    <td><div class="row-actions">
      <button data-action="next" data-id="${escapeHtml(r.id)}" title="Advance demo status">Next</button>
      <button data-action="delete" data-id="${escapeHtml(r.id)}" class="secondary">Delete</button>
    </div></td></tr>`).join("");
  $("emptyState").hidden = visible.length > 0;
}
$("submissionDate").value = new Date().toISOString().slice(0,10);

$("submissionForm").addEventListener("submit", event => {
  event.preventDefault();
  const item = {
    id: makeId(),
    assignmentId: $("assignmentId").value.trim(),
    courseCode: $("courseCode").value.trim(),
    studentRef: $("studentRef").value.trim(),
    submissionDate: $("submissionDate").value,
    receiptRef: $("receiptRef").value.trim(),
    facultyRef: $("facultyRef").value.trim(),
    status: "SUBMITTED",
    createdAt: new Date().toISOString()
  };
  if (records.some(r => r.assignmentId.toLowerCase() === item.assignmentId.toLowerCase() &&
      r.studentRef.toLowerCase() === item.studentRef.toLowerCase())) {
    $("formMessage").textContent = "Possible duplicate: this student reference already has a record for this assignment.";
    return;
  }
  records.unshift(item);
  saveRecords();
  $("submissionForm").reset();
  $("submissionDate").value = new Date().toISOString().slice(0,10);
  $("formMessage").textContent = "Demo receipt recorded locally. Keep the physical register as the authoritative fallback.";
});
$("recordsBody").addEventListener("click", event => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const record = records.find(r => r.id === button.dataset.id);
  if (!record) return;
  if (button.dataset.action === "delete") {
    if (confirm("Delete this synthetic demo record?")) records = records.filter(r => r.id !== record.id);
  } else {
    const sequence = ["SUBMITTED","UNDER_EVALUATION","EVALUATED","FEEDBACK_PUBLISHED"];
    const current = sequence.indexOf(record.status);
    record.status = sequence[Math.min(current + 1, sequence.length - 1)];
  }
  saveRecords();
});
$("searchInput").addEventListener("input", render);
$("statusFilter").addEventListener("change", render);

$("loadDemo").addEventListener("click", () => {
  const examples = [
    ["CSE201-A1","CSE201","DEMO-001","REG-001","FAC-DEMO-01","SUBMITTED"],
    ["AIM202-A2","AIM202","DEMO-002","REG-002","FAC-DEMO-02","UNDER_EVALUATION"],
    ["MAT203-A1","MAT203","DEMO-003","REG-003","FAC-DEMO-03","FEEDBACK_PUBLISHED"],
    ["CSE201-A1","CSE201","DEMO-004","","FAC-DEMO-01","NEEDS_CLARIFICATION"],
    ["AIM204-A1","AIM204","DEMO-005","REG-005","FAC-DEMO-99","FAILED_RETRY"]
  ];
  for (const e of examples) {
    if (!records.some(r => r.assignmentId === e[0] && r.studentRef === e[2])) {
      records.push({id:makeId(),assignmentId:e[0],courseCode:e[1],studentRef:e[2],
        submissionDate:new Date().toISOString().slice(0,10),receiptRef:e[3],facultyRef:e[4],status:e[5],createdAt:new Date().toISOString()});
    }
  }
  saveRecords();
  $("formMessage").textContent = "Synthetic examples loaded. They are not institutional records.";
});
$("resetDemo").addEventListener("click", () => {
  if (confirm("Remove all AssignmentFlow demo records from this browser?")) {
    records = []; saveRecords(); $("formMessage").textContent = "Local demo records cleared.";
  }
});
$("exportCsv").addEventListener("click", () => {
  const headers = ["assignmentId","courseCode","studentRef","submissionDate","receiptRef","facultyRef","status","createdAt"];
  const csv = [headers.join(","), ...records.map(r => headers.map(h => `"${String(r[h] ?? "").replace(/"/g,'""')}"`).join(","))].join("\n");
  const blob = new Blob([csv], {type:"text/csv;charset=utf-8"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a"); a.href=url; a.download="assignmentflow-demo-records.csv"; a.click();
  URL.revokeObjectURL(url);
});
render();
