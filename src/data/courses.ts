export interface CourseData {
  slug: string;
  title: string;
  category: string;
  duration: string;
  fees: string;
  batchTiming: string;
  overview: string;
  syllabus: string[];
  features: string[];
}

export const COURSES_DATA: CourseData[] = [
  {
    slug: "ssc-gd",
    title: "SSC GD Constable",
    category: "Staff Selection Commission",
    duration: "5 Months",
    fees: "₹8,500",
    batchTiming: "08:00 AM - 11:00 AM",
    overview: "Comprehensive classroom coaching designed specifically for the latest pattern of SSC GD Constable written examination under Rahul Raj Sir.",
    syllabus: [
      "General Intelligence & Reasoning Aptitude",
      "General Knowledge & General Awareness (Static + UP Focus)",
      "Elementary Mathematics (Short-trick Formulas)",
      "General Hindi / English Grammar Mastery"
    ],
    features: [
      "Daily 3 Hours Intensive Concept Sessions",
      "Weekly Full-Length OMR Sheet Mock Tests",
      "Special Focus on Physical Fitness Benchmarks",
      "Direct Guidance and Short Tricks by Rahul Raj Sir"
    ]
  },
  {
    slug: "ssc-cgl",
    title: "SSC CGL (Tier I & II)",
    category: "Staff Selection Commission",
    duration: "8 Months",
    fees: "₹14,500",
    batchTiming: "08:00 AM - 11:30 AM",
    overview: "Targeted module covering Tier 1 & Tier 2 syllabi including Advanced Mathematics, High-level Reasoning, English Comprehension, and General Studies.",
    syllabus: [
      "Quantitative Aptitude (Arithmetic + Advanced Geometry, Trigonometry, Algebra)",
      "Reasoning & Analytical Problem Solving",
      "English Language Comprehension & Vocabulary",
      "General Awareness, Science & Computer Proficiency"
    ],
    features: [
      "Separate Specialized Batch for Tier 2 Preparation",
      "100+ Chapter-wise Speed Drill Sheets",
      "Computer Knowledge Test Practical Guidance",
      "Previous 10 Years Question Papers In-Depth Analysis"
    ]
  },
  {
    slug: "ssc-chsl",
    title: "SSC CHSL (10+2)",
    category: "Staff Selection Commission",
    duration: "6 Months",
    fees: "₹11,000",
    batchTiming: "11:30 AM - 02:30 PM",
    overview: "Targeted course for 10+2 aspirants focusing on speed-accuracy optimization for Tier 1 objective tests and Tier 2 typing/skill tests.",
    syllabus: [
      "Quantitative Aptitude with Speed Calculation Tricks",
      "General Intelligence & Verbal Reasoning",
      "English Grammatical Rules & Comprehension",
      "General Studies & Current Affairs"
    ],
    features: [
      "Keyboard Typing Speed & Accuracy Drills",
      "Bi-Weekly Real-Time CBT Simulation",
      "Pocket Math Formula Booklets",
      "Personal Performance Tracking by Mentors"
    ]
  },
  {
    slug: "up-police",
    title: "UP Police Constable",
    category: "State Police Exams",
    duration: "5 Months",
    fees: "₹8,999",
    batchTiming: "08:00 AM - 12:00 PM",
    overview: "Shikohabad's premier UP Police recruitment batch with an elite selection record led by Rahul Raj Sir.",
    syllabus: [
      "General Hindi (Samanya Hindi & Sahitya)",
      "General Knowledge (UP Special, Geography, Polity)",
      "Numerical & Mental Ability Test",
      "Mental Aptitude, IQ Test & Logical Reasoning"
    ],
    features: [
      "Special UP GK & Current Affairs Capsules",
      "150-Question Weekly Sunday OMR Tests",
      "Original Previous Years Solved Question Papers",
      "Free Printed Worksheets & Classroom Notes"
    ]
  },
  {
    slug: "up-si",
    title: "UP Sub-Inspector (UP SI)",
    category: "State Police Exams",
    duration: "7 Months",
    fees: "₹13,500",
    batchTiming: "10:00 AM - 02:00 PM",
    overview: "Advanced rank-holder program for UP SI aspirants with intensive training on Mool Vidhi, Constitution, and High-Speed Reasoning.",
    syllabus: [
      "Mool Vidhi, Samvidhan (Indian Constitution) & General Knowledge",
      "Advanced General Hindi",
      "Numerical and Mental Ability",
      "Mental Aptitude & Advanced Reasoning"
    ],
    features: [
      "In-Depth Case Law Analysis for IPC & CrPC",
      "Section-by-Section Legal Provisions Handouts",
      "Speed Mathematics Drills for Complex Calculations",
      "Interview & Physical Standard Guidance"
    ]
  },
  {
    slug: "railway-ntpc",
    title: "Railway RRB NTPC",
    category: "Indian Railways",
    duration: "6 Months",
    fees: "₹9,500",
    batchTiming: "08:00 AM - 11:00 AM",
    overview: "Dedicated coaching for Graduate and Undergraduate level Non-Technical Popular Categories (NTPC) for CBT 1 & CBT 2.",
    syllabus: [
      "General Science (Physics, Chemistry, Biology - NCERT Standards)",
      "Mathematics (Arithmetic, Algebra, Statistics)",
      "General Intelligence & Logical Reasoning",
      "Current Events & Static GK"
    ],
    features: [
      "Over 3,000 Questions Solved Live in Classroom",
      "Dedicated Science Practical & Concept Clarification",
      "Computer Based Test (CBT) Practice Modules",
      "Doubt Removal Counter Available Daily"
    ]
  },
  {
    slug: "railway-group-d",
    title: "Railway Group D",
    category: "Indian Railways",
    duration: "4 Months",
    fees: "₹7,500",
    batchTiming: "12:00 PM - 03:00 PM",
    overview: "Fast-track intensive training program tailored to help candidates conquer Railway Level 1 posts.",
    syllabus: [
      "General Science (Class 10 CBSE/State Board syllabus)",
      "Basic & Applied Mathematics",
      "General Intelligence and Reasoning",
      "Current Affairs on Science & Tech, Sports, Culture"
    ],
    features: [
      "Simplified Hindi-medium Science Notes",
      "Formula Shortcut Tricks by Rahul Sir",
      "Daily 50-Question Classroom Quiz",
      "PET (Physical Efficiency Test) Preparation Guidelines"
    ]
  },
  {
    slug: "banking",
    title: "Banking (IBPS, SBI PO & Clerk)",
    category: "Banking & Insurance",
    duration: "6 Months",
    fees: "₹15,000",
    batchTiming: "07:30 AM - 10:30 AM",
    overview: "High-precision training focusing on Data Interpretation, complex puzzles, and Banking Awareness.",
    syllabus: [
      "Data Interpretation (Table, Pie, Radar, Bar charts)",
      "Seating Arrangement & Logical Reasoning Puzzles",
      "English Reading Comprehension & Error Detection",
      "Financial, Economic & Banking Awareness"
    ],
    features: [
      "Daily Speed Math Drills (Vedic Math principles)",
      "Sectional Time-Management Techniques",
      "Weekly Current Banking Trends Handouts",
      "Mock Interviews Conducted by Experienced Officers"
    ]
  },
  {
    slug: "ctet",
    title: "CTET (Paper I & II)",
    category: "Teaching Exams",
    duration: "4 Months",
    fees: "₹7,999",
    batchTiming: "02:00 PM - 05:00 PM",
    overview: "Specialized batch covering Child Development & Pedagogy, Environmental Studies, and Subject Pedagogy.",
    syllabus: [
      "Child Development and Pedagogy (CDP)",
      "Language I & Language II Comprehension & Pedagogy",
      "Mathematics & Environmental Studies (Paper I)",
      "Science/Maths or Social Science (Paper II)"
    ],
    features: [
      "100% Concept-based Pedagogy Notes",
      "Analysis of Past 15 CTET Papers",
      "Special Doubt Sessions for CDP Theories (Piaget, Vygotsky, Kohlberg)",
      "Free Teaching Aptitude Handbook"
    ]
  },
  {
    slug: "uptet",
    title: "UPTET (Primary & Upper Primary)",
    category: "Teaching Exams",
    duration: "4 Months",
    fees: "₹7,999",
    batchTiming: "09:00 AM - 12:00 PM",
    overview: "Custom-crafted course meeting Uttar Pradesh Basic Education Board syllabus requirements.",
    syllabus: [
      "Bal Vikas evam Shikshan Vidhi (CDP)",
      "Samanya Hindi evam Sahitya",
      "Sanskrit / English Language",
      "Paryavaran Adhyayan (EVS) & Ganit"
    ],
    features: [
      "Grammar & Literature Special Handouts",
      "Dedicated EVS Modules covering UP ecology & geography",
      "Regular Sunday Sectional & Full Tests",
      "Pedagogy Question Solving Strategies"
    ]
  },
  {
    slug: "super-tet",
    title: "Super TET (UP Assistant Teacher)",
    category: "Teaching Exams",
    duration: "6 Months",
    fees: "₹9,500",
    batchTiming: "09:00 AM - 01:00 PM",
    overview: "Comprehensive syllabus coverage for the UP Assistant Teacher recruitment exam.",
    syllabus: [
      "Teaching Methodology & Child Psychology",
      "Language (Hindi, English, Sanskrit)",
      "Science, Mathematics & Environment",
      "Information Technology, Life Skills & Management"
    ],
    features: [
      "14 Diverse Subjects Structured Systematically",
      "Life Skill & Teaching Aptitude Master Classes",
      "Complete Printed Study Material Kit Included",
      "Rank-Oriented Full Syllabus Mock Tests"
    ]
  },
  {
    slug: "pet",
    title: "UPSSSC PET Target",
    category: "UPSSSC State Exams",
    duration: "3 Months",
    fees: "₹5,500",
    batchTiming: "08:00 AM - 11:00 AM",
    overview: "Crash and target program designed to score 99+ percentile in UPSSSC Preliminary Eligibility Test.",
    syllabus: [
      "Indian History, National Movement & Geography",
      "Indian Economy & Constitution",
      "General Science, Elementary Arithmetic & General Hindi",
      "Graph Interpretation & Table Analysis (20 Marks)"
    ],
    features: [
      "Dedicated 20 Marks Graph & Table Master Sessions",
      "Target Score: 85+ Raw Score Strategy",
      "Daily 100-Question Practice Sheets",
      "Last Minute Revision Formula Sheets"
    ]
  },
  {
    slug: "lekhpal",
    title: "UP Lekhpal (Rajasva)",
    category: "UPSSSC State Exams",
    duration: "4 Months",
    fees: "₹7,999",
    batchTiming: "01:00 PM - 04:00 PM",
    overview: "Specialized coaching targeting UP Rajasva Lekhpal selection under veteran state faculty.",
    syllabus: [
      "Samanya Hindi (General Hindi)",
      "Ganit (Arithmetic, Algebra, Geometry, Statistics)",
      "Samanya Gyan (General Knowledge & Current Affairs)",
      "Gramya Samaj evam Vikas (Rural Society & Development)"
    ],
    features: [
      "Exclusive Gram Samaj Material & Government Schemes Book",
      "Agricultural Statistics & Measurement Units Workshop",
      "Chapter-wise Question Bank with Solutions",
      "Complete Revision Series Prior to Examination"
    ]
  }
];
