// import { a } from "framer-motion/client";
import {
  profile,
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
  // sqlServer,
  campusCare,
  makeup,
  kiyoshi,
  testAutomation,
  weather,
  hospital,
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

const services = [
  {
    title: "System/Business Analyst",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: backend,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "QA/Software Tester",
    icon: creator,
  }
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
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  // },
  {
    name: "SQL",
    icon: sql,
  },
  // {
  //   name: "PHP",
  //   icon: php,
  // },
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS",
  //   icon: css,
  // },
  // {
  //   name: "Dart",
  //   icon: dart,
  // },
  {
    name: "COBOL",
    icon: cobol,
  },
  // Frameworks and Technologies
  {
    name: "React.js",
    icon: reactjs,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  // {
  //   name: "Next.js",
  //   icon: nextjs,
  // },
  {
    name: ".NET",
    icon: net,
  },
  // {
  //   name: "Flutter",
  //   icon: flutter,
  // },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  // {
  //   name: "SQL Server",
  //   icon: sqlServer,
  // },
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
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // Tools
  // {
  //   name: "Visio",
  //   icon: visio,
  // },
  // {
  //   name: "Git",
  //   icon: git,
  // },
  {
    name: "GitHub",
    icon: github,
  },
  // {
  //   name: "Visual Studio Code",
  //   icon: visualStudioCode,
  // },
  // {
  //   name: "Visual Studio",
  //   icon: visualStudio,
  // },
  // {
  //   name: "Android Studio",
  //   icon: androidStudio,
  // },
  // {
  //   name: "IntelliJ IDEA",
  //   icon: intellij,
  // },
  // {
  //   name: "PgAdmin",
  //   icon: pgadmin,
  // },
  // {
  //   name: "SQL Server Management Studio",
  //   icon: ssms,
  // },
  // {
  //   name: "Postman",
  //   icon: postman,
  // },
  // {
  //   name: "Jira",
  //   icon: jira,
  // },
  // {
  //   name: "Confluence",
  //   icon: confluence,
  // },
  // {
  //   name: "Figma",
  //   icon: figma,
  // },
  // Methodologies and Concepts
  // {
  //   name: "Agile",
  //   icon: agile,
  // },
  // {
  //   name: "SDLC",
  //   icon: sdlc,
  // },
  // {
  //   name: "Software Testing",
  //   icon: softwareTesting,
  // },
  // {
  //   name: "Object-Oriented Programming (OOP)",
  //   icon: oop,
  // },
  // {
  //   name: "UML",
  //   icon: uml,
  // }
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
      "Driven to succeed and keen to learn, Lithasha approaches her development with a mindset that sets her apart. She isn't chasing a finish line — she's chasing a better version of herself than the one that walked in the day before.",
    name: "Stephen Forbes",
    designation: "Professor of Information Technology",
    company: "Durham College",
    // image: profile,
    linkedin: "https://www.linkedin.com/in/stephenjdforbes/",
  },
  {
    testimonial:
      "If I could hire Lithasha, I would in a heartbeat. She has proven to have a fantastic work ethic and determination that is rare in students in recent years.",
    name: "Thomas Turner",
    designation: "Part-time Faculty",
    company: "Durham College",
    // image: profile,
    linkedin: "https://www.linkedin.com/in/thomasmturner/",
  },
  {
    testimonial:
      "She stood out due to her genuine interest in the course content and focus on true understanding of the material (rather than simply trying to memorize it for assessments as many student do).",
    name: "Dr. Lynne (Daigle) Kennette",
    designation: "Professor of Psychology",
    company: "Durham College",
    // image: profile,
    linkedin: "https://www.linkedin.com/in/drkennette/",
  },
  {
    testimonial:
      "What impressed me most was Lithasha’s proactive approach to learning; she was never afraid to ask the tough questions required to truly master a complex concept.",
    name: "Andrew Luxmore",
    designation: "Professor",
    company: "Durham College",
    // image: profile,
    linkedin: "https://www.linkedin.com/in/andrew-luxmore-218b44360/",
  },
  {
    testimonial:
      "She consistently achieved excellent results and brought a thoughtful, curious presence to class. In OOP3 she produced an outstanding comparative report on Java versus Python, reflecting strong analytical and written communication skills.",
    name: "Kyle Chapman",
    designation: "Full-time Faculty",
    company: "Durham College",
    // image: profile,
    linkedin: "https://www.linkedin.com/in/kyledchapman/",
  },
  {
    testimonial:
      "Lithasha distinguished themselves as one of the strongest students across two mainframe development courses with me, consistently demonstrating dedication and focus on mastery in a technology known for its complexity and demanding learning curve.",
    name: "Andrew Mayne",
    designation: "Full-time Faculty",
    company: "Durham College",
    // image: profile,
    linkedin: "https://www.linkedin.com/in/andrew-mayne-5a7b4681/",
  },
  {
    testimonial:
      "Lithasha demonstrated solid technical skills, a clear understanding of core web development concepts, and a growing confidence in her abilities.  She would be a great addition to any team and has a very promising future ahead.",
    name: "Sergio Santilli",
    designation: "Full-time Faculty",
    company: "Durham College",
    // image: profile,
    linkedin: "https://www.linkedin.com/in/sergio-santilli-69b73732/",
  }

];

const projects = [
  {
    name: "Campus Care",
    description: [
      "Built a fully accessible full-stack appointment booking and virtual queue management system using React.js, Node.js, and PostgreSQL (NeonDB).",
      " Developed responsive user interfaces, REST APIs, and CRUD functionality for managing appointments and reducing patient wait times.",
      " Collaborated as part of a four-member development team with a health clinic manager to gather requirements and deliver features aligned with real-world healthcare workflows.",
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
      {
        name: "REST API",
        color: "orange-text-gradient",
      },
    ],
    image: campusCare,
    source_code_link: "https://github.com/Lithasha/CampusCare",
  },
  {
    name: "Sushi Bai Kiyoshi",
    description: [
      "Collaborated as part of a team to design and develop a full-stack order management system based on a real-world business case, contributing to database structure, requirements gathering, and system boundary design.",
      " Developed ERDs and detailed functional and non-functional specifications while implementing role-based access control, inventory, loyalty, menu, and cart management.",
      " Presented the completed solution as a team to a review panel, demonstrating its functionality and overall system design.",
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
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
      {
        name: "RBAC",
        color: "orange-text-gradient",
      }
    ],
    image: kiyoshi,
    source_code_link: "https://github.com/Lithasha/KiyoshisRestaurant",
  },
  {
    name: "Makeup Product Showcase Web Application",
    description: [
      "Collaborated in a team of two to develop a responsive web application using Next.js and Contentful CMS with dynamic routing, static site generation, pagination, and reusable components. ",
      "Implemented secure authentication using JWT, protected API routes, and role-based access control for administrative product management. ",
      "Applied modern development practices and Git-based version control to build a scalable and maintainable application. ",
    ],
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Contentful CMS",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "JWT Authentication",
        color: "orange-text-gradient",
      }
    ],
    image: makeup,
    source_code_link: "https://github.com/Lithasha/makeup-products-showcase",
  },
  {
    name: "Test Automation of Bank Project",
    description: [
      "Developed automated test scripts using Python and Selenium to validate a banking web application's functionality. ",
      " Executed regression and functional test cases across multiple user scenarios, identifying defects and verifying expected application behaviour.",
      " Collaborated in a four-member team to design test cases, document results, and improve software quality. ",
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
      {
        name: "Test Automation",
        color: "pink-text-gradient",
      },
      {
        name: "QA",
        color: "orange-text-gradient",
      },
    ],
    image: testAutomation,
    source_code_link: null,
  },
  {
    name: "Weather Forecast App",
    description: [
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
      {
        name: "REST API",
        color: "orange-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/Lithasha/WeatherApp",
  },
  {
    name: "Hospital Database Management Project",
    description: [
      "Collaborated with a four-member team to design and develop a hospital database using SQL Server Management Studio and Visio ERDs.",
      "Developed SQL queries to manage and retrieve patient, appointment, and staff data while maintaining data integrity.",
      "Created technical documentation and presented the database architecture, functionality, and design decisions.",
    ],
    tags: [
      {
        name: "SQL",
        color: "blue-text-gradient",
      },
      {
        name: "SQL Server",
        color: "green-text-gradient",
      },
      {
        name: "ERD",
        color: "pink-text-gradient",
      },
      {
        name: "Database Design",
        color: "orange-text-gradient",
      }
    ],
    image: hospital,
    source_code_link: null,
  },
  // {
  //   name: "Dojo Blog Application", 
  //   description:[
  //       "Built a responsive CRUD blog application using React, HTML and CSS in Visual Studio Code, allowing users to create, view, update, and delete blog posts.",
  //       "Implemented dynamic UI components and state management to provide a smooth and interactive user experience.",
  //       "Designed reusable components and organized application logic to improve maintainability, functionality, and overall responsiveness.",
  //   ],
  //   tags: [
  //     {
  //       name: "React.js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "CSS",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "HTML",
  //       color: "pink-text-gradient",
  //     }
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/Lithasha/Dojo-Blog",
  // },
  // {
  //   name: "Go Fish", 
  //   description:[
  //       "Collaborated with a team of three to develop a fully accessible two-player Go Fish desktop application using C# and Visual Studio.",
  //       "Implemented customizable card count options, game logic, and interactive features to provide flexible and engaging gameplay.",
  //       "Designed an intuitive, accessible user interface and contributed to testing and debugging to ensure a smooth experience for all users.",
  //   ],
  //   tags: [
  //     {
  //       name: "C#",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: ".NET",
  //       color: "green-text-gradient",
  //     }
  //   ],
  //   image: tripguide,
  //   // source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Grade Management Website", 
  //   description:[
  //       "Developed a dynamic student grade management website using PHP, HTML, SQL, pgAdmin, and Visual Studio Code.",
  //       "Designed and integrated a relational database to securely store, manage, and retrieve student grade records",
  //       "Implemented database-driven functionality to efficiently retrieve and display student grades through an intuitive and responsive web interface.",
  //   ],
  //   tags: [
  //     {
  //       name: "PHP",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "HTML",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "SQL",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "pgAdmin",
  //       color: "blue-text-gradient",
  //     }
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Tic Tac Toe Game",

  //   description: [
  //     "Developed a two-player Tic Tac Toe desktop game using C# and Visual Studio.",
  //     "Implemented core game logic, player turn management, and win/draw conditions to support interactive gameplay.",
  //     "Tested and debugged game functionality to ensure reliable and responsive user interactions."
  //   ],

  //   tags: [
  //     {
  //       name: "C#",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Visual Studio",
  //       color: "green-text-gradient",
  //     }
  //   ],

  //   image: tictactoe,

  //   source_code_link: "https://github.com/",
  // },


];

export { services, technologies, experiences, testimonials, projects };
