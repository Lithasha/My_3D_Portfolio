import { a } from "framer-motion/client";
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
  meta,
  starbucks,
  tesla,
  shopify,
  sqlserver,
  carrent,
  jobit,
  tripguide,
  aws,
  selenium,
  resApi,
  github,
  postgresql,
  visualstudio,
  visualstudiocode,
  intellij,
  androidstudio,
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

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    icon: sqlserver,
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
    icon: resApi,
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
    icon: visualstudiocode,
  },
  {
    name: "Visual Studio",
    icon: visualstudio,
  },
  {
    name: "Android Studio",
    icon: androidstudio,
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
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
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
