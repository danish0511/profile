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
    python,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    c,
    BharatIntern,
    ThaparUniversity,
    School,
    cplus,
    qrGenerator,
    weatherForecast,
    stockData,
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
      name: "Python",
      icon: python,
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
      name: "C++",
      icon: cplus,
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
      name: "C",
      icon: c,
    },
  ];
  
  const experiences = [
    {
      title: "Web Development Intern",
      company_name: "Bharat Intern",
      icon: BharatIntern,
      iconBg: "#E6DEDD",
      date: "August 2023 - September 2023",
      points: [
        "Developing and maintaining web applications.",
        "Using basic web development skills.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "College",
      company_name: "Thapar University",
      icon: ThaparUniversity,
      iconBg: "#E6DEDD",
      date: "September 2022 - July 2026",
      points: [
        "Currently studying for computer science and engineering.",
        "Implementing skills learned in ELC activities.",
      ],
    },
    {
      title: "Class XII and X",
      company_name: "Shri Ram Ashram Public School",
      icon: School,
      iconBg: "#E6DEDD",
      date: "2019 - 2022",
      points: [
        "Passed class XII with 93.2 %",
        "Passed class X with 93.6 %",
      ],
    },
  ];
  
  const projects = [
    {
      name: "QR Generator",
      description:
        "Web page which generates QR by writing the desired text or for and website with ability to download the QR for future use.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "API",
          color: "pink-text-gradient",
        },
        {
          name: "Responsive",
          color: "orange-text-gradient",
        },
      ],
      image: qrGenerator,
      source_code_link: "https://github.com/danish0511/qr-generator.git",
    },
    {
      name: "Stock Data",
      description:
        "Python file which depicts extraction and visualization of stock data of popular company Tesla and generating data graphically.",
      tags: [
        {
          name: "Jupyter Notebook",
          color: "blue-text-gradient",
        },
        {
          name: "Pandas",
          color: "green-text-gradient",
        },
      ],
      image: stockData,
      source_code_link: "https://github.com/danish0511/Stock_Data.git",
    },
    {
      name: "Weather Forecast",
      description:
        "A simple web page application that shows weather of any city in world using weather api.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "API",
          color: "pink-text-gradient",
        },
      ],
      image: weatherForecast,
      source_code_link: "https://github.com/danish0511/weather-forecast.git",
    },
  ];
  
  export { services, technologies, experiences, projects };