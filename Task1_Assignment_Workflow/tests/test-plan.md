# AssignmentFlow test plan

**Status:** Planned; execute manually and record actual outcomes before claiming tests passed. Use synthetic data only.

| ID | Scenario | Steps | Expected result |
|---|---|---|---|
| TC01 | Normal submission | Enter all required fictional fields and submit. | A SUBMITTED row appears; total and submitted counts update. |
| TC02 | Missing information | Leave a required field blank and submit. | Browser required-field validation blocks submission. For missing physical receipt reference, faculty should check the paper register; the prototype currently blocks the form rather than creating NEEDS_CLARIFICATION. |
| TC03 | Duplicate | Submit the same assignment ID and student reference twice. | Second record is blocked with a possible-duplicate message. |
| TC04 | Unauthorized action | Attempt to access evaluation approval as an unauthorized user. | Not testable in this prototype: there is no authentication or role-based access control. Document this as a known limitation; do not claim it is prevented by the app. |
| TC05 | Failed update | Simulate browser storage being unavailable or disabled, then submit. | Current prototype has no robust recovery UI; document observed browser error and use the paper register fallback. Do not claim safe retry/idempotency without implementing and testing it. |

## Test record template

For each test, record: date/time, browser, steps actually performed, observed result, expected result, PASS/FAIL/NOT TESTABLE, screenshot filename, and any defect.

## Important
The demo status progression is a visual simulation only. Real evaluation and feedback approval remain faculty decisions. The physical register remains the authoritative receipt record in the proposed workflow.


## Manual test execution log — 24 October 2026

| Test ID | Result | Evidence |
|---|---|---|
| TC01 | PASS — normal demo submission observed | 04-normal-submission.png |
| TC02 | PASS — required-field validation observed | 10-missing-receipt-validation.png |
| TC03 | PASS — duplicate submission blocked with warning; total records remained 6 | 11-duplicate-submission-blocked.png |
| TC04 | NOT TESTABLE — no real authentication or role controls | Pending |
| TC05 | NOT TESTED — failure recovery not implemented in prototype | Pending |

Note: Results describe observed local prototype behaviour only.
They are not evidence of institutional deployment or integration.