# Task 1: Assignment Submission and Evaluation Workflow

## 1. Project Overview

**Project name:** AssignmentFlow  
**Institution context:** IcfaiTech, IFHE Hyderabad  
**Programme context:** B.Tech Computer Science and Engineering (AI & ML), 2023–2027  
**Process investigated:** Assignment submission, acknowledgement, evaluation and feedback.

AssignmentFlow is a student-designed prototype that demonstrates how assignment submission records and status tracking could be organized. It is intended to complement the existing physical submission and LMS processes, not replace official institutional systems.

## 2. Problem Statement

Based on my own experience, assignments are announced through a combination of communication channels. Faculty communicate deadlines, students submit printed hard copies directly to subject faculty, and acknowledgement is provided through a signature or register entry. Feedback is communicated through the LMS or portal.

I did not experience a major problem with this process. However, a lightweight tracking layer could make submission references and progress easier to search and review.

This is an opportunity for process improvement, not a claim that the existing institutional process is defective.

## 3. Current Process (AS-IS)

The following process is based on my student-reported observations:

1. Faculty announces the assignment through available communication channels.
2. Faculty communicates the submission deadline.
3. Students prepare the assignment.
4. Students submit a printed hard copy directly to the subject faculty.
5. Faculty acknowledges receipt through a signature or register entry.
6. Faculty evaluates the submitted assignment.
7. Feedback is communicated through the LMS or portal.

**Unverified details:** Internal evaluation handoffs, register reconciliation, escalation procedures and faculty workload have not been independently observed.

## 4. Evidence and Method

The investigation was based on personal student experience and a small prototype demonstration.

- Approximate batch size: 100 students (student estimate).
- Submission format: printed hard copy (student-reported).
- Acknowledgement: signature/register entry (student-reported).
- Feedback channel: LMS/portal (student-reported).
- Assignment announcements: multiple channels (student-reported).
- Faculty interviews: not conducted.
- Official register access: not obtained.
- Production institutional data: not accessed.

The prototype uses fictional demonstration records only. Screenshots and the CSV export are included in the `evidence/` folder.

## 5. Proposed Process (TO-BE)

AssignmentFlow provides a simple digital tracking layer while preserving the existing physical process.

### Inputs

- Assignment ID
- Course code
- Student reference (fictional in the demo)
- Submission date
- Receipt reference
- Faculty reference

### Workflow

1. Faculty creates or identifies an assignment.
2. Student submits the printed assignment through the existing process.
3. Faculty checks the physical submission and records its receipt reference.
4. AssignmentFlow stores the tracking record.
5. Faculty updates the evaluation status.
6. Faculty publishes feedback through the existing LMS or portal.
7. Student can refer to the submission reference to ask about progress.

### Statuses

- SUBMITTED
- NEEDS_CLARIFICATION
- UNDER_EVALUATION
- EVALUATED
- FEEDBACK_PUBLISHED
- FAILED_RETRY

### Roles and approval boundaries

**Subject faculty:** Confirms physical receipt, resolves clarification, evaluates work and decides when feedback is published.

**Student:** Views or refers to their own submission status. The prototype does not implement real student authentication.

**System administrator:** Maintains the prototype but does not make academic decisions or approve marks.

### Fallback

The existing physical register remains the authoritative acknowledgement record. If the prototype is unavailable, the current paper-register and LMS process continues. Records can be reconciled later by authorized faculty.

## 6. Prototype Implementation

The prototype is a browser-based application built using HTML, CSS and JavaScript.

Features demonstrated:

- New submission form.
- Submission record table.
- Status summary.
- Search records.
- Filter by status.
- Advance status using the Next action.
- Delete demo records.
- Load synthetic examples.
- Export records to CSV.
- Browser-local demo storage.

The CSV export contains six synthetic records with assignment, course, student reference, receipt reference, faculty reference, status and timestamp fields.

**Important limitation:** Browser-local storage is not a secure database. Role descriptions are conceptual and do not provide real authentication or authorization. All demonstration references are fictional.

## 7. Synthetic Test Results

The prototype was exercised using synthetic records and browser interactions. The evidence screenshots are in `evidence/`.

| Test | Scenario | Observed demonstration |
|---|---|---|
| TC01 | Normal submission | Submission record created with receipt reference and SUBMITTED status |
| TC02 | Missing receipt information | Record shown as NEEDS_CLARIFICATION |
| TC03 | Duplicate scenario | Duplicate example included for demonstration |
| TC04 | Status and role boundary | Workflow notes identify faculty as responsible for evaluation decisions; real access control is not implemented |
| TC05 | Failed update scenario | FAILED_RETRY example displayed in the tracking register |

Additional UI checks included status progression, search, status filtering and CSV export.

These are prototype demonstrations, not production security tests or proof of institutional integration. A future version should add automated assertions, authenticated roles, audit logging and persistent storage.

### Manual test execution results

| Test ID | Result | Evidence |
|---|---|---|
| TC01 | PASS | Normal submission demonstrated |
| TC02 | PASS | Required-field validation demonstrated |
| TC03 | PASS | Duplicate submission blocked with warning |
| TC04 | NOT TESTABLE | No authentication or role controls |
| TC05 | NOT TESTED | Failure recovery not implemented |

These results describe observed behaviour in the local prototype only. They do not demonstrate institutional deployment, integration, or production security.

## 8. Illustrative Impact Analysis

The following calculation is a planning estimate, not a measured result.

| Parameter | Value | Basis |
|---|---:|---|
| Students | 100 | Student estimate |
| Assignments per student per semester | 4 | Assumption |
| Total submissions | 400 | 100 × 4 |
| Existing tracking effort | 2 min/submission | Hypothesis |
| Proposed tracking effort | 0.75 min/submission | Hypothesis |
| Existing effort | 800 min | 400 × 2 |
| Proposed effort | 300 min | 400 × 0.75 |
| Gross time saving | 500 min | 800 − 300 |
| Review effort | 90 min | Assumption |
| Support effort | 60 min | Assumption |
| Net time saving | 350 min | 500 − 150 |

**Illustrative net saving: 350 minutes, or approximately 5.83 hours per semester.**

Net saving as a percentage of baseline tracking effort:

350 ÷ 800 × 100 = **43.75%**

These estimates must be validated through a small pilot by recording actual time spent before and after implementation. The model does not include the time required to build or maintain a production system.

## 9. Risks and Limitations

1. The workflow description is based primarily on one student's experience.
2. No faculty interviews or official register inspection were conducted.
3. Workload figures are assumptions, not measured institutional data.
4. The prototype is not connected to the institution's LMS or student database.
5. Browser storage can be cleared and is not suitable for confidential records.
6. The prototype does not implement real user authentication or authorization.
7. Synthetic test cases do not establish production reliability.
8. Faculty approval and institutional permission would be required before any real pilot.

## 10. Recommended Next Steps

1. Validate the process map with subject faculty.
2. Observe a small number of submissions with permission.
3. Measure acknowledgement and tracking time using a baseline.
4. Pilot the tracking layer with fictional or approved non-sensitive data.
5. Add authenticated faculty and student roles.
6. Introduce a secure database and audit trail.
7. Compare measured effort and error rates before and after the pilot.
8. Retain the paper register and LMS fallback until the institution approves a change.

## 11. Conclusion

AssignmentFlow demonstrates a practical way to organize assignment submission references and progress without disrupting the existing paper-based acknowledgement and LMS feedback process.

The prototype shows a submission form, tracking register, status filtering, search and CSV export. Its impact calculation is explicitly illustrative and requires pilot validation.

The project is a student-designed workflow concept and is not an official IFHE/IcfaiTech application.