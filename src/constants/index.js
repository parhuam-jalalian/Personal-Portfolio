import {
    mobile,
    backend,
    full,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    flutter,
    tailwind,
    C_1,
    C_2,
    C_3,
    threejs,
    python3,

    msa,
    xenia,
    chargepoint,

    three_project,
    rolli_polli,
    game_project,
    my_website,

    justin_liu,

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
      id: "project",
      title: "Projects",
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
      title: "Full Stack Developer",
      icon: full,
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
      name: "Flutter",
      icon: flutter,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },

    {
      name: "python3",
      icon: python3,
    },
    {
      name: "C",
      icon: C_1,
    },
    {
      name: "C++",
      icon: C_2,
    },
    {
      name: "C#",
      icon: C_3,
    },
  ];
  
  const experiences = [
    {
      title: "MSA Systems, Inc - SWE Intern",
      company_name: "MSA Systems, Inc",
      icon: msa,
      iconBg: "#E6DEDD",
      date: "Jul 2018 - September 2018, Jul 2019 - September 2019",
      points: [
        "Back-end server development and software integration in Python, SQL, and ASP.NET MVC.",
        "Executed a full rewrite and migration of a legacy .NET MS SQL based desktop application to the updated Microsoft Azure platform, resulting in improved performance and scalability.",
        "Leveraged Bootstrap and jQuery to develop a customer-facing search widget that enhances the site's content-search feature, efficiently parsing SQL responses and streamlining search results.",
        "Employed TeamCity for continuous deployment of .NET platforms, utilizing Git version control to enable streamlined development workflows and reliable code deployment.",
      ],
    },
    {
      title: "Xenia Gifts - SWE Intern",
      company_name: "Xenia Gifts",
      icon: xenia,
      iconBg: "#E6DEDD",
      date: "Jun 2020 - September 2020, Jun 2021 - September 2021",
      points: [
        "Full-stack web development using Python, Jinja2 (Django), HTML/CSS, and JavaScript on Google App Engine",
        "Applied Django's capabilities to implement precise form validations, effectively catching customer typos and notifying users about potential invalid inputs.",
        "Utilized Python cron jobs in GCP to automate daily operations, enabling timely updates of specific gift card discounts and reducing time inefficiencies.",
        "Improved user experience on form submissions by utilizing session data to automatically repopulate form fields for invalid submissions.",
      ],
    },
    {
      title: "ChargePoint - SWE Intern",
      company_name: "ChargePoint",
      icon: chargepoint,
      iconBg: "#E6DEDD",
      date: "Feb 2023 - Jun 2023",
      points: [
        "Streamlined testing processes by implementing an automation infrastructure with Jenkins, effectively replacing highly manual tasks and enabling easier scalability.",
        "Developed an automated method to convert test data into a consistent test report format (XML) using JUnit, enabling seamless consumption of the data by Jenkins for analysis and reporting purposes.",
        "Implemented data visualization tools to enhance the testing team's ability to visualize and analyze their test data effectively.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Parhuam has a natural feel and deep user empathy for building great UXs and beautiful UIs.",
      name: "Justin Liu",
      designation: "CEO",
      company: "Xenia Gifts",
      image: justin_liu,
    },
  ];
  
  const projects = [
    {
        name: "Capstone Senior Project",
        description:
          "I developed my first-person exploration application using Three.js, a powerful JavaScript 3D library. This project was created as part of my final assignment for Introduction to Computer Graphics at UCSC. It showcases a range of features, including: Perlin Terrain Generation, Cannon.js Physics Engine, Atmospheric effects, and much more!",
        tags: [
          {
            name: "ThreeJS",
            color: "pink-text-gradient",
          },
        ],
        image: three_project,
        source_code_link: "https://people.ucsc.edu/~pfjalali/Assignment_5/",
      },
    {
      name: "Rolli Polli",
      description:
        "Web-based platform that empowers users to post and answer polls anonymously. A platform designed to assist individuals who find themselves indecisive and in need of honest opinions. Whether it's choosing the perfect outfit, making a major life decision, or seeking guidance on any other matter, Rolli Polli provides a safe space for users to gather valuable insights from a diverse community.",
      tags: [
        {
          name: "Dart",
          color: "pink-text-gradient",
        },
        {
          name: "Firebase",
          color: "orange-text-gradient",
        },
        {
          name: "Flutter",
          color: "blue-text-gradient",
        },
        {
            name: "Scrum",
            color: "green-text-gradient",
          },
      ],
      image: rolli_polli,
      source_code_link: "https://github.com/parhuam-jalalian/rolli_polli",
    },
    {
        name: "Unknown Game Title",
        description:
          "Driven by my passion for immersive gameplay, I am developing an indie rogue-like Souls-like game using Unity and C#. With procedurally generated levels, each playthrough offers a unique and exciting experience. Netcode/Multiplayer functionality adds the thrill of cooperative gameplay, allowing players to explore the game's captivating world together. The result is an enthralling gaming experience that combines the best elements of the Souls-like genre with the endless possibilities of procedural generation.",
        tags: [
          {
            name: "Unity",
            color: "pink-text-gradient",
          },
          {
            name: "C-Sharp",
            color: "orange-text-gradient",
          },
        ],
        image: game_project,
        source_code_link: "https://github.com/parhuam-jalalian",
      },
      {
        name: "Personal Portfolio",
        description:
          "I built my personal portfolio website using ThreeJS, React Three Fiber, TailwindCSS, and Framer Motion. This allowed me to incorporate stunning 3D graphics, seamless integration with React, stylish design, and captivating animations, creating an impressive showcase of my work.",
        tags: [
          {
            name: "ThreeJS",
            color: "pink-text-gradient",
          },
          {
            name: "React Three Fiber",
            color: "orange-text-gradient",
          },
          {
            name: "TailwindCSS",
            color: "blue-text-gradient",
          },
          {
            name: "Framer Motion",
            color: "green-text-gradient",
          },
        ],
        image: my_website,
        source_code_link: "https://github.com/parhuam-jalalian/Personal-Portfolio",
      },
  ];
  
  export { services, technologies, experiences, testimonials, projects };