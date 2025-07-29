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
  shopify,
  ticTacToe,
  worldwise,
  imdb,
  travel,
  calculator,
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
    file: "/Novo.pdf",
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
    github: "https://github.com/Ishanlathwal/MERN-Ecommerce",
  },
  {
    title: "Movie List",
    icon: imdb,
    iconBackgroundColor: "#E6DEDD",
    liveLink: "https://ishan-imdb-movielist.netlify.app/",
    github: "https://github.com/Ishanlathwal/Imdb-Movie-List",
  },
  {
    title: "World Wise",
    icon: worldwise,
    iconBackgroundColor: "#383E56",
    liveLink: "https://world-wise-joft.onrender.com/",
    github: "https://github.com/Ishanlathwal/World-Wise",
  },
  {
    title: "Tic-Tac-Toe",
    icon: ticTacToe,
    iconBackgroundColor: "#E6DEDD",
    liveLink: "https://ishan-tiktactoe.netlify.app/",
    github: "https://github.com/Ishanlathwal/Tic-tac-toe",
  },
  {
    title: "Travel Luggage",
    icon: travel,
    iconBackgroundColor: "#383E56",
    liveLink: "https://ishan-travel-list.netlify.app/",
    github: "https://github.com/Ishanlathwal/TravelList-Todo",
  },
  {
    title: "Calculator",
    icon: calculator,
    iconBackgroundColor: "#E6DEDD",
    liveLink: "https://ishan-calculator.netlify.app/",
    github: "https://github.com/Ishanlathwal/Calculator",
  },
  {
    title: "React Quiz",
    icon: reactjs,
    iconBackgroundColor: "#383E56",
    liveLink: "https://ishan-react-quiz.netlify.app/",
    github: "https://github.com/Ishanlathwal/react-quiz",
  },
];

const certificates = [
  {
    id: 1,
    certificate: "JavaScript: The Advanced Concepts (2023)",
    name: "Andrei Neagoie",
    company: "Udemy / Zero-To-Mastery",
    image:
      "https://images.ctfassets.net/aq13lwl6616q/3jyqzyDMgKDqWLua869Q0Z/86124d5fbcfc747a0348e631aba7c0f6/andrei.jpg?w=300&h=299&q=50&fm=webp&bg=transparent",
  },
  {
    id: 2,
    certificate: "The Ultimate React Course 2024: React, Redux & More",
    name: "Jonas Schmedtmann",
    designation: "COO",
    company: "Udemy",
    image:
      "https://pbs.twimg.com/profile_images/580383480850358272/hGdszCo0_400x400.jpg",
  },
  {
    id: 3,
    certificate: "Node.js, Express, MongoDB & More: The Complete Bootcamp 2024",
    name: "Jonas Schmedtmann",
    company: "Udemy",
    image:
      "https://pbs.twimg.com/profile_images/580383480850358272/hGdszCo0_400x400.jpg",
  },
  {
    id: 4,
    certificate:
      "Html,Css,JavaScript (Web-Designing) + M.E.A.N Stack / M.E.R.N Stack",
    name: "Gaurav",
    company: "Ducat, Sector-14, Gurgaon",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

export { services, technologies, personalProjects, certificates };
