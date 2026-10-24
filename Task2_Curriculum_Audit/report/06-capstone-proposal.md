# Capstone Proposal — AssignmentFlow Intelligent Academic Workflow

## 1. Project overview

**Project name:** AssignmentFlow — Intelligent Academic Workflow and Analytics

**Project type:** Applied AI/ML capstone proposal

AssignmentFlow began as a browser-based prototype for tracking physical assignment submissions and acknowledgement. The proposed capstone evolves it into an academic workflow and analytics platform.

The project will explore how data analytics and carefully evaluated machine-learning methods can support academic administration while keeping faculty responsible for academic decisions.

## 2. Problem statement

Physical submission registers and separate digital feedback channels can make historical tracking and consolidated reporting difficult.

The initial prototype demonstrates basic submission records, duplicate warnings, status tracking, search and CSV export.

The proposed extension investigates whether analytics and machine learning can improve administrative visibility without replacing official institutional systems.

## 3. Proposed system modules

| Module | Function |
|---|---|
| Submission tracking | Record assignment, student reference, date and receipt reference |
| Status dashboard | Display submission and evaluation progress |
| Duplicate detection | Flag potentially repeated records |
| Analytics | Summarize submissions, pending evaluations and turnaround |
| Delay-risk analysis | Explore patterns associated with delayed evaluation |
| Feedback analysis | Categorize feedback themes using text analytics, subject to privacy controls |
| Export and reporting | Generate CSV summaries for authorized review |

## 4. Proposed AI/ML components

### A. Duplicate detection
Start with exact matching of assignment and student reference. Later, investigate fuzzy matching to flag possible duplicates. A human should review uncertain matches.

### B. Evaluation delay analysis
Use synthetic or properly anonymized historical records to explore factors associated with evaluation delays.

Possible input variables:
- Assignment submission date
- Assignment deadline
- Submission volume
- Course identifier
- Evaluation status

Output: an experimental estimate of delay risk, not a decision about faculty performance.

### C. Feedback theme analysis
Explore text classification or clustering to summarize recurring feedback themes. Do not process identifiable student information without authorization.

## 5. Connection to curriculum subjects

| Curriculum subject | Capstone application |
|---|---|
| Computer Programming | Application logic |
| Data Structures | Record handling |
| Database Management Systems | Structured record storage |
| Artificial Intelligence | Intelligent workflow concepts |
| Machine Learning | Experimental delay-risk model |
| Data Wrangling and Visualization | Data cleaning and analytics dashboard |
| Deep Learning | Optional advanced text-analysis experiment |
| Web Technologies | Browser interface and API integration |

## 6. Evaluation plan

The capstone should be evaluated using:
- Functional testing of record creation, search and export.
- Precision and recall for duplicate detection.
- Model precision, recall and F1-score for any classification experiment.
- Comparison with a simple baseline.
- Usability feedback from authorized pilot participants.
- Privacy, security and fairness review.

No model accuracy or efficiency improvement is claimed before experiments are conducted.

## 7. Privacy and governance

- Use synthetic data for initial development.
- Do not upload identifiable student records to public AI tools.
- Restrict access to authorized users in any real deployment.
- Keep academic evaluation and grading decisions with faculty.
- Obtain institutional approval before using actual student data.
- Document model limitations and allow human review of automated flags.

## 8. Development roadmap

**Phase 1:** Improve the existing prototype and test data validation.

**Phase 2:** Build a database-backed application and role-based access controls.

**Phase 3:** Add analytics and reporting.

**Phase 4:** Experiment with duplicate detection and delay-risk models using approved data.

**Phase 5:** Conduct user testing, privacy review and performance evaluation.

## 9. Expected learning outcomes

The project can demonstrate integration of programming, databases, AI/ML, data visualization, software testing and responsible AI.

## 10. Current limitations

The existing AssignmentFlow implementation is a local demonstration. It does not provide production authentication, institutional integration, real-time synchronization or validated predictive models. These are proposed future-development activities, not completed features.

