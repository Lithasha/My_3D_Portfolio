// import { a } from "framer-motion/client";
import {
  mobile,
  backend,
  creator,
  web,
  python,
  csharp,
  javascript,
  typescript,
  net,
  nextjs,
  sql,
  dart,
  cobol,
  php,
  java,
  html,
  css,
  reactjs,
  tailwind,
  flutter,
  nodejs,
  mongodb,
  visio,
  git,
  figma,
  docker,
  selenium,
  sqlServer,
  carrent,
  jobit,
  tripguide,
  aws,
  restApi,
  github,
  postgresql,
  visualStudio,
  visualStudioCode,
  intellij,
  androidStudio,
  pgadmin,
  ssms,
  postman,
  jira,
  confluence,
  agile,
  sdlc,
  softwareTesting,
  oop,
  uml,
  jinadasaConsultingInc,
  durhamCollege,
  oxfordLearning,
  dcsa,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C#",
    icon: csharp,
  },  
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "Dart",
    icon: dart,
  },
  {
    name: "COBOL",
    icon: cobol,
  }
];

const frameworksTechnologies = [
   {
    name: "React.js",
    icon: reactjs,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: ".NET",
    icon: net,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "SQL Server",
    icon: sqlServer,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Selenium",
    icon: selenium,
  },
  {
    name: "REST API",
    icon: restApi,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
];

const tools = [
    {
    name: "Visio",
    icon: visio,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "Visual Studio Code",
    icon: visualStudioCode,
  },
  {
    name: "Visual Studio",
    icon: visualStudio,
  },
  {
    name: "Android Studio",
    icon: androidStudio,
  },
  {
    name: "IntelliJ IDEA",
    icon: intellij,
  },
  {
    name: "PgAdmin",
    icon: pgadmin,
  },
  {
    name: "SQL Server Management Studio",
    icon: ssms,
  },
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "Jira",
    icon: jira,
  },
  {
    name: "Confluence",
    icon: confluence,
  },
  {
    name: "Figma",
    icon: figma,
  },
];

const methodologiesConcepts = [
    {
    name: "Agile",
    icon: agile,
  },
  {
    name: "SDLC",
    icon: sdlc,
  },
  {
    name: "Software Testing",
    icon: softwareTesting,
  },
  {
    name: "Object-Oriented Programming (OOP)",
    icon: oop,
  },
  {
    name: "UML",
    icon: uml,
  }
];

