import work1 from "./../assets/work/1.png";
import work2 from "./../assets/work/2.png";
import work3 from "./../assets/work/3.png";

import azhar1 from "./../assets/work/azhar1.png";
import azhar2 from "./../assets/work/azhar2.png";
import azhar3 from "./../assets/work/azhar3.png";

import weeein2 from "./../assets/work/weeein2.png";
import weeein3 from "./../assets/work/weeein3.png";

import digital1 from "./../assets/work/digital1.png";
import digital2 from "./../assets/work/digital2.png";
import digital3 from "./../assets/work/digital3.png";
import digital4 from "./../assets/work/digital4.png";

import html5 from "./../assets/Skills/html-5.png";
import css3 from "./../assets/Skills/css-3.png";
import javascript from "./../assets/Skills/js.png";
import react from "./../assets/Skills/atom.png";
import nextjs from "./../assets/Skills/nn.png";
import tailwindcss from "./../assets/Skills/tailwindcss.svg";
import redux from "./../assets/Skills/redux.png";
import reactQuery from "./../assets/Skills/react-query.png";
import typescript from "./../assets/Skills/ts.png";
import nodejs from "./../assets/Skills/nodejs.png";
import express from "./../assets/Skills/express.png";
import more from "./../assets/Skills/more.png";

import azhar from "./../assets/eduction/azhar.png";
import cairoUniversity from "./../assets/eduction/Cairo_University.svg";
import route from "./../assets/eduction/route.jpg";

import people1 from "./../assets/images/people-1.jpg";
import people2 from "./../assets/images/people-2.jpg";
import people3 from "./../assets/images/people-3.jpg";
import people4 from "./../assets/images/people-4.jpg";
import people5 from "./../assets/images/people-5.jpg";
import people6 from "./../assets/images/people-6.jpg";

export const aboutItems = [
  {
    label: "Project done",
    number: 12,
  },
  {
    label: "Years of experience",
    number: 2,
  },
];

export const works = [
  {
    imgSrc: work1,
    title: "كلية التربية جامعة الازهر",
    tags: [work1, azhar1, azhar2, azhar3],
    projectLink: "https://education.azhar-edu.org/#/home",
    projectLink2:
      "https://taehiledu.azhar-edu.org/#/educationalQualificationStudentsLogin",
    desc: "",
    enable: true,
    published: "live",
  },

  {
    imgSrc: work3,
    title: "Weeein",
    tags: [work3, weeein2, weeein3],
    projectLink: "https://285007.eu11.myftpupload.com/index.html#/Home",
    projectLink2:
      "https://208915.eu11.myftpupload.com/weeein/index.html#/login",
    desc: "",
    enable: true,
    published: "live",
  },

  {
    imgSrc: work2,
    title: "Digital-Ports",
    tags: [work2, digital1, digital2, digital3, digital4],
    projectLink: "",
    projectLink2: "",
    desc: "",
    enable: true,
    published: "",
  },

  // {
  //   imgSrc: work5,
  //   title: "Music App - Tutorial",
  //   tags: ["Tutorial", "Rapid-API", "React"],
  //   projectLink: "",
  //   desc: "",
  //   enable: true,
  // },

  // {
  //   imgSrc: work44,
  //   title: "Sneakers App - Tutorial",
  //   tags: ["Tutorial", "Fire-Base", "TypeScript", "React"],
  //   projectLink: "",
  //   desc: "",
  //   enable: true,
  // },

  // {
  //   imgSrc: work10,
  //   title: "Food App - Tutorial",
  //   tags: ["Tutorial", "Fire-Base", "React", "Redux"],
  //   projectLink: "",
  //   desc: "",
  //   enable: true,
  // },
];

export const socials = [
  {
    label: "GitHub",
    href: "https://www.github.com/codewithsadee-org",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/codewithsadee",
  },
  {
    label: "Twitter X",
    href: "https://x.com/codewithsadee_",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/codewithsadee",
  },
  {
    label: "CodePen",
    href: "https://codepen.io/codewithsadee",
  },
];

export const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  // {
  //   label: "Reviews",
  //   href: "#reviews",
  // },
  {
    label: "Contact me",
    href: "#contact",
  },
];

export const skillItem = [
  {
    imgSrc: html5,
    label: "Html",
    desc: "Markup Language",
  },
  {
    imgSrc: css3,
    label: "CSS",
    desc: "Style Language",
  },
  {
    imgSrc: javascript,
    label: "JavaScript",
    desc: "Web Interactivity",
  },
  {
    imgSrc: react,
    label: "React",
    desc: "UI Library",
  },
  {
    imgSrc: nextjs,
    label: "Next JS",
    desc: "React Framework",
  },
  {
    imgSrc: tailwindcss,
    label: "TailwindCSS",
    desc: "CSS Framework",
  },
  {
    imgSrc: redux,
    label: "Redux",
    desc: "State Manager",
  },
  {
    imgSrc: reactQuery,
    label: "React-Query",
    desc: "Data Fetching",
  },
  {
    imgSrc: typescript,
    label: "TypeScript",
    desc: "Typed JavaScript",
  },
  {
    imgSrc: nodejs,
    label: "Node JS",
    desc: "JavaScript Runtime Environment",
  },
  {
    imgSrc: express,
    label: "Express JS",
    desc: "Node.js Web Framework",
  },
  {
    imgSrc: more,
    label: "More...",
    desc: "Another 3rd Part libraries",
  },
];

export const educationItem = [
  {
    imgSrc: azhar,
    label: "Al-Azhar University",
    desc: "Faculty of Science Graduate",
  },
  {
    imgSrc: cairoUniversity,
    label: "Cairo University",
    desc: "Postgraduate in Computer Science",
  },
  {
    imgSrc: route,
    label: "Route Academy",
    desc: "Frontend Development",
  },
];

export const reviews = [
  {
    content:
      "Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.",
    name: "Sophia Ramirez",
    imgSrc: people1,
    company: "PixelForge",
  },
  {
    content:
      "Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.",
    name: "Ethan Caldwell",
    imgSrc: people2,
    company: "NexaWave",
  },
  {
    content:
      "Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.",
    name: "Liam Bennett",
    imgSrc: people3,
    company: "CodeCraft",
  },
  {
    content:
      "Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.",
    name: "Noah Williams",
    imgSrc: people4,
    company: "BrightWeb",
  },
  {
    content:
      "Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.",
    name: "Ava Thompson",
    imgSrc: people5,
    company: "TechMosaic",
  },
  {
    content:
      "Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.",
    name: "Jonathan",
    imgSrc: people6,
    company: "Skyline Digital",
  },
];
