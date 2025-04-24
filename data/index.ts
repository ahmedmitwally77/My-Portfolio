import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMui,
  SiVite,
  SiSass ,
  SiJquery,
  SiRedux  
} from "react-icons/si";
import { FaReact, FaJs,FaCss3Alt,FaHtml5 ,FaBootstrap   } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 ",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-4",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 lg:min-h-[40vh]",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "ICPC-HTI-Community Website",
    des: "The ICPC HTI Community Platform is an online learning system designed to enhance problem-solving skills for university students at the Higher Technological Institute (HTI).",
    img: "/icpc_hti_community.webp",
    iconLists: [FaReact, SiTailwindcss, FaJs, SiVite],
    link: "https://github.com/ahmedmitwally77/ICPC-HTI-Community",
  },
  {
    id: 2,
    title: "Social Media App",
    des: "Social Media App is a modern social platform built with Next.js, Tailwind CSS, and Material UI (MUI). The app allows users to create, view, and interact with posts seamlessly. It features: Comment System – Users can add and view comments. User Profiles – View and manage personal profiles. Skeleton Loading – Enhances user experience",
    img: "/social_app_portfolio.webp",
    iconLists: [SiNextdotjs, SiTailwindcss, SiTypescript, SiMui],
    link: "https://github.com/ahmedmitwally77/Social-App",
  },
  {
    id: 3,
    title: "Movie App",
    des: "A modern and fully responsive movie browsing application that allows users to explore movies, view actor details, and discover trending films. The app provides an intuitive user experience with dynamic search functionality, detailed movie pages, and a smooth UI design.",
    img: "/movie-app.webp",
    iconLists: [FaReact, SiTailwindcss, FaJs, SiJquery ,FaCss3Alt],
    link: "https://github.com/ahmedmitwally77/Movies-App",
  },
  {
    id: 4,
    title: "FreshCart E-Commerce", 
    des: "FreshCart is a modern e-commerce web application designed to streamline the online shopping experience. From browsing and purchasing to managing orders, this platform leverages the latest technologies to deliver a seamless and intuitive user experience.",
    img: "/freshcart_portfolio.webp",
    iconLists: [FaReact, SiTypescript,SiTailwindcss, SiSass,SiRedux],
    link: "https://github.com/ahmedmitwally77/freshcart",
  },
  {
    id: 5,
    title: "VsCode Clone", 
    des: "A fully responsive web-based clone of the Visual Studio Code editor, built with React, Redux Toolkit, and Tailwind CSS. This project mimics the look and feel of the real VS Code.",
    img: "/vscode-clone.webp",
    iconLists: [FaReact, SiTypescript,SiTailwindcss,SiRedux,VscVscode],
    link: "https://github.com/ahmedmitwally77/VS-Code-Clone",
  },
  {
    id: 6,
    title: "Yummy", 
    des: "Is a simple and easy to use website about recipes of most meals. You can find meals by categories , specific area and ingredients. This website is made with HTML,CSS,J.S,JQuery,Bootstrap.The website is responsive on all devices.",
    img: "/yummy.webp",
    iconLists: [FaHtml5, FaCss3Alt,FaJs,FaBootstrap],
    link: "https://github.com/ahmedmitwally77/Yummy",
  },
  

];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    stars: 4,
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson2",
    stars: 3,
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson3",
    stars: 5,
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson4",
    stars: 3,
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson5",
    stars: 4,
    title: "Director of AlphaStream Technologies",
  },
];

// export const companies = [
//   {
//     id: 1,
//     name: "cloudinary",
//     img: "/cloud.svg",
//     nameImg: "/cloudName.svg",
//   },
//   {
//     id: 2,
//     name: "appwrite",
//     img: "/app.svg",
//     nameImg: "/appName.svg",
//   },
//   {
//     id: 3,
//     name: "HOSTINGER",
//     img: "/host.svg",
//     nameImg: "/hostName.svg",
//   },
//   {
//     id: 4,
//     name: "stream",
//     img: "/s.svg",
//     nameImg: "/streamName.svg",
//   },
//   {
//     id: 5,
//     name: "docker.",
//     img: "/dock.svg",
//     nameImg: "/dockerName.svg",
//   },
// ];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "FaLinkedin",
    link: "https://www.linkedin.com/in/ahmed-mitwally-284538286/",
  },
  {
    id: 2,
    img: "FaGithub",
    link: "https://github.com/ahmedmitwally77",
  },
  {
    id: 3,
    img: "FaWhatsapp",
    link: "https://wa.me/201091516609",
  },
];