const experiences = [
  {
    title: "Technical Analyst (Co-op)",
    company_name: "Jinadasa Consulting Inc.",
    icon: jinadasaConsultingInc,
    iconBg: "#383E56",
    date: "May 2025 - Aug 2025",
    points: [
      "Supported the development of the company’s first mobile application through requirements gathering user research, technical documentation, and UI wireframe design. ",
      "Collaborated with developers and project managers in Agile meetings to track progress, refine requirements, and support development activities. ",
      "Translated business needs into functional requirements and design concepts to help deliver a mobile solution.",
    ],
  },
  {
    title: "Peer Tutor",
    company_name: " Durham College",
    icon: durhamCollege,
    iconBg: "#E6DEDD",
    date: "Sep 2024 - Dec 2025  ",
    points: [
      "Provided support in programming, database courses, and mathematics to strengthen students’ understanding.",
      "Explained complex concepts through clear communication and tailored learning approaches.",
      "Developed mentorship, leadership, and problem-solving skills while supporting student success.",
    ],
  },
  {
    title: "Tutor",
    company_name: "Oxford Learning       ",
    icon: oxfordLearning,
    iconBg: "#383E56",
    date: "December 2024 – July 2025  ",
    points: [
      "Delivered personalized tutoring to students of various ages, fostering a supportive and effective learning environment.",
      "Helped students strengthen their understanding of challenging subjects, developing analytical and problem-solving skills.",
    ],
  },
  {
    title: "Hospitality Team Member",
    company_name: "Durham College Student Association",
    icon: dcsa,
    iconBg: "#E6DEDD",
    date: "Aug 2025 - Present  ",
    points: [
      "Support daily food service operations by preparing orders and using POS systems.",
      "Maintain food safety, cleanliness, inventory organization, and efficient front- and back-of-house operations. ",
      "Collaborate with team members and managers to follow procedures and deliver quality customer service. ",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Driven to succeed and keen to learn, Lithasha approaches her development with a mindset that sets her apart. She isn't chasing a finish line — she's chasing a better version of herself than the one that walked in the day before. That kind of intrinsic motivation is something no curriculum can install in a person. You either have it or you don't, and Lithasha has it in a way that makes everything else she does sharper, more purposeful, and more meaningful.",
    name: "Stephen Forbes",
    designation: "Professor of Information Technology",
    company: "Durham College",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    linkedin: "https://www.linkedin.com/in/stephenjdforbes/",
  },
  {
    testimonial:
      "If I could hire Lithasha, I would in a heartbeat. She has proven to have a fantastic work ethic and determination that is rare in students in recent years. In a class where students seldom show up, she is there, putting in the work and taking the time to learn. I would stake my reputation on recommending anyone hire her and take a chance on her. You will NOT be disappointed.",
    name: "Thomas Turner",
    designation: "Part-time Faculty",
    company: "Durham College",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    linkedin: "https://www.linkedin.com/in/thomasmturner/",
  },
  {
    testimonial:
      "Her communication skills were admirable, both in terms of initiating communication and regarding her written English and professional tone. She asked clarification questions when necessary and wasn't afraid to reach out as needed.She performed very well in the course and was among my best students this semester.",
    name: "Dr. Lynne (Daigle) Kennette",
    designation: "Professor of Psychology",
    company: "Durham College",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    linkedin: "https://www.linkedin.com/in/drkennette/",
  },
  {
    testimonial:
      "What impressed me most was Lithasha’s proactive approach to learning; she was never afraid to ask the tough questions required to truly master a complex concept.Throughout the term, she demonstrated a solid grasp of web development fundamentals, specifically excelling in her understanding of HTTP APIs and microservice architecture.",
    name: "Andrew Luxmore",
    designation: "Professor",
    company: "Durham College",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    linkedin: "https://www.linkedin.com/in/andrew-luxmore-218b44360/",
  },
  {
    testimonial:
      "I taught Lithasha in four courses between 2024-2025, including Introduction to Programming, two Object-Oriented Programming courses, and Emerging Technologies. She consistently achieved excellent results and brought a thoughtful, curious presence to class. In OOP3 she produced an outstanding comparative report on Java versus Python, reflecting strong analytical and written communication skills.Lithasha is also quick to seek clarification when needed, often visiting office hours with insightful questions that sometimes informed future classes. ",
    name: "Kyle Chapman",
    designation: "Full-time Faculty",
    company: "Durham College",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    linkedin: "https://www.linkedin.com/in/kyledchapman/",
  },
  {
    testimonial:
      "Lithasha distinguished themselves as one of the strongest students across two mainframe development courses with me, consistently demonstrating dedication and focus on mastery in a technology known for its complexity and demanding learning curve.Lithasha's strong analysis and design skills, combined with their collaborative approach and attention to detail, resulted in consistently polished work. Lithasha's commitment to mastery and professional approach to both independent and collaborative work make them an excellent candidate for any technical role.",
    name: "Andrew Mayne",
    designation: "Full-time Faculty",
    company: "Durham College",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    linkedin: "https://www.linkedin.com/in/andrew-mayne-5a7b4681/",
  },
  {
    testimonial:
      "Lithasha demonstrated solid technical skills, a clear understanding of core web development concepts, and a growing confidence in her abilities.  She would be a great addition to any team and has a very promising future ahead.",
    name: "Sergio Santilli",
    designation: "Full-time Faculty",
    company: "Durham College",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    linkedin: "https://www.linkedin.com/in/sergio-santilli-69b73732/",
  }
  
];

const projects = [
  {
    name: "Campus Care",
    description: [
      "Built a fully accessible full-stack appointment booking and virtual queue management system using React.js, Node.js, and PostgreSQL (NeonDB). ",
      "Developed responsive user interfaces, REST APIs, and CRUD functionality for managing appointments and reducing patient wait times.",
      "Led a four-member development team and collaborated with a health clinic manager to gather requirements and deliver features aligned with real-world healthcare workflows.",
    ],
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL (NeonDB)",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Lithasha/campus-care",
  },
  {
    name: "Test Automation of Bank Project",
    description: [
        "Developed automated test scripts using Python and Selenium to validate a banking web application's functionality. ",
        "Executed regression and functional test cases across multiple user scenarios, identifying defects and verifying expected application behaviour.",
        "Guided a four-member team to design test cases, document results, and improve software quality. ",
    ],
      
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Selenium",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Lithasha/",
  },
  {
    name: "Weather Forecast App", 
    description:[
        "Built a mobile weather application using Flutter and Dart with OpenWeather API integration to display current conditions and five-day forecasts.  ",
        "Implemented API communication, JSON parsing, date/time conversion, and interactive navigation features.",
        "Designed a responsive and intuitive user interface using clean UI principles to enhance the mobile user experience.",
    ],
    tags: [
      {
        name: "Dart",
        color: "blue-text-gradient",
      },
      {
        name: "Flutter",
        color: "green-text-gradient",
      },
      {
        name: "JSON",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, frameworksTechnologies, tools, methodologiesConcepts, experiences, testimonials, projects };
