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
  angular,
  meta,
  tesla,
  shopify,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Download resume",
    isDownload: true,
    file: "/Ishan_Resume.pdf",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },

  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
  {
    title: "MERN Stack Developer",
    icon: mobile,
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
    name: "Redux",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Angular",
    icon: angular,
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
    name: "git",
    icon: git,
  },
];

const personalProjects = [
  {
    title: "E-Commerce",
    icon: shopify,
    iconBackgroundColor: "#383E56",
    liveLink: "https://mern-ecommerce-uku0.onrender.com/",
    github: "https://github.com/Ishanlathwal/E-Commerce",
  },
  {
    title: "React Native Developer",
    icon: tesla,
    iconBackgroundColor: "#E6DEDD",
  },
  {
    title: "Web Developer",
    icon: shopify,
    iconBackgroundColor: "#383E56",
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBackgroundColor: "#E6DEDD",
  },
];

const certificates = [
  {
    certificate: "JavaScript: The Advanced Concepts (2023)",
    name: "Andrei Neagoie",
    company: "Udemy / Zero-To-Mastery",
    image:
      "https://images.ctfassets.net/aq13lwl6616q/3jyqzyDMgKDqWLua869Q0Z/86124d5fbcfc747a0348e631aba7c0f6/andrei.jpg?w=300&h=299&q=50&fm=webp&bg=transparent",
  },
  {
    certificate: "The Ultimate React Course 2024: React, Redux & More",
    name: "Jonas Schmedtmann",
    designation: "COO",
    company: "Udemy",
    image:
      "https://pbs.twimg.com/profile_images/580383480850358272/hGdszCo0_400x400.jpg",
  },
  {
    certificate: "Node.js, Express, MongoDB & More: The Complete Bootcamp 2024",
    name: "Jonas Schmedtmann",
    company: "Udemy",
    image:
      "https://pbs.twimg.com/profile_images/580383480850358272/hGdszCo0_400x400.jpg",
  },
  {
    certificate:
      "Html,Css,JavaScript (Web-Designing) + M.E.A.N Stack / M.E.R.N Stack",
    name: "Gaurav",
    company: "Ducat, Sector-14, Gurgaon",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

export { services, technologies, personalProjects, certificates };
