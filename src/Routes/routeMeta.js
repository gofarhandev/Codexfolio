// src/Routes/routeMeta.js
const DOMAIN = "https://yourdomain.com"; // change to your real domain
const DEFAULT_IMAGE = `${DOMAIN}/og-default.png`;

export const routeMeta = {
  "/": {
    title: "Home",
    description:
      "MD Farhan Sadik — Frontend Web Developer. Explore modern, responsive web apps built with React, Tailwind CSS, and UI/UX design.",
    keywords: "Farhan Sadik, frontend developer, React, Tailwind, portfolio",
    canonical: `${DOMAIN}/`,
    image: `${DOMAIN}/og-home.png`,
  },
  "/about": {
    title: "About",
    description:
      "Learn more about MD Farhan Sadik, a frontend web developer specializing in React, Tailwind CSS, and modern UI/UX.",
    keywords: "about Farhan Sadik, frontend web developer, React",
    canonical: `${DOMAIN}/about`,
    image: `${DOMAIN}/og-about.png`,
  },
  "/projects": {
    title: "Projects",
    description:
      "Browse MD Farhan Sadik's portfolio projects — web apps, UI/UX experiments, and frontend case studies built with React & Tailwind CSS.",
    keywords: "projects, Farhan Sadik portfolio, React projects",
    canonical: `${DOMAIN}/projects`,
    image: `${DOMAIN}/og-projects.png`,
  },
  "/services": {
    title: "Services",
    description:
      "Hire MD Farhan Sadik for frontend development, React apps, UI/UX design, and full-stack web solutions.",
    keywords: "services, hire frontend developer, React freelance",
    canonical: `${DOMAIN}/services`,
    image: `${DOMAIN}/og-services.png`,
  },
  "/contact": {
    title: "Contact",
    description:
      "Get in touch with MD Farhan Sadik for collaborations, freelance projects, or web development inquiries.",
    keywords: "contact Farhan Sadik, hire developer",
    canonical: `${DOMAIN}/contact`,
    image: `${DOMAIN}/og-contact.png`,
  },
};
