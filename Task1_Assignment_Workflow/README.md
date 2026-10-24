# AssignmentFlow — local prototype

A beginner-friendly, browser-only prototype for demonstrating a proposed assignment submission tracking workflow.

## Run it
1. Extract `AssignmentFlow.zip`.
2. Open the extracted `AssignmentFlow` folder in VS Code.
3. Open `index.html` in a browser (double-click it from File Explorer), or use the VS Code Live Server extension if already installed.
4. Click **Load synthetic examples** to see sample records.

No build tools or package installation are required.

## Important limitations
- All example records are fictional.
- Data is stored in the current browser's `localStorage`; it does not sync between devices.
- There is no server, authentication, authorization, encryption, or real audit-grade log.
- The status buttons simulate a workflow. They do not constitute actual institutional approvals.
- Keep the existing paper register and LMS as the real-world fallback.
- Never enter real student personal data, marks, credentials, or private messages.

## Prototype features
- Record a physical submission receipt.
- Duplicate check for the same assignment/student reference.
- Search and status filtering.
- Demonstration status progression.
- CSV export and local demo reset.

## Suggested evidence
Capture screenshots of the empty dashboard, synthetic examples, duplicate warning, search/filter, and CSV export. Label all screenshots as prototype demonstrations, not live institutional records.

See `tests/test-plan.md` for the five assessment scenarios. Execute and record results yourself before reporting them as passed.

## Project context

- **Assessment:** Round 2 — Task 1
- **Programme:** B.Tech CSE (AI & ML), IFHE Hyderabad
- **Batch:** 2023–2027

## Problem investigated

Based on my student-reported experience, printed assignments are submitted directly to subject faculty. Acknowledgement is provided through a signature or register entry, and feedback is communicated through the LMS or portal.

AssignmentFlow explores a lightweight way to track submission records while retaining the existing paper register and LMS.

These observations are student-reported, not institutionally verified.

## Evidence and testing

- Prototype screenshots are stored in `evidence/`.
- The test plan and execution record are stored in `tests/`.
- TC01, TC02 and TC03 were demonstrated successfully in the local prototype.
- TC04 is NOT TESTABLE because authentication and role-based access control are not implemented.
- TC05 is NOT TESTED because failure recovery is not implemented.

## Impact estimate

The time-saving calculation in the report is illustrative and based on assumptions. It is not a measured institutional result.

## Scope and limitations

This is an independent academic prototype, not an official IFHE system. It does not connect to institutional databases or replace faculty decisions and existing submission procedures.