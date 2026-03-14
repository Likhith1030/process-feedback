// ============================================================
// Process Feedback – All shared data constants
// ============================================================

// ── Navigation ───────────────────────────────────────────────
export const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Student Tools",
    items: [
      { label: "Writing Editor",              href: "/writing-editor" },
      { label: "Online Compiler",             href: "/online-compiler" },
      { label: "Extension for Google Docs",   href: "/gdocs" },
      { label: "Process Feedback Extension",  href: "/extension" },
      { label: "Student Guides",              href: "/docs/students" },
    ],
  },
  {
    label: "Teacher Tools",
    items: [
      { label: "Create an Editor",            href: "/editor" },
      { label: "Create an Assignment",        href: "/assignment" },
      { label: "Extension for Google Docs",   href: "/gdocs" },
      { label: "Extension for LMS",           href: "/extension" },
      { label: "Upcoming Webinar",            href: "/webinar" },
      { label: "Teacher Guides",              href: "/docs/teachers" },
    ],
  },
  {
    label: "Institutions",
    items: [
      { label: "Canvas Users",       href: "/canvas" },
      { label: "D2L Users",          href: "/d2l" },
      { label: "Moodle Users",       href: "/moodle" },
      { label: "Blackboard Users",   href: "/blackboard" },
      { label: "Google Docs Users",  href: "/gdocs" },
      { label: "LTI Access",         href: "/lti" },
      { label: "Institutional Docs", href: "/docs/institutions" },
    ],
  },
  {
    label: "About",
    items: [
      { label: "About the Project",  href: "/about" },
      { label: "Related Research",   href: "/research" },
      { label: "Team",               href: "/team" },
      { label: "Contact Us",         href: "/contact" },
    ],
  },
];

// ── Footer columns ────────────────────────────────────────────
export const FOOTER_ROW1 = [
  {
    title: "Teacher Tools",
    links: [
      { label: "Create an Editor",           href: "/editor" },
      { label: "Create an Assignment",       href: "/assignment" },
      { label: "Google Docs Extension",      href: "/gdocs" },
    ],
  },
  {
    title: "Student Tools",
    links: [
      { label: "Writing Editor",             href: "/writing-editor" },
      { label: "Online Compiler",            href: "/online-compiler" },
      { label: "Google Docs Extension",      href: "/gdocs" },
      { label: "Process Feedback Extension", href: "/extension" },
    ],
  },
  {
    title: "Institutions",
    links: [
      { label: "Canvas Users",       href: "/canvas" },
      { label: "D2L Users",          href: "/d2l" },
      { label: "Moodle Users",       href: "/moodle" },
      { label: "Blackboard Users",   href: "/blackboard" },
      { label: "Google Docs Users",  href: "/gdocs" },
      { label: "LTI Access",         href: "/lti" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "About the Project",  href: "/about" },
      { label: "Related Research",   href: "/research" },
      { label: "Blog Articles",      href: "/blog" },
      { label: "Team",               href: "/team" },
    ],
  },
];

export const FOOTER_ROW2 = [
  {
    title: "Teacher Guides",
    links: [
      { label: "Samples",            href: "/samples" },
      { label: "Upcoming Webinar",   href: "/webinar" },
      { label: "Guides & Tutorials", href: "/docs/teachers" },
    ],
  },
  {
    title: "Student Guides",
    links: [
      { label: "Why Use It",     href: "/why-use-process-feedback" },
      { label: "Student Guides", href: "/docs/students" },
    ],
  },
  {
    title: "General",
    links: [
      { label: "Pricing",            href: "/pricing" },
      { label: "Institutional Docs", href: "/docs/institutions" },
      { label: "FAQs",               href: "/faqs" },
    ],
  },
  {
    title: "Contact Us",
    links: [
      { label: "Contact Us",          href: "/contact" },
      { label: "Schedule a Meeting",  href: "/schedule-meeting" },
    ],
  },
];

// ── Hero bullet points ────────────────────────────────────────
export const HERO_BULLETS_LEFT = [
  "See copy-paste events, editing time, etc.",
  "Encourage students to think and reflect",
  "Identify why students struggle to write",
];
export const HERO_BULLETS_RIGHT = [
  "Prevent plagiarism through transparency",
  "Promote academic integrity meaningfully",
  "Explore how students use AI",
];

// ── Stat cards ────────────────────────────────────────────────
export const STAT_CARDS = [
  { num: "100+", label: "Countries",     desc: "Used by teachers and students" },
  { num: "500+", label: "Institutions",  desc: "Used in schools, colleges, and universities" },
  { num: "50K+", label: "Active Users",  desc: "Have reviewed their writing process" },
];

// ── Teacher tools ─────────────────────────────────────────────
export const TEACHER_TOOLS = [
  {
    title: "Editor for Your Students",
    points: ["Takes two minutes", "Use it for entire term"],
    btnLabel: "About Editors",
    href: "/editor",
  },
  {
    title: "Create Assignments",
    points: ["Teacher dashboard", "Automatic process feedback"],
    btnLabel: "About Assignments",
    href: "/assignment",
  },
  {
    title: "Google Docs Extension",
    points: ["Easy to install", "No need to preinstall"],
    btnLabel: "About Extension",
    href: "/gdocs",
  },
  {
    title: "Extension for LMS",
    points: ["Works in discussion boards", "Canvas, D2L, etc."],
    btnLabel: "About Extension",
    href: "/extension",
  },
];

// ── Student tools ─────────────────────────────────────────────
export const STUDENT_TOOLS = [
  {
    title: "Online Document Editor",
    points: ["No account needed", "No monitoring"],
    btnLabel: "Start Writing",
    href: "/writing-editor",
  },
  {
    title: "Online Compiler",
    points: ["AI explains errors", "Supports Python, Java, C++, and more"],
    btnLabel: "Start Coding",
    href: "/online-compiler",
  },
  {
    title: "Google Docs Extension",
    points: ["Easy to install", "No need to preinstall"],
    btnLabel: "Install",
    href: "/gdocs",
  },
  {
    title: "Process Feedback Extension",
    points: ["Runs locally", "Student-centered"],
    btnLabel: "Install",
    href: "/extension",
  },
];

// ── Reveal writing process bullets ───────────────────────────
export const REVEAL_POINTS = [
  "We neither endorse nor oppose students using AI—our technology simply reveals the steps a student took to complete their work. You decide how to use these insights.",
  "We believe that a student's working process matters, regardless of whether AI is involved.",
  "Assigning students to reflect on their working process fosters metacognitive thinking. Feel free to use our sample assignment to guide such a reflection.",
  "Feedback on the process should be context-specific, which is why we don't provide explicit evaluations. Instead, we make it easier to offer or acquire meaningful process feedback.",
];

// ── FAQ ───────────────────────────────────────────────────────
export const FAQS = [
  {
    q: "1. If a student copy-pastes, will the writing process report show it?",
    a: "Yes. A writing process report shows all copy-paste events larger than 25 characters (by default). In the report, you can see what was pasted and when it was pasted. A writing process report has a dedicated section called Paste Events.",
  },
  {
    q: "2. Does Process Feedback analyze AI usage?",
    a: "Process Feedback works regardless of whether or not students are allowed to use generative AI tools. While it doesn't automatically detect AI usage, the data it provides can help you see how and when AI might have been used.",
  },
  {
    q: "3. Besides English, what languages are supported?",
    a: "Process Feedback is designed to work automatically with most languages, including languages like French and Spanish. If a language uses special characters as sentence terminators or word separators, you can specify them in the Settings.",
  },
  {
    q: "4. Does Process Feedback work with Microsoft Word?",
    a: "Not yet. For Process Feedback to work, students need to write in Google Docs or use our online writing/coding editor. We are actively working on developing additional extensions, including one for Microsoft Word.",
  },
  {
    q: "5. Reviewing students' processes can be time-consuming! Is there a way to make it easier?",
    a: "It can be, but you have options. You can have students do much of the reviewing themselves by assigning short reflection assignments. You can also have students submit their writing process data ZIP files so you can load them all up in the teacher dashboard and explore them at once.",
  },
  {
    q: "6. Will students feel anxious about being tracked?",
    a: "Whether or not students feel anxious often depends on how you introduce Process Feedback, as well as your teaching context and grade level. Ideally, you'll encourage students to review their own work and complete reflection assignments so they stay in control of their learning.",
  },
  {
    q: "7. Does Process Feedback detect plagiarism?",
    a: "Process Feedback does not directly detect plagiarism. However, it can help teachers investigate suspicious cases by providing detailed information about a student's work. We believe prevention is more important than detection.",
  },
  {
    q: "8. If I notice a student copy-pasted, how should I grade them?",
    a: "Copy-pasting text or code itself may or may not be a concern depending on the context and an instructor's requirements. Students should not be penalized simply for copy-pasting. However, students can be penalized for not following directions.",
  },
  {
    q: "9. Does Process Feedback work with LMS platforms like Canvas or Blackboard?",
    a: "Yes. We have developed an extension specifically for LMSs. Regardless of which LMS you use, students can always write in Google Docs or in Process Feedback's Writing Editor, download their writing process report as a PDF, and upload it to your LMS.",
  },
  {
    q: "10. What technical support is available for teachers and students?",
    a: "Process Feedback has a live chat feature. Sometimes our support team may not be available right away. You are welcome to email us anytime at contact@processfeedback.org.",
  },
  {
    q: "11. What value does Process Feedback add to good teaching?",
    a: "Process Feedback illuminates the otherwise hidden stages of a student's work, enabling teachers to see the steps taken. By tracking drafts, edits, and patterns of learning, it helps teachers offer more personalized, timely, and constructive guidance.",
  },
  {
    q: "12. We have large classes. How can Process Feedback support teachers?",
    a: "Process Feedback offers a teacher dashboard where you can load hundreds of writing process reports at once. This allows you to explore and compare students' processes together.",
  },
];

// ── Team members (current) ────────────────────────────────────
export const TEAM_CURRENT = [
  { name: "Badri Adhikari, PhD",    role: "Process Feedback | Founder" },
  { name: "Kripa Sigdel",           role: "Software Engineering Intern" },
  { name: "Nooreen Fatima",         role: "Software Engineer" },
  { name: "Lokesh C.S.R. Katikala", role: "Software Engineer" },
  { name: "Chirayu Prasai",         role: "Senior Software Engineer (Contractor)" },
  { name: "Utsab Neupane",          role: "QA Engineer (Contractor)" },
  { name: "Shreya Pokharel",        role: "QA Engineer (Contractor)" },
  { name: "Arpan Paudel",           role: "Senior Software Engineer (Contractor)" },
  { name: "Rohan Shrestha",         role: "Software Engineer (Contractor)" },
  { name: "Subodh Dahal",           role: "Research & Communications Consultant (Contractor)" },
  { name: "Rusha Manandhar",        role: "Software Engineering Intern" },
  { name: "Nilima Kafle",           role: "Growth & Analytics Engineer" },
];

// ── Team members (alumni) ─────────────────────────────────────
export const TEAM_ALUMNI = [
  { name: "Jason Wagstaff (2023)",       role: "Now at University of Missouri" },
  { name: "Nirala Lamichhane (2025)",    role: "Now at Bavaria, Germany" },
  { name: "Milan Adhikari (2024)",       role: "Now at University of Technology Nuremberg" },
  { name: "Rasik Nepal (2024)",          role: "Now at Kathmandu, Nepal" },
  { name: "Bishal Shrestha (2023)",      role: "Now at University of Miami" },
  { name: "Nitesh Kafle",                role: "Now at University of Niagara Falls Canada" },
  { name: "Sameep Dhakal (2024)",        role: "Now at University of Missouri-Columbia" },
  { name: "Shaney Flores (2023)",        role: "Washington University in Saint Louis" },
  { name: "Kate Arendes (2023)",         role: "Now at New York University" },
  { name: "Bibhusan Sharma (2025)",      role: "Now at University of Texas, Dallas" },
  { name: "Satyam Tiwari (2025)",        role: "Now at Tribhuvan University" },
  { name: "Saramsika Dahal (2025)",      role: "Now at Tribhuvan University" },
  { name: "Emma Scally (2024)",          role: "Now at Capital One" },
  { name: "Arya Gijare (2024)",          role: "Now at Mastercard" },
  { name: "Aadya Jha (2024)",            role: "Now at University of Delhi" },
  { name: "Prabhat Timsina (2024)",      role: "Now at North Carolina" },
  { name: "Aayusha Singh (2023)",        role: "Now at Prosetech Solutions" },
  { name: "Griwan Khakurel (2023)",      role: "Now at Speakup Nepal" },
  { name: "Achyut Paudel (2023)",        role: "Now at Novedea Systems, Inc." },
  { name: "Alina Nguyen (2023)",         role: "Now at University of Missouri-St. Louis" },
  { name: "Siddhartha Pullannagari (2023)", role: "Now at University of Missouri-St. Louis" },
];  

