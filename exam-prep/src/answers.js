export const SUBJECT = 'Process Modeling, Requirements Engineering & UML';

export const TOPIC_ORDER = ['Software Requirements Modelling', 'Process Modeling (BPM lifecycle, As-Is / To-Be)', 'Business Process Analysis, Optimization & BPMN', 'UML (use case, activity, class, sequence, state machine diagrams)'];

export const VARIANTS = [
  {
    id: 'A',
    name: 'Variant A',
    desc: 'Case-based practical practice for A',
    count: 20,
    questions: [
      {
        q: 'Online store: every time a customer places an order, the payment must be processed. What is the relationship between "Place order" and "Process payment"?',
        options: ['"Place order" «include» "Process payment"', '"Process payment" «extend» "Place order"', 'Generalization', 'No relationship'],
        answer: 'A',
      },
      {
        q: 'Library system: when a member returns a book late, they sometimes have to pay a fine. What is the relationship between "Return book" and "Pay fine"?',
        options: ['"Return book" «include» "Pay fine"', '"Pay fine" «extend» "Return book"', '"Pay fine" generalizes "Return book"', 'A plain association between the two use cases'],
        answer: 'B',
      },
      {
        q: 'Arrange the parts into a correctly written user story: (1) so that I can reserve my spot in advance (2) I want to book classes through the app (3) As a gym member,',
        options: ['2 → 3 → 1', '1 → 3 → 2', '3 → 2 → 1', '3 → 1 → 2'],
        answer: 'C',
      },
      {
        q: 'Hospital system: "Doctor" and "Nurse" can both do everything "Medical Staff" can, such as "View patient record". What is the relationship between "Doctor" and "Medical Staff"?',
        options: ['Association', '«include»', '«extend»', 'Generalization (Doctor specializes Medical Staff)'],
        answer: 'D',
      },
      {
        q: 'A hospital system: "The system shall generate patient records in HL7 format, as required by healthcare interoperability standards." Which type is this?',
        options: ['Functional requirement', 'Non-functional requirement', 'Domain requirement', 'Transition requirement'],
        answer: 'C',
      },
      {
        q: 'Purchase order process: requests below a set amount are approved automatically; all others go to Finance for manual review. Which BPMN element models this decision?',
        options: ['Exclusive gateway (XOR)', 'Parallel gateway (AND)', 'Inclusive gateway (OR)', 'Event-based gateway'],
        answer: 'A',
      },
      {
        q: 'Certificate process: after approval, "Generate certificate PDF" and "Register in issuance log" can run at the same time, and the certificate is signed only after BOTH are finished. How should this be modeled in BPMN?',
        options: ['An exclusive gateway split and an exclusive gateway join', 'An inclusive gateway split only', 'An event-based gateway', 'A parallel gateway split followed by a parallel gateway join'],
        answer: 'D',
      },
      {
        q: 'A request needs 15 minutes of actual work, but takes 3,000 minutes from start to finish. What is its cycle time efficiency?',
        options: ['0.05%', '0.5%', '5%', '15%'],
        answer: 'B',
      },
      {
        q: 'As-Is process: Finance staff manually re-enter data from the paper requisition into the accounting system, causing frequent errors. Which redesign fixes this best?',
        options: ['Add another approval step', 'Ask employees to write more clearly', 'Integrate the systems so data is entered once and reused', 'Hire more Finance clerks'],
        answer: 'C',
      },
      {
        q: 'BPMN diagram: the "Student" pool sends a certificate request to the "University" pool. Which connector should be used?',
        options: ['Sequence flow (solid arrow)', 'Message flow (dashed arrow)', 'Association (dotted line)', 'Data store link'],
        answer: 'B',
      },
      {
        q: 'Library class diagram: one member can make many loans, and each loan belongs to exactly one member. Which multiplicity is correct?',
        options: ['Member 1 — 0..* Loan', 'Member 0..* — 1..* Loan', 'Member 1 — 1 Loan', 'Member 0..1 — 0..1 Loan'],
        answer: 'A',
      },
      {
        q: 'Online shop: when an Order is deleted, all of its OrderLines are deleted too. Which relationship connects Order and OrderLine?',
        options: ['Aggregation (hollow diamond)', 'Composition (filled diamond)', 'Dependency (dashed arrow)', 'Realization (dashed line, hollow triangle)'],
        answer: 'B',
      },
      {
        q: 'University: if a Department is closed, its Professors still exist and can move to another department. Which relationship connects Department and Professor?',
        options: ['Composition', 'Inheritance', 'Aggregation', 'Realization'],
        answer: 'C',
      },
      {
        q: 'Drawing app: the classes Circle and Square both implement the interface Shape. Which relationship should be drawn?',
        options: ['Aggregation', 'Composition', 'Association', 'Realization'],
        answer: 'D',
      },
      {
        q: 'Login scenario for a sequence diagram. Put the messages in time order: (1) LoginPage → AuthService: validate(user, password) (2) User → LoginPage: enterCredentials() (3) AuthService → UserDB: findUser(user) (4) UserDB --> AuthService: userData (5) AuthService --> LoginPage: token',
        options: ['1 → 2 → 3 → 4 → 5', '2 → 1 → 3 → 4 → 5', '2 → 3 → 1 → 5 → 4', '3 → 1 → 2 → 4 → 5'],
        answer: 'B',
      },
      {
        q: "Certificate sequence diagram: if the student's status is ACTIVE, a request is created; otherwise a rejection is returned. Which combined fragment models this?",
        options: ['loop', 'par', 'opt', 'alt'],
        answer: 'D',
      },
      {
        q: 'An online order moves through Created → Paid → Shipped → Delivered, and can be Cancelled before shipping. Which diagram best shows this?',
        options: ['Sequence diagram', 'Class diagram', 'State machine diagram', 'Deployment diagram'],
        answer: 'C',
      },
      {
        q: '"Under a load of 500 concurrent users, 95% of page requests shall complete in under 2 seconds." Which quality attribute does this requirement address?',
        options: ['Performance efficiency', 'Usability', 'Reliability', 'Maintainability'],
        answer: 'A',
      },
      {
        q: 'A stakeholder writes: "The system shall be fast and user-friendly." Which rewrite turns it into a good, testable requirement?',
        options: ['The system shall be very fast', 'The system shall be fast and easy to use', 'The system shall use a modern UI framework', '95% of searches shall return results in under 1 second, and a first-time user shall complete checkout in under 3 minutes without help'],
        answer: 'D',
      },
      {
        q: 'Which user story is written in the correct format?',
        options: ['As a bank customer, I want to check my account balance online so that I can keep track of my finances.', 'So that I can keep track of my finances, as a bank customer, I want to check my balance online.', 'The system shall show the account balance to the bank customer.', 'As a bank customer, so that I can keep track of my finances, I want to check my balance online.'],
        answer: 'A',
      },
    ],
  },
  {
    id: 'B',
    name: 'Variant B',
    desc: 'Case-based practical practice for B',
    count: 20,
    questions: [
      {
        q: 'ATM system: a customer can only withdraw cash after the PIN is checked, every single time. What is the relationship between "Withdraw cash" and "Authenticate PIN"?',
        options: ['"Authenticate PIN" «extend» "Withdraw cash"', 'Generalization', '"Withdraw cash" «include» "Authenticate PIN"', 'Only an association, no relationship between the use cases'],
        answer: 'C',
      },
      {
        q: 'Online store: during checkout, a customer may optionally enter a discount code. What is the relationship between "Checkout" and "Apply discount code"?',
        options: ['"Checkout" «include» "Apply discount code"', '"Apply discount code" «extend» "Checkout"', 'Generalization', 'No relationship'],
        answer: 'B',
      },
      {
        q: 'Arrange the parts into a correctly written user story: (1) so that they are informed about the event details (2) As an event organizer, (3) I want to send invitations to participants',
        options: ['2 → 3 → 1', '3 → 2 → 1', '2 → 1 → 3', '1 → 2 → 3'],
        answer: 'A',
      },
      {
        q: 'University system: "Registrar" can do everything a general "Staff" member can (such as "View reports"), plus more. How should "Registrar" and "Staff" be related?',
        options: ['"Registrar" «include» "Staff"', '"Registrar" «extend» "Staff"', 'Association', 'Generalization (Registrar specializes Staff)'],
        answer: 'D',
      },
      {
        q: '"The service shall be available 99.5% of the time during each calendar month." Which type is this?',
        options: ['Functional requirement', 'Non-functional requirement', 'Domain requirement', 'Business requirement'],
        answer: 'B',
      },
      {
        q: 'Certificate process: the university asks the student for missing information, then waits. If the information arrives, it continues; if 7 days pass first, the request is closed. Which BPMN gateway fits this "whichever happens first" decision?',
        options: ['Exclusive gateway (XOR)', 'Parallel gateway (AND)', 'Event-based gateway', 'Inclusive gateway (OR)'],
        answer: 'C',
      },
      {
        q: "Notification process: depending on the user's settings, the system sends an e-mail, an SMS, or both. Which BPMN gateway fits?",
        options: ['Exclusive gateway (XOR)', 'Parallel gateway (AND)', 'Event-based gateway', 'Inclusive gateway (OR)'],
        answer: 'D',
      },
      {
        q: 'As-Is analysis: purchase orders stall for days whenever the manager is away, because only the manager can sign. What is the best To-Be change?',
        options: ['Add a second paper signature', 'Auto-approve requests below a threshold and add delegation rules', 'Mail the paper forms faster', 'Remove all budget checks'],
        answer: 'B',
      },
      {
        q: 'A company wants to improve its invoice process. Put the BPM lifecycle activities in order: (1) Design the improved process. (2) Model how the process works today. (3) Select which process to improve. (4) Roll out the changes. (5) Find and measure the weaknesses.',
        options: ['2 → 3 → 5 → 1 → 4', '3 → 5 → 2 → 1 → 4', '3 → 2 → 1 → 5 → 4', '3 → 2 → 5 → 1 → 4'],
        answer: 'D',
      },
      {
        q: 'New student portal project: "All student records shall be migrated from the old system, and registrar staff shall be trained before go-live." Which type is this?',
        options: ['Transition requirement', 'Functional requirement', 'Non-functional requirement', 'Domain requirement'],
        answer: 'A',
      },
      {
        q: 'A class diagram shows: Student 1 —— 0..* CertificateRequest. What does this mean?',
        options: ['A student may have no requests or many; each request belongs to exactly one student', 'Each student has exactly one request', 'One request can belong to many students', 'Every student must have at least one request'],
        answer: 'A',
      },
      {
        q: 'Banking system: a SavingsAccount is a kind of BankAccount and inherits its attributes. Which relationship is this?',
        options: ['Aggregation', 'Generalization (inheritance)', 'Composition', 'Dependency'],
        answer: 'B',
      },
      {
        q: 'Reporting module: ReportGenerator uses a Printer object only temporarily inside one method. Which relationship is this?',
        options: ['Composition', 'Association', 'Dependency (dashed arrow)', 'Realization'],
        answer: 'C',
      },
      {
        q: 'Certificate request sequence diagram. Put the messages in time order: (1) Portal → RequestService: createRequest() (2) StudentRegistry --> RequestService: status (3) Student → Portal: submitRequest() (4) RequestService --> Portal: requestNo (5) RequestService → StudentRegistry: getStatus()',
        options: ['3 → 1 → 5 → 2 → 4', '1 → 3 → 5 → 2 → 4', '3 → 5 → 1 → 2 → 4', '3 → 1 → 2 → 5 → 4'],
        answer: 'A',
      },
      {
        q: 'Library sequence diagram: the system sends a reminder message to each member with an overdue book, one after another. Which combined fragment models this?',
        options: ['alt', 'opt', 'loop', 'ref'],
        answer: 'C',
      },
      {
        q: 'You need to show the steps of approving a leave request inside the HR system, including decisions and parallel branches. Which UML diagram should you draw?',
        options: ['Use case diagram', 'Activity diagram', 'Class diagram', 'Deployment diagram'],
        answer: 'B',
      },
      {
        q: 'Analysts want to learn how registrar staff really handle certificate requests day to day, including unofficial workarounds. Which elicitation technique fits best?',
        options: ['Questionnaire', 'Document analysis', 'Prototyping', 'Observation'],
        answer: 'D',
      },
      {
        q: '"A first-time student shall be able to submit a request in under 5 minutes without training." Which quality attribute does this address?',
        options: ['Security', 'Reliability', 'Portability', 'Usability'],
        answer: 'D',
      },
      {
        q: 'A requirement says: "The system shall use MySQL." The real need is to keep student data safely. What is wrong with it?',
        options: ['Nothing — it is verifiable, so it is fine', 'It is ambiguous', 'It is solution-embedding; better: "The system shall store student data persistently"', 'It is a domain requirement'],
        answer: 'C',
      },
      {
        q: 'In the user story "As a car owner, I want to schedule maintenance appointments online so that I can plan my visits to the service center", what does the "so that…" part express?',
        options: ['The benefit or reason (why)', 'The role (who)', 'The goal or action (what)', 'The acceptance criteria'],
        answer: 'A',
      },
    ],
  },
  {
    id: 'C',
    name: 'Variant C',
    desc: 'Case-based practical practice for C',
    count: 20,
    questions: [
      {
        q: 'Clinic system: a patient must log in every time before booking an appointment. What is the relationship between "Book appointment" and "Log in"?',
        options: ['"Log in" «extend» "Book appointment"', '"Book appointment" «include» "Log in"', 'Generalization', 'Association between the two use cases'],
        answer: 'B',
      },
      {
        q: 'Utility payment system: after paying a bill, the customer can print a receipt if they want to. What is the relationship between "Pay bill" and "Print receipt"?',
        options: ['"Pay bill" «include» "Print receipt"', 'Generalization', '"Print receipt" «extend» "Pay bill"', '"Print receipt" «include» "Pay bill"'],
        answer: 'C',
      },
      {
        q: 'Shop system: "Online customer" and "Walk-in customer" are both special kinds of "Customer" and share its use cases. How are these actors related?',
        options: ['Generalization', '«include»', '«extend»', 'Dependency'],
        answer: 'A',
      },
      {
        q: 'Arrange the parts into a correctly written user story: (1) I want to view my medical records online (2) so that I can keep track of my health history (3) As a patient,',
        options: ['1 → 3 → 2', '3 → 2 → 1', '2 → 3 → 1', '3 → 1 → 2'],
        answer: 'D',
      },
      {
        q: 'Banking system: "The system shall calculate loan interest according to central bank regulations." Which type is this?',
        options: ['Functional requirement', 'Non-functional requirement', 'Domain requirement', 'User requirement'],
        answer: 'C',
      },
      {
        q: '"The system shall allow an administrator to deactivate a user account." Which type is this?',
        options: ['Functional requirement', 'Non-functional requirement', 'Domain requirement', 'Transition requirement'],
        answer: 'A',
      },
      {
        q: "Leave request process: requests longer than 5 days need the director's approval; shorter ones need only the manager's. Which BPMN gateway models this?",
        options: ['Parallel gateway (AND)', 'Inclusive gateway (OR)', 'Exclusive gateway (XOR)', 'Event-based gateway'],
        answer: 'C',
      },
      {
        q: 'BPMN: inside the "University" pool, the "Information System" lane validates the data and then hands work to the "Registrar" lane. Which connector links these two tasks?',
        options: ['Message flow', 'Sequence flow', 'Association', 'No connector is needed between lanes'],
        answer: 'B',
      },
      {
        q: 'A certificate request takes 10 minutes of staff work but 3 working days (about 1,440 minutes) from start to finish. Which change will shorten the cycle time the most?',
        options: ['Train staff to type faster', 'Buy faster computers', 'Remove handoffs and waiting between steps', 'Add a second approval step'],
        answer: 'C',
      },
      {
        q: 'Value-added analysis of a loan process. Which step is business value-adding (needed by the organization, though the customer would not pay for it)?',
        options: ["Waiting for a manager's signature", "Checking the applicant's documents for legal compliance", 'Re-entering data from a paper form', 'Printing duplicate copies nobody uses'],
        answer: 'B',
      },
      {
        q: 'Certificate system: a Certificate cannot exist without its CertificateRequest — no request, no certificate. Which relationship is this?',
        options: ['Composition', 'Aggregation', 'Generalization', 'Dependency'],
        answer: 'A',
      },
      {
        q: 'Course system: each course has one or more students, and a student can take many courses. On the association, what multiplicity goes at the Student end, next to Course?',
        options: ['0..1', '1', '0', '1..*'],
        answer: 'D',
      },
      {
        q: 'Export module: the class PdfExporter implements the interface Exporter. How is this drawn?',
        options: ['A solid line with a hollow triangle', 'A dashed line with a hollow triangle', 'A filled diamond', 'A dashed line with an open arrow'],
        answer: 'B',
      },
      {
        q: 'Sequence diagram: after creating the request, RequestService sends a notification to NotificationService and continues without waiting for a reply. Which arrow is used?',
        options: ['A solid line with a filled arrowhead', 'A dashed line with an open arrowhead', 'A solid line with an open arrowhead', 'An X at the end of the lifeline'],
        answer: 'C',
      },
      {
        q: 'Sequence diagram for "Request certificate": the student may attach a supporting document, but does not have to. Which combined fragment models this?',
        options: ['alt', 'opt', 'loop', 'par'],
        answer: 'B',
      },
      {
        q: 'Activity diagram: after "Validate data", the flow goes back to the student if the data is incomplete, or continues if it is complete. Which element models this?',
        options: ['A fork (thick bar)', 'An activity final node', 'A join (thick bar)', 'A decision node with guards [data complete] / [data incomplete]'],
        answer: 'D',
      },
      {
        q: 'The team needs to show which servers the web app, the API and the database run on. Which UML diagram should they draw?',
        options: ['Component diagram', 'Package diagram', 'Deployment diagram', 'Object diagram'],
        answer: 'C',
      },
      {
        q: 'A client says: "The search should respond quickly." Which rewrite is a well-formed non-functional requirement?',
        options: ['Under a load of 1,000 users, 95% of searches shall return results within 1.5 seconds', 'The search shall always respond quickly', 'The search shall run on a fast server', 'The search shall respond as soon as possible'],
        answer: 'A',
      },
      {
        q: 'The bank adds two-factor authentication. Customers complain that logging in now takes longer and is harder. Which NFR conflict is this?',
        options: ['Performance vs. cost', 'Maintainability vs. portability', 'Reliability vs. scalability', 'Security vs. usability'],
        answer: 'D',
      },
      {
        q: 'A user story follows the template "As a ___, I want ___ so that ___." What goes in the three blanks, in order?',
        options: ['Who (role) → What (goal) → Why (benefit)', 'What (goal) → Who (role) → Why (benefit)', 'Why (benefit) → What (goal) → Who (role)', 'Who (role) → Why (benefit) → What (goal)'],
        answer: 'A',
      },
    ],
  },
  {
    id: 'D',
    name: 'Variant D',
    desc: 'Case-based practical practice for D',
    count: 20,
    questions: [
      {
        q: 'E-learning system: submitting an assignment always involves uploading a file. What is the relationship between "Submit assignment" and "Upload file"?',
        options: ['"Upload file" «extend» "Submit assignment"', '"Submit assignment" «include» "Upload file"', 'Generalization', 'Aggregation'],
        answer: 'B',
      },
      {
        q: 'Certificate system: while requesting a certificate, a student can optionally attach a supporting document. Which statement is correct?',
        options: ['"Request certificate" and "Attach supporting document" are related by generalization', '"Request certificate" «include» "Attach supporting document"', '"Attach supporting document" «extend» "Request certificate"', '"Attach supporting document" should be drawn as an actor'],
        answer: 'C',
      },
      {
        q: 'Payment system: "Pay by card" and "Pay by cash" are both specialized forms of "Pay". How are these use cases related?',
        options: ['«include»', '«extend»', 'Aggregation', 'Generalization'],
        answer: 'D',
      },
      {
        q: 'Arrange the parts into a correctly written user story: (1) As a travel enthusiast, (2) so that I can plan my trips easily (3) I want to book flights and hotels from a single platform',
        options: ['1 → 3 → 2', '3 → 1 → 2', '1 → 2 → 3', '2 → 1 → 3'],
        answer: 'A',
      },
      {
        q: '"The system shall encrypt all stored passwords using SHA-256 hashing." Which type is this?',
        options: ['Functional requirement', 'Non-functional requirement', 'Domain requirement', 'Transition requirement'],
        answer: 'B',
      },
      {
        q: '"The system shall allow a customer to filter search results by price range." Which type is this?',
        options: ['Non-functional requirement', 'Domain requirement', 'Functional requirement', 'Business requirement'],
        answer: 'C',
      },
      {
        q: 'Order process: after payment, "Pack goods" and "Send invoice" are independent and can happen at the same time. Which BPMN gateway splits the flow?',
        options: ['Exclusive gateway (XOR)', 'Inclusive gateway (OR)', 'Event-based gateway', 'Parallel gateway (AND)'],
        answer: 'D',
      },
      {
        q: "As-Is: students must visit the registrar's office in person to fill in a paper request form. Which redesign heuristic removes this step?",
        options: ['Self-service through an online portal', 'Adding more office staff', 'Standardizing the paper form', 'Adding a second approval'],
        answer: 'A',
      },
      {
        q: 'A case needs 30 minutes of processing and sits waiting for 570 minutes. What are its cycle time and cycle time efficiency?',
        options: ['570 minutes, 5.3%', '600 minutes, 5%', '600 minutes, 95%', '540 minutes, 5.5%'],
        answer: 'B',
      },
      {
        q: 'A modeler labels a BPMN gateway "Check documents". Following BPMN naming rules, what should it be called?',
        options: ['Documents checked', 'Check documents', 'Documents complete?', 'Registrar'],
        answer: 'C',
      },
      {
        q: 'Quality attribute scenario: "A student submits a request during the enrollment peak; the portal confirms receipt within 2 seconds for 95% of requests." Which part is "during the enrollment peak"?',
        options: ['Source', 'Stimulus', 'Artifact', 'Environment'],
        answer: 'D',
      },
      {
        q: 'Requirement: "A member borrows a book, and the librarian records the loan." Which set of candidate classes is best?',
        options: ['Member, Book, Librarian, Loan', 'Borrows, Records', 'Member, Borrows, Book', 'Library, Quickly, Records'],
        answer: 'A',
      },
      {
        q: 'Sports system: a Player can leave a Team and join another; the player still exists if the team is disbanded. Which relationship connects Team and Player?',
        options: ['Composition', 'Aggregation', 'Realization', 'Dependency'],
        answer: 'B',
      },
      {
        q: 'Library system: Librarian and Member both inherit name and email from Person. Which relationship is this?',
        options: ['Association', 'Composition', 'Generalization', 'Realization'],
        answer: 'C',
      },
      {
        q: 'Online checkout sequence diagram. Put the messages in time order: (1) Bank --> PaymentService: approved (2) Customer → Cart: checkout() (3) PaymentService → Bank: authorize() (4) Cart → PaymentService: pay() (5) Cart --> Customer: confirmation',
        options: ['2 → 3 → 4 → 1 → 5', '4 → 2 → 3 → 1 → 5', '2 → 4 → 1 → 3 → 5', '2 → 4 → 3 → 1 → 5'],
        answer: 'D',
      },
      {
        q: 'Sequence diagram: after an order is placed, the system sends an SMS and an e-mail at the same time. Which combined fragment models this?',
        options: ['alt', 'loop', 'par', 'opt'],
        answer: 'C',
      },
      {
        q: 'A bank account can be Open, Frozen or Closed, and events such as "fraud detected" move it between these. Which UML diagram shows this?',
        options: ['Activity diagram', 'State machine diagram', 'Sequence diagram', 'Component diagram'],
        answer: 'B',
      },
      {
        q: 'Use case "Request certificate": "If the registrar\'s queue service is unavailable, the system saves the request as pending and retries." Which part of the use case specification is this?',
        options: ['Main success scenario', 'Precondition', 'Postcondition', 'Exception flow'],
        answer: 'D',
      },
      {
        q: 'A teacher writes the need: "Students should get reminders before exams." Which option rewrites it as a proper user story?',
        options: ["As a student, I want to receive reminders before exams so that I don't miss any exam.", 'The system shall send exam reminders.', 'As the system, I want to send reminders so that students get them.', "So that I don't miss exams, reminders are sent to students."],
        answer: 'A',
      },
      {
        q: 'A data protection regulation changes. The team must quickly find every design element, piece of code and test affected by the related requirements. What helps most?',
        options: ['The Kano model', 'A traceability matrix', 'A fishbone diagram', 'MoSCoW prioritization'],
        answer: 'B',
      },
    ],
  },
];

export const BANK = VARIANTS.flatMap((variant) =>
  variant.questions.map((question, index) => ({
    n: index + 1,
    t: SUBJECT,
    q: question.q,
    o: question.options,
    a: "ABCD".indexOf(question.answer),
  })),
);
