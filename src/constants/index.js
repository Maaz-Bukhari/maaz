import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  jobit,
  tripguide,
  threejs,
  angular,
  nextjs,
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
    title: "Javacript Developer",
    icon: web,
  },
  {
    title: "React/Next.js Developer",
    icon: backend,
  },
  {
    title: "Angular Developer",
    icon: mobile,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Development Intern",
    company_name: "Khan Technologies",
    icon: web,
    iconBg: "#d9fb51",
    date: "June 2022 - December 2022",
    points: [
      "Completed a six-month web development internship focused on practical web application development.",
      "Built and refined responsive user interfaces while developing production-oriented engineering habits.",
      "Worked with a development team, incorporated feedback, and strengthened debugging and problem-solving skills.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Qutham Technologies",
    icon: mobile,
    iconBg: "#70d5ff",
    date: "February 2023 - September 2025",
    points: [
      "Developed responsive, reusable interfaces for production web applications.",
      "Translated product and design requirements into maintainable frontend features and shared components.",
      "Integrated APIs, handled application state, and collaborated across design and backend workflows.",
      "Improved usability, consistency, and cross-device behavior across delivered products.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Qutham Technologies",
    icon: backend,
    iconBg: "#ff735c",
    date: "September 2025 - July 2026",
    points: [
      "Promoted from frontend development to a full-stack role based on expanded product and engineering responsibilities.",
      "Build end-to-end features spanning modern frontend applications, Node.js APIs, databases, and authentication.",
      "Design API-driven workflows, operational dashboards, and maintainable application architecture.",
      "Contribute across implementation, debugging, security, deployment readiness, and product refinement.",
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
    slug: "angular-ecommerce-platform",
    name: "Angular E-Commerce Platform",
    description:
      "A full-stack commerce system with an Angular 21 SSR storefront, protected Angular admin dashboard, and secure Node.js API for catalog, checkout, inventory, orders, users, and media.",
    tags: [
      {
        name: "angular 21",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: "/ecommerce-project.svg",
    source_code_link:
      "https://github.com/Maaz-Bukhari/angular-ecommerce-platform",
    live_link: "https://github.com/Maaz-Bukhari/angular-ecommerce-platform",
    category: "Commerce / Full-Stack Platform",
    year: "2026",
    role: "Architecture, frontend & backend",
    challenge:
      "A real commerce product needs more than a storefront: customers need a fast and discoverable purchase journey while administrators need secure tools for catalog, stock, orders, users, and media.",
    solution:
      "Three independently deployable applications connect an Angular SSR storefront and protected Angular admin panel to a versioned Express API with MongoDB, Cloudinary, JWT authentication, rotating refresh tokens, and server-side authorization.",
    impact: [
      "Angular SSR storefront",
      "Protected admin operations",
      "Secure versioned REST API",
    ],
    accent: "#d9fb51",
  },
  {
    slug: "hisaar360-retail-management-system",
    name: "Hisaar360 - Retail Management System",
    description:
      "A retail management platform covering inventory, products, sales, and business operations with responsive dashboards and API-driven data flows.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: "/image.png",
    source_code_link: "https://github.com/Maaz-Bukhari",
    live_link: "https://hisaar360.com/",
    category: "Retail / Management System",
    year: "2025",
    role: "Full-Stack Development",
    challenge:
      "Managing retail inventory, tracking product sales, and handling business operations efficiently requires structured, real-time data flow and clear administrative workflows.",
    solution:
      "Built a comprehensive retail management platform featuring responsive dashboards, real-time stock tracking, reporting, and secure role-based management features.",
    impact: [
      "Inventory tracking",
      "Operational dashboards",
      "API-driven data flows",
    ],
    accent: "#70d5ff",
  },
  {
    slug: "ai-powered-real-time-chat-platform",
    name: "AI-Powered Real-Time Chat Platform",
    description:
      "A full-stack real-time chat platform using React, TypeScript, Node.js, Express.js, and MongoDB featuring Socket.IO messaging and Google Gemini integration.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "ai",
        color: "green-text-gradient",
      },
      {
        name: "socket.io",
        color: "pink-text-gradient",
      },
    ],
    image: "/ai.png",
    source_code_link: "https://github.com/Maaz-Bukhari/ai-chatbot",
    category: "AI Systems / Real-Time Platform",
    year: "2026",
    role: "Full-Stack & AI Integration",
    challenge:
      "Users require seamless, low-latency messaging alongside smart contextual assistance and secure multimedia storage in a unified environment.",
    solution:
      "Engineered an end-to-end real-time chat platform leveraging Socket.IO for live presence and typing indicators, integrated with Google Gemini for AI chat capabilities, and secured using JWT authentication with AWS S3 storage.",
    impact: [
      "Real-time messaging",
      "Google Gemini AI integration",
      "Secure AWS S3 storage",
    ],
    accent: "#ff735c",
  },
];

export { services, technologies, experiences, testimonials, projects };
