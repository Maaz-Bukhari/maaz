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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Software Development Intern",
    company_name: "Khan Technologies",
    icon: web,
    iconBg: "#d9fb51",
    date: "June 2022 - December 2022",
    points: [
      "Completed a six-month software development internship focused on practical web application development.",
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
    date: "September 2025 - Present",
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
    source_code_link: "https://github.com/Maaz-Bukhari/angular-ecommerce-platform",
    live_link: "https://xtore-eight.vercel.app/",
    category: "Commerce / Full-Stack Platform",
    year: "2026",
    role: "Architecture, frontend & backend",
    challenge: "A real commerce product needs more than a storefront: customers need a fast and discoverable purchase journey while administrators need secure tools for catalog, stock, orders, users, and media.",
    solution: "Three independently deployable applications connect an Angular SSR storefront and protected Angular admin panel to a versioned Express API with MongoDB, Cloudinary, JWT authentication, rotating refresh tokens, and server-side authorization.",
    impact: ["Angular SSR storefront", "Protected admin operations", "Secure versioned REST API"],
    accent: "#d9fb51",
  },
  {
    slug: "job-it",
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
    category: "AI Search / Career Tech",
    year: "2024",
    role: "Product engineering",
    challenge: "Job seekers lose time moving between disconnected listings, salary tools, and location services while trying to judge opportunity quality.",
    solution: "A location-aware workspace combines relevant roles, salary context, and intelligent filtering so users can focus on the strongest opportunities.",
    impact: ["Contextual discovery", "Salary intelligence", "Location-aware results"],
    accent: "#70d5ff",
  },
  {
    slug: "trip-guide",
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
    category: "Travel / Experience Platform",
    year: "2025",
    role: "Design & development",
    challenge: "Planning a trip means coordinating multiple booking systems while still trying to discover experiences that feel personal and relevant.",
    solution: "One visual itinerary connects stays, transport, and curated places with a continuous planning experience from inspiration to departure.",
    impact: ["Connected itinerary", "Curated discovery", "Multi-service booking"],
    accent: "#ff735c",
  },
];

export { services, technologies, experiences, testimonials, projects };
