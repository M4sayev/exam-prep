export const SUBJECT = 'Process Modeling, Requirements Engineering & UML';

export const TOPIC_ORDER = ['Software Requirements Modelling', 'Process Modeling (BPM lifecycle, As-Is / To-Be)', 'Business Process Analysis, Optimization & BPMN', 'UML (use case, activity, class, sequence, state machine diagrams)'];

const RAW_VARIANTS = [
  {
    id: 'A',
    name: 'Variant A',
    desc: 'Requirements modeling and process basics',
    questions: [
      {
        q: 'Which of the following is NOT a defining feature of a business process?',
        options: ['It has a trigger and a result', 'It is performed by actors', 'It uses resources and information', 'It is a static organizational unit'],
        answer: 'D',
      },
      {
        q: 'IT support, HR and procurement are examples of which type of process?',
        options: ['Core', 'Supporting', 'Management', 'Transition'],
        answer: 'B',
      },
      {
        q: 'Which BPM lifecycle phase captures how the process really works today?',
        options: ['Identification', 'Analysis', 'Discovery (As-Is)', 'Redesign (To-Be)'],
        answer: 'C',
      },
      {
        q: 'Cycle time is equal to:',
        options: ['Processing time + waiting time', 'Processing time ÷ waiting time', 'Waiting time − processing time', 'Processing time × throughput'],
        answer: 'A',
      },
      {
        q: 'In value-added analysis, a mandatory compliance check is classified as:',
        options: ['Value-adding', 'Business value-adding', 'Non-value-adding', 'Rework'],
        answer: 'B',
      },
      {
        q: 'Which BPMN gateway activates ALL outgoing paths and, when joining, waits for all of them?',
        options: ['Exclusive (XOR)', 'Inclusive (OR)', 'Event-based', 'Parallel (AND)'],
        answer: 'D',
      },
      {
        q: 'In BPMN, a message flow is used:',
        options: ['Inside a single lane', 'Between tasks in the same pool', 'Between different pools (participants)', 'To link annotations to elements'],
        answer: 'C',
      },
      {
        q: 'How is a BPMN start event drawn?',
        options: ['Thin circle', 'Double circle', 'Thick circle', 'Diamond'],
        answer: 'A',
      },
      {
        q: '"The system shall load the homepage within 2 seconds on a standard broadband connection." This is a:',
        options: ['Functional requirement', 'Non-functional requirement', 'Domain requirement', 'Transition requirement'],
        answer: 'B',
      },
      {
        q: '"The system shall comply with GDPR data protection regulations for EU customers." This is a:',
        options: ['Functional requirement', 'Non-functional requirement', 'Domain requirement', 'Business requirement'],
        answer: 'C',
      },
      {
        q: 'In MoSCoW prioritization, the "W" stands for:',
        options: ['Want', "Won't", 'Wish', 'Worth'],
        answer: 'B',
      },
      {
        q: 'Which non-functional requirement is best formed?',
        options: ['The system must be fast', 'The system must be user-friendly', 'Under 500 concurrent users, 95% of page requests shall complete in under 2 seconds', 'The system shall use MySQL'],
        answer: 'C',
      },
      {
        q: 'Which organization maintains the UML standard?',
        options: ['Object Management Group (OMG)', 'IEEE', 'W3C', 'ISO alone'],
        answer: 'A',
      },
      {
        q: 'Which of these is a UML behavior diagram?',
        options: ['Class diagram', 'Deployment diagram', 'Sequence diagram', 'Package diagram'],
        answer: 'C',
      },
      {
        q: 'Composition ("parts die with the whole", e.g. House and Room) is shown with:',
        options: ['A hollow diamond', 'A filled diamond', 'A dashed line with a hollow triangle', 'A dashed line with an open arrow'],
        answer: 'B',
      },
      {
        q: '"Apply discount code" is optional extra behavior added to "Place order". Which relationship is used?',
        options: ['Association', '«include»', 'Generalization', '«extend»'],
        answer: 'D',
      },
      {
        q: 'In a sequence diagram, a return message is drawn as:',
        options: ['A solid line with a filled arrowhead', 'A solid line with an open arrowhead', 'A dashed line with an open arrowhead', 'An X at the end of a lifeline'],
        answer: 'C',
      },
      {
        q: 'Which combined fragment represents an if/else choice?',
        options: ['opt', 'loop', 'alt', 'par'],
        answer: 'C',
      },
      {
        q: 'In an activity diagram, fork and join nodes are drawn as:',
        options: ['A diamond', 'A thick bar', 'A filled circle', 'A rounded rectangle'],
        answer: 'B',
      },
      {
        q: "The Devil's Quadrangle describes the trade-off between:",
        options: ['Time, cost, quality and flexibility', 'Scope, budget, risk and staff', 'Input, process, output and feedback', 'Security, usability, performance and price'],
        answer: 'A',
      },
    ],
  },
  {
    id: 'B',
    name: 'Variant B',
    desc: 'BPM lifecycle and process analysis',
    questions: [
      {
        q: 'Which of the following is a core (primary) process at a university?',
        options: ['IT support', 'Strategic planning', 'Issuing academic certificates', 'Procurement'],
        answer: 'C',
      },
      {
        q: 'How does a process differ from a department?',
        options: ['A process crosses departments and describes how work flows from request to result', 'A process is a static organizational unit', 'They are the same thing', 'A department describes how work flows between offices'],
        answer: 'A',
      },
      {
        q: 'The main purpose of an As-Is model is:',
        options: ['Prescriptive — define the target', 'Diagnostic — know where you are', 'Executable — run on a process engine', 'Contractual — agree on a price'],
        answer: 'B',
      },
      {
        q: 'A request takes 20 minutes of staff work, but its total elapsed time is 2,000 minutes. What is its cycle time efficiency?',
        options: ['0.1%', '1%', '10%', '20%'],
        answer: 'B',
      },
      {
        q: 'Which tool links visible symptoms to underlying causes in root-cause analysis?',
        options: ['MoSCoW', 'Kano model', 'Ishikawa (fishbone) diagram', 'Traceability matrix'],
        answer: 'C',
      },
      {
        q: 'A BPMN exclusive gateway (XOR):',
        options: ['Activates all outgoing paths', 'Activates one or more paths', 'Follows whichever event happens first', 'Chooses exactly one path based on conditions'],
        answer: 'D',
      },
      {
        q: 'In BPMN, what is a lane?',
        options: ['A subdivision of a pool, typically a role or department', 'A whole participant, such as an organization', 'A message between two participants', 'A decision point'],
        answer: 'A',
      },
      {
        q: 'Which name follows the BPMN convention for an event?',
        options: ['Verify request', 'Request received', 'Documents complete?', 'Registrar'],
        answer: 'B',
      },
      {
        q: '"Reduce certificate issuing time from 3 days to 1 hour" is an example of a:',
        options: ['Business requirement', 'User requirement', 'System requirement', 'Transition requirement'],
        answer: 'A',
      },
      {
        q: 'Data migration and staff training for the new system are:',
        options: ['Functional requirements', 'Business requirements', 'Domain requirements', 'Transition requirements'],
        answer: 'D',
      },
      {
        q: "Which ISO/IEC standard's quality model is commonly used to classify non-functional requirements?",
        options: ['ISO/IEC/IEEE 29148', 'ISO/IEC 25010', 'ISO/IEC 19501', 'ISO/IEC 19510'],
        answer: 'B',
      },
      {
        q: 'The Kano model sorts requirements into:',
        options: ["Must, Should, Could, Won't", 'Basic, performance, delight', 'Cost and value', 'High, medium, low'],
        answer: 'B',
      },
      {
        q: 'What is the main benefit of a traceability matrix?',
        options: ['It makes the impact of requirement changes visible', 'It replaces the SRS', 'It removes the need for testing', 'It prioritizes requirements automatically'],
        answer: 'A',
      },
      {
        q: 'Who are known as the "three amigos" who created UML?',
        options: ['Gamma, Helm and Johnson', 'Beck, Fowler and Cunningham', 'Hammer, Champy and Davenport', 'Booch, Rumbaugh and Jacobson'],
        answer: 'D',
      },
      {
        q: 'Department and Teacher: the parts can exist on their own. Which relationship is this?',
        options: ['Composition', 'Aggregation', 'Realization', 'Dependency'],
        answer: 'B',
      },
      {
        q: 'A class implementing an interface (Circle implements Shape) is drawn with:',
        options: ['A solid line with a hollow triangle', 'A filled diamond', 'A dashed line with a hollow triangle', 'A plain solid line'],
        answer: 'C',
      },
      {
        q: 'Which statement about use case actors is correct?',
        options: ['An actor is always a specific named person', 'An actor must be human', 'An actor is an external role and can be a person, another system or time', 'Actors are drawn inside the system boundary'],
        answer: 'C',
      },
      {
        q: 'In a sequence diagram, a synchronous call (sender waits) is drawn as:',
        options: ['A solid line with a filled arrowhead', 'A solid line with an open arrowhead', 'A dashed line with an open arrowhead', 'A dotted line with no arrowhead'],
        answer: 'A',
      },
      {
        q: "Which diagram shows how one object changes through its life, such as an order's lifecycle?",
        options: ['Class diagram', 'Deployment diagram', 'Use case diagram', 'State machine diagram'],
        answer: 'D',
      },
      {
        q: 'Which elicitation technique means studying users while they perform their actual tasks?',
        options: ['Interviews', 'Questionnaires', 'Observation', 'JAD workshops'],
        answer: 'C',
      },
    ],
  },
  {
    id: 'C',
    name: 'Variant C',
    desc: 'Requirements engineering and UML foundations',
    questions: [
      {
        q: 'Which of the following is a management process?',
        options: ['Admission', 'Strategic planning', 'IT support', 'Teaching'],
        answer: 'B',
      },
      {
        q: 'In the BPM lifecycle, which phase comes directly after Process Analysis?',
        options: ['Process Discovery', 'Process Implementation', 'Process Redesign (To-Be)', 'Monitoring and Controlling'],
        answer: 'C',
      },
      {
        q: 'What does the gap analysis between the As-Is and To-Be models lead to?',
        options: ['A change / implementation plan', 'A new organizational chart', 'A class diagram', 'A list of actors'],
        answer: 'A',
      },
      {
        q: 'Re-entering data from a paper form into a computer system is classified as:',
        options: ['Value-adding', 'Business value-adding', 'Non-value-adding (waste)', 'A core process'],
        answer: 'C',
      },
      {
        q: 'Which level of redesign ambition means fundamentally rethinking a process from scratch?',
        options: ['Continuous improvement', 'Six Sigma DMAIC', 'Redesign within the existing structure', 'Radical reengineering'],
        answer: 'D',
      },
      {
        q: 'Which BPMN gateway activates ONE OR MORE paths depending on conditions?',
        options: ['Exclusive (XOR)', 'Inclusive (OR)', 'Parallel (AND)', 'Event-based'],
        answer: 'B',
      },
      {
        q: 'How is a BPMN intermediate event (e.g. a timer) drawn?',
        options: ['Thin circle', 'Thick circle', 'Rounded rectangle', 'Double circle'],
        answer: 'D',
      },
      {
        q: 'Which is a correct BPMN modeling rule?',
        options: ['Sequence flow is used only within a pool; message flow only between pools', 'Message flow is used between tasks in the same pool', 'Gateways are named with verb + noun', 'A process does not need an end event'],
        answer: 'A',
      },
      {
        q: '"The system shall allow an administrator to deactivate a user account." This is a:',
        options: ['Functional requirement', 'Non-functional requirement', 'Domain requirement', 'Transition requirement'],
        answer: 'A',
      },
      {
        q: 'User requirements are best described as:',
        options: ['Detailed technical specifications for developers', 'Database schemas', 'High-level natural-language statements for non-technical stakeholders', 'Test cases'],
        answer: 'C',
      },
      {
        q: '"The system shall be user-friendly" mainly fails which characteristic of a good requirement?',
        options: ['Traceable', 'Consistent', 'Verifiable', 'Feasible'],
        answer: 'C',
      },
      {
        q: 'Which statement is an example of solution-embedding?',
        options: ['The system shall store student records', 'The system shall notify students by e-mail', '95% of requests shall complete in under 2 seconds', 'The system shall use MySQL'],
        answer: 'D',
      },
      {
        q: 'Which requirements engineering activity confirms that requirements reflect what stakeholders actually want?',
        options: ['Elicitation', 'Specification', 'Validation', 'Management'],
        answer: 'C',
      },
      {
        q: 'Which of these is NOT a mode in which UML is used?',
        options: ['As a sketch', 'As a blueprint', 'As a programming language', 'As a project schedule'],
        answer: 'D',
      },
      {
        q: 'Inheritance ("Car is a Vehicle") is drawn with:',
        options: ['A solid line with a hollow triangle', 'A dashed line with a hollow triangle', 'A hollow diamond', 'A dashed line with an open arrow'],
        answer: 'A',
      },
      {
        q: 'The multiplicity 1..* means:',
        options: ['Exactly one', 'One or more', 'Zero or one', 'Zero or more'],
        answer: 'B',
      },
      {
        q: '"Place order" always incorporates the behavior of "Process payment". Which relationship is this?',
        options: ['«include»', '«extend»', 'Generalization', 'Aggregation'],
        answer: 'A',
      },
      {
        q: 'In a sequence diagram, the "ref" fragment:',
        options: ['Repeats messages', 'Runs parts in parallel', 'Marks optional behavior', 'Refers to another sequence diagram'],
        answer: 'D',
      },
      {
        q: 'At a decision node in an activity diagram:',
        options: ['All outgoing flows run at the same time', 'Exactly one guard must be true', 'Guards are optional and may overlap', 'The activity always ends'],
        answer: 'B',
      },
      {
        q: 'In a sequence diagram, time runs:',
        options: ['From left to right', 'From bottom to top', 'From top to bottom', 'In no particular direction'],
        answer: 'C',
      },
    ],
  },
  {
    id: 'D',
    name: 'Variant D',
    desc: 'Process redesign and UML behavior modeling',
    questions: [
      {
        q: 'A business process is best defined as:',
        options: ['A set of related activities that transforms inputs into a result of value for a customer', 'A department in an organizational chart', 'A single software function', 'A list of employees and their roles'],
        answer: 'A',
      },
      {
        q: 'According to modeling principles, a model that tries to show everything:',
        options: ['Is the most useful kind of model', 'Is required for accreditation', 'Shows nothing — detail must match the question being asked', 'Can be executed by a process engine'],
        answer: 'C',
      },
      {
        q: 'Which of the following is a feature of a To-Be model?',
        options: ['It includes current manual workarounds', 'It shows the process "warts and all"', 'It parallelizes activities where possible', 'It records actual current delays'],
        answer: 'C',
      },
      {
        q: 'In administrative processes, the majority of cycle time is usually:',
        options: ['Processing (touch) time', 'Waiting time', 'Data entry time', 'Approval signing time'],
        answer: 'B',
      },
      {
        q: 'Moving data entry to the customer through an online portal is which redesign heuristic?',
        options: ['Parallelization', 'Standardization', 'Integration', 'Self-service'],
        answer: 'D',
      },
      {
        q: 'In a BPMN event-based gateway, the path is chosen:',
        options: ['By whichever event occurs first', 'By evaluating data conditions', 'By activating all paths', 'At random'],
        answer: 'A',
      },
      {
        q: 'In BPMN, a collapsed sub-process is marked with:',
        options: ['An envelope', 'A "+" sign', 'A clock', 'A thick border'],
        answer: 'B',
      },
      {
        q: 'In BPMN, a text annotation is connected to an element with:',
        options: ['A sequence flow (solid arrow)', 'A message flow (dashed arrow)', 'An association (dotted line)', 'A gateway'],
        answer: 'C',
      },
      {
        q: 'Which is a common BPMN modeling pitfall?',
        options: ['Naming activities with verb + noun', 'Modeling the happy path first', 'Using sub-processes for detail', 'Deadlocks caused by unmatched parallel splits and exclusive joins'],
        answer: 'D',
      },
      {
        q: 'Which of these is NOT part of a quality attribute scenario?',
        options: ['Stimulus', 'Response measure', 'Budget', 'Artifact'],
        answer: 'C',
      },
      {
        q: '"The system shall support at least 50,000 simultaneous active sessions." This is a:',
        options: ['Functional requirement', 'Non-functional requirement', 'Domain requirement', 'Business requirement'],
        answer: 'B',
      },
      {
        q: '"The system shall calculate VAT according to each country\'s tax code." This is a:',
        options: ['Domain requirement', 'Non-functional requirement', 'Transition requirement', 'User requirement'],
        answer: 'A',
      },
      {
        q: 'Why are domain requirements often the hardest to elicit?',
        options: ['They are always non-functional', 'They cannot be written down', 'Only developers know them', 'They seem obvious to domain experts, who may not state them'],
        answer: 'D',
      },
      {
        q: 'Why is it important to catch requirement errors early?',
        options: ['Requirements cannot change later', 'Fixing them after release costs many times more', 'Testers refuse late changes', 'UML diagrams cannot be updated'],
        answer: 'B',
      },
      {
        q: 'Which UML diagram shows software artifacts placed on hardware nodes such as servers?',
        options: ['Deployment diagram', 'Component diagram', 'Package diagram', 'Object diagram'],
        answer: 'A',
      },
      {
        q: 'In which UML diagram are names written underlined, e.g. anna : Student?',
        options: ['Class diagram', 'Use case diagram', 'Object diagram', 'Activity diagram'],
        answer: 'C',
      },
      {
        q: 'In a class diagram, the visibility symbol # means:',
        options: ['Public', 'Private', 'Package', 'Protected'],
        answer: 'D',
      },
      {
        q: 'In a sequence diagram, an asynchronous message (the sender continues without waiting) is drawn as:',
        options: ['A solid line with a filled arrowhead', 'A solid line with an open arrowhead', 'A dashed line with an open arrowhead', 'A self-loop arrow'],
        answer: 'B',
      },
      {
        q: 'Compared with UML activity diagrams, BPMN is stronger for:',
        options: ['Cross-organization business processes with message flows between participants', 'Showing class attributes', "Modeling one object's states", 'Placing software on hardware'],
        answer: 'A',
      },
      {
        q: 'When drawing a class diagram from requirements, candidate classes usually come from:',
        options: ['The verbs', 'The nouns', 'The adjectives', 'The test cases'],
        answer: 'B',
      },
    ],
  },
];

export const VARIANTS = RAW_VARIANTS.map((variant) => ({
  id: variant.id,
  name: variant.name,
  desc: variant.desc,
  count: variant.questions.length,
  questions: variant.questions,
}));

export const BANK = VARIANTS.flatMap((variant) =>
  variant.questions.map((question, index) => ({
    n: index + 1,
    t: SUBJECT,
    q: question.q,
    o: question.options,
    a: "ABCD".indexOf(question.answer),
  })),
);