// ── Research papers ───────────────────────────────────────────
export const RESEARCH_PRIMARY = [
  {
    bg: "#ffffff",
    journal: "Education Sciences, 2023",
    article: "Thinking Beyond Chatbots’ Threat to Education: Visualizations to Elucidate the Writing or Coding Process",
    journalLabel: "Education Sciences, 2023",
    abstract: "This was the first peer-reviewed research publication on Process Feedback. It introduces the central idea of the tool, how it directly helps students develop metacognition, and how it respects their privacy.",
    authors: "Badri Adhikari",
    readLabel: "Education Sciences Article",
    href: "https://www.mdpi.com/2227-7102/13/9/922",
    img: "/mdpi-article-2023.webp",
    imgAlt: "MDPI Education Sciences journal logo",
    imagePosition: "left",
  },
  {
    bg: "#F2FFF8",
    journal: "IEEE Frontiers in Education, 2024",
    article: "Maximizing Student Engagement in Coding Education with Explanatory AI",
    journalLabel: "IEEE Frontiers in Education, 2024",
    abstract: "With around 200 student participants, this paper discusses an interesting finding: AI feedback features were found to be most useful for students learning to code compared to those who already have some coding experience. It also finds that female students find the AI feedback feature more helpful.",
    authors: "Badri Adhikari, Sameep Dhakal, and Aadya Jha",
    readLabel: "IEEE FIE Article",
    href: "https://ieeexplore.ieee.org/document/10893108",
    img: "/ieee-fie.webp",
    imgAlt: "IEEE Frontiers in Education logo",
    imagePosition: "right",
  },
  {
    bg: "#ffffff",
    journal: "Edukasiana: Jurnal Inovasi Pendidikan, 2023",
    article: "Engaging Students to Learn Coding in the AI Era with Emphasis on the Process",
    journalLabel: "Edukasiana: Jurnal Inovasi Pendidikan, 2023",
    abstract: "This paper surveys several teachers and students who used Process Feedback in their classes. It finds that when tools like Process Feedback are introduced in a way that students perceive as potentially beneficial to their learning, they are more open to using them in their work.",
    authors: "Kate Arendes, Shea Kerkhoff, and Badri Adhikari",
    readLabel: "Edukasiana Article",
    href: "https://ejournal.papanda.org/index.php/edukasiana/article/view/728",
    img: "/edukasiana-article.webp",
    imgAlt: "Edukasiana journal logo",
    imagePosition: "left",
  },
];

export const RESEARCH_ADDITIONAL = [
  {
    bg: "#ffffff",
    journal: "Written Communication, 2022",
    article: "Writing Process Feedback Based on Keystroke Logging and Comparison With Exemplars: Effects on the Quality and Process of Synthesis Texts",
    journalLabel: "Written Communication, 2022",
    abstract: "This research study, involving sixty-five tenth-grade Dutch students, found that implementing the process feedback approach for just one week led to an improvement in writing quality that would typically take a year to achieve. This paper was a key inspiration for the Process Feedback project.",
    authors: "Nina Vandermeulen, Elke Van Steendam, and Gert Rijlaarsdam",
    readLabel: "Written Communication Article",
    href: "https://journals.sagepub.com/doi/10.1177/07410883221127998",
    img: "/written-communication-article.webp",
    imgAlt: "Written Communication journal logo",
    imagePosition: "left",
  },
  {
    bg: "#F2FFF8",
    journal: "The Journal of Writing Analytics, 2025",
    article: "Effort is All You Need: The Possibilities of Writing Analytics",
    journalLabel: "The Journal of Writing Analytics, 2025",
    abstract: "This paper explores how process-based analytics can shift the focus from final writing products to the actual effort and engagement demonstrated by students during the drafting process. It argues that by making this ‘hidden’ labor visible, educators can better support student development and move beyond the limitations of traditional outcome-based assessment.",
    authors: "Raymond Oenbring",
    readLabel: "Journal of Writing Analytics Article",
    href: "https://wacclearinghouse.org/jwa/archives/vol8/",
    img: "/innovations-in-analytics-article.webp",
    imgAlt: "Journal of Writing Analytics logo",
    imagePosition: "right",
  },
];
// ── Teacher Guides list ───────────────────────────────────────
export const TEACHER_GUIDES = [
  { label: "Classroom announcement or syllabus statement", href: "/docs/classroom-announcement" },
  { label: "Integration option 1 - Let students choose what editor they want to use", href: "/docs/option-type-in-google-docs-or-pf" },
  { label: "Integration option 2 - Create a custom editor for your class", href: "/docs/option-create-custom-editor" },
  { label: "Integration option 3 - Create an assignment in Process Feedback", href: "/docs/option-create-assignment" },
  { label: "Example Feedback prompts library", href: "/docs/feedback-prompts-library" },
  { label: "How to explore Google Docs documents with multiple tabs", href: "/docs/exploring-gdocs-with-multiple-tabs" },
  { label: "Identify AI-assisted writing patterns", href: "/docs/identify-ai-usage" },
  { label: "How to create an assignment? A step-by-step tutorial", href: "/docs/step-by-step-create-assignment" },
  { label: "How to create a custom editor? A step-by-step tutorial", href: "/docs/step-by-step-create-editor" },
  { label: "How to install Process Feedback for Google Docs extension? A step-by-step tutorial", href: "/docs/step-by-step-install-gdocs" },
  { label: "Writing process reflection prompts", href: "/docs/writing-process-reflection-prompts" },
  { label: "How to use AI to explore the writing process", href: "/docs/how-to-use-ai-with-pf" },
  { label: "I have a large class. How can I use Process Feedback?", href: "/docs/i-have-a-large-class" },
];// constants v1
