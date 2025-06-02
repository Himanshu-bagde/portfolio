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
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
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
    title: "Web Developer Intern",
    company_name: "InternPe | Jaipur",
    icon: web,
    iconBg: "#383E56",
    date: "Dec 2023 - Jan 2024",
    points: [
      "Developed fully responsive webpages using HTML5, CSS3, and JavaScript.",
      "Implemented interactive features such as forms, animations, and dynamic content rendering.",
      "Learned version control using Git and collaborated with other interns using GitHub.",
      "Understood the importance of clean, maintainable code and practiced code optimization techniques.",
      "Received feedback from mentors and improved my UI/UX design skills based on real-world standards."
    ],
  },
  {
    title: "Website Design & Developement",
    company_name: "Internship Studio | Pune ",
    icon: mobile,
    iconBg: "#E6DEDD",
    date: "Nov 2024 - Feb 2025",
    points: [
      "Designed and developed a full-featured e-commerce website during internship at Internship Studio.",
      "Built using HTML, CSS, JavaScript, and React.js.",
      "Created key pages: Home, Products, Product View, Cart, Checkout, Order Confirmation, About Us, Contact Us, and Search.",
      "Implemented features like category & price filters, add to cart, form validation, and responsive design.",
      "Developed reusable React components for UI consistency and maintainability.",
      "Focused on user experience, interactivity, and real-world e-commerce workflows.",
      "Strengthened front-end development skills and gained practical exposure to modern web development.",
    ],
  },
  {
    title: "Full Stack Web Development,Intern",
    company_name:  "Avrdus Technologies Pvt.Ltd | Hyderabad",
    icon: creator,
    iconBg: "#383E56",
    date: "Dec 2024 - Jun 2025",
    points: [
      "A B2B platform connecting cotton bale buyers and sellers. Focused on streamlining trade, negotiations, and secure transactions.",
      "🔧 Key Highlights:",
      "Developed multi-role authentication (Buyer, Vendor, Admin)",
      "Built dynamic dashboards and product listing pages using React.js",
      "Implemented order management, real-time chat negotiation, and escrow-based payments via Razorpay",
      "Integrated Firebase Auth and notifications for live order updates",
      "Created RESTful APIs using Node.js & Express.js",
      "💻 Tech Stack :- React.js • Node.js • Express • Firebase • PostgreSQL • Razorpay",
    ],
  },
  {
    title: "Full stack Developer ",
    company_name: "Edverciity By LiveTechSkills | Nagpur",
    icon: mobile,
    iconBg: "#E6DEDD",
    date: "Dec 2024 - Present",
    points: [
      "At LiveWire, I gained practical experience in full stack web development using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The training covered both frontend and backend technologies through a hands-on, project-based approach.",
      "On the frontend, I worked with HTML5, CSS3, JavaScript, and Bootstrap to build responsive and interactive user interfaces. I developed a solid understanding of JavaScript concepts such as variables, functions, control flow, DOM manipulation, and form validations.",
      "For UI/UX design, I used Figma to create wireframes and interactive prototypes, ensuring user-friendly and intuitive designs that translated well into frontend implementations.",
      "In React.js, I focused on component-based architecture, props, state management, hooks (useState, useEffect, useContext), event handling, and routing. I completed a calculator app project, which strengthened my skills in building dynamic, modular user interfaces.",
      "On the backend, I developed RESTful APIs using Node.js and Express.js, implemented routing, middleware, and asynchronous operations. I used MongoDB for database management, including CRUD operations and schema modeling.",
      "I also worked with Git for version control and GitHub for collaborative development, code management, and project deployment, gaining familiarity with real-world development workflows.",
      "Additionally, I enhanced my communication and professional skills through modules on resume writing, presentation techniques, and interview preparation.",
      "This experience equipped me with a strong foundation in full stack development, UI/UX design, and collaborative coding practices essential for building and managing modern web applications.",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
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
  },
  {
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
  },
];

export { services, technologies, experiences, testimonials, projects };