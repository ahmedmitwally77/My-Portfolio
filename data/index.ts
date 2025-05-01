import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMui,
  SiVite,
  SiSass,
  SiJquery,
  SiRedux,
} from "react-icons/si";
import { FaReact, FaJs, FaCss3Alt, FaHtml5, FaBootstrap } from "react-icons/fa";
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
    iconLists: [FaReact, SiTailwindcss, FaJs, SiJquery, FaCss3Alt],
    link: "https://github.com/ahmedmitwally77/Movies-App",
  },
  {
    id: 4,
    title: "FreshCart E-Commerce",
    des: "FreshCart is a modern e-commerce web application designed to streamline the online shopping experience. From browsing and purchasing to managing orders, this platform leverages the latest technologies to deliver a seamless and intuitive user experience.",
    img: "/freshcart_portfolio.webp",
    iconLists: [FaReact, SiTypescript, SiTailwindcss, SiSass, SiRedux],
    link: "https://github.com/ahmedmitwally77/freshcart",
  },
  {
    id: 5,
    title: "VsCode Clone",
    des: "A fully responsive web-based clone of the Visual Studio Code editor, built with React, Redux Toolkit, and Tailwind CSS. This project mimics the look and feel of the real VS Code.",
    img: "/vscode-clone.webp",
    iconLists: [FaReact, SiTypescript, SiTailwindcss, SiRedux, VscVscode],
    link: "https://github.com/ahmedmitwally77/VS-Code-Clone",
  },
  {
    id: 6,
    title: "Yummy",
    des: "Is a simple and easy to use website about recipes of most meals. You can find meals by categories , specific area and ingredients. This website is made with HTML,CSS,J.S,JQuery,Bootstrap.The website is responsive on all devices.",
    img: "/yummy.webp",
    iconLists: [FaHtml5, FaCss3Alt, FaJs, FaBootstrap],
    link: "https://github.com/ahmedmitwally77/Yummy",
  },
  {
    id: 7,
    title: "Game OOP",
    des: "A simple game that uses OOP concepts to create a fun and interactive experience. The game is designed to be user-friendly and engaging, making it suitable for players of all ages. The project showcases the power of object-oriented programming in creating dynamic and responsive applications.",
    img: "/game.webp",
    iconLists: [FaHtml5, FaCss3Alt, FaJs, FaBootstrap],
    link: "https://github.com/ahmedmitwally77/Game-OOP",
  },
  {
    id: 8,
    title: "Weather App",
    des: "A modern weather application that provides real-time weather updates and forecasts. Built with React, this app offers a user-friendly interface and responsive design, ensuring a seamless experience across devices.",
    img: "/weather.webp",
    iconLists: [FaHtml5, FaCss3Alt, FaJs, FaBootstrap],
    link: "https://github.com/ahmedmitwally77/Weather",
  },
  {
    id: 9,
    title: "BookMark",
    des: "A simple bookmark website that allows users to save and manage their favorite links. Built with HTML, CSS, and JavaScript, this project emphasizes user experience and responsive design.",
    img: "/bookmark.webp",
    iconLists: [FaHtml5, FaCss3Alt, FaJs, FaBootstrap],
    link: "https://github.com/ahmedmitwally77/BookMark",
  },
  {
    id: 10,
    title: "Portfolio React",
    des: "A personal portfolio website built with React, showcasing projects, skills, and experiences. The site is designed to be responsive and user-friendly, highlighting the developer's work effectively.",
    img: "/startf.webp",
    iconLists: [FaReact, SiTailwindcss, FaJs, SiVite],
    link: "https://github.com/ahmedmitwally77/Start-Framework",
  },
  {
    id: 11,
    title: "Stich-Bootstrab",
    des: "A simple website that uses Bootstrap to create a responsive and user-friendly interface. The project showcases the power of Bootstrap in building modern web applications.",
    img: "/stitch.webp",
    iconLists: [FaHtml5, FaCss3Alt, FaJs, FaBootstrap],
    link: "https://github.com/ahmedmitwally77/Stich-Bootstrab",
  },
  {
    id: 12,
    title: "Daniels-Bootstrab",
    des: "Daniels is a modern portfolio template. The website is designed to be responsive and visually appealing, with clear navigation and an intuitive design. The project showcases the power of Bootstrap in building modern web applications.",
    img: "/danials.webp",
    iconLists: [FaHtml5, FaCss3Alt, FaBootstrap],
    link: "https://github.com/ahmedmitwally77/Daniels-Bootstrab",
  },
  {
    id: 13,
    title: "DevFolio-Bootstrab",
    des: "Devfolio is a modern and responsive portfolio website template, designed for developers to showcase their work, skills, and projects. It is built using HTML, CSS, and Bootstrap, making it easy to customize and use for personal branding.",
    img: "/defolio.webp",
    iconLists: [FaHtml5, FaCss3Alt, FaBootstrap],
    link: "https://github.com/ahmedmitwally77/DevFolio-Bootstrab",
  },
  {
    id: 14,
    title: "Mealify",
    des: "Mealify is a responsive web app designed for food lovers who want an easy, elegant way to browse meal options. Built entirely with HTML, CSS, and media queries, Mealify showcases how powerful simple web technologies can be for creating engaging, user-friendly designs across all devices",
    img: "/melifiy.webp",
    iconLists: [FaHtml5, FaCss3Alt, FaBootstrap],
    link: "https://github.com/ahmedmitwally77/Mealify",
  },
  {
    id: 15,
    title: "Fokir",
    des: "The Fokir project is a static website built using HTML and CSS, utilizing techniques such as float, position, and transition. The website is designed to be responsive, ensuring a seamless experience across all devices. It features a clean and modern design, with a focus on user experience and accessibility. The project showcases the power of HTML and CSS in creating visually appealing and functional web applications.",
    img: "/fokir.webp",
    iconLists: [FaHtml5, FaCss3Alt, FaBootstrap],
    link: "https://github.com/ahmedmitwally77/Fokir",
  },
];

export const testimonials = [
  {
    quote:
      "Ahmed is an outstanding front-end developer with a strong eye for detail and design. His passion for creating responsive, user-friendly interfaces truly stands out. Beyond coding, Ahmed is highly skilled in problem-solving and consistently demonstrates deep understanding in his computer science studies. Working with him is always inspiring!",
    name: "Zeiad Belal",
    img: "noby.webp",
    stars: 4,
    title: "Data Scientist",
  },
  {
    quote:
      "Working with Ahmed has been a fantastic experience. He is truly one of the best! When it comes to leadership, he is absolutely top-notch. His ability to organize and structure everything is remarkable. If he ever considers pursuing a leadership role, I highly recommend it—he has all the qualities of a great leader. His communication skills, organization, and ability to create engaging content are outstanding. ",
    name: "Ahmed Hassan",
    stars: 5,
    img: "ahasan.webp",
    title: "AI & NLP Engineer",
  },
  {
    quote:
      "أحمد من الناس اللي تفتخر تشتغل معاهم. اشتغلنا مع بعض في مشروع تخرج الكورس، وكان دوره حيوي جدًا في إنجاح المشروع. عنده خبرة قوية في كل أدوات وتقنيات تطوير الواجهات الأمامية، بالإضافة لحبه لحل المشكلات وتحسين الأداء. حتى تحت الضغط ومع ضيق الوقت، كان دايمًا هادي ومنظم، وبيعرف يطلع شغل متقن بجودة عالية. كمان كان دايمًا بيشجع الفريق وبيشارك معلوماته مع الكل، وده ساعدنا ننجز شغلنا بروح جماعية ممتازة. بدون شك، أحمد من أفضل الناس اللي ممكن تعتمد عليهم",
    name: "Mahmoud Youssef",
    img: "myousef.webp",
    stars: 3,
    title: "Soc Analyst",
  },
  {
    quote:
      "خلال دراستنا مع بعض في الكلية، كان أحمد دايمًا من الناس اللي تلاحظهم بسهولة بسبب اجتهاده وتفوقه. متميز جدًا في المواد العملية والنظرية، وعنده قدرة رائعة إنه يربط بين المعلومات الأكاديمية والتطبيق العملي. أحمد مش بس بيذاكر لنفسه، كان دايمًا بيحب يساعد زملاؤه ويوضح لهم المفاهيم الصعبة بطريقة بسيطة ومفهومة. إنسان محترم وطموح ومجتهد جدًا، وبدون مبالغة، مستقبله مبشر جدًا.",
    name: "Ahmed Omara",
    stars: 5,
    img: "omara.webp",
    title: "Frontend Developer",
  },
  {
    quote:
      "Ahmed’s dedication to both his academic and professional growth is truly impressive. He has a solid foundation in front-end technologies and a remarkable ability to tackle and solve challenging problems. Definitely someone you can rely on for high-quality work!",
    name: "Ahmed Shoaib",
    stars: 4,
    img: "sohib.webp",
    title: "Data Scientist",
  },
  {
    quote:
      "تعاملت مع أحمد خلال مشروع مهم جدًا أثناء الكورس، ومن خلال التجربة دي شفت فيه مميزات نادرة. عنده إتقان شديد للتفاصيل، وحب للتعلم والتطور باستمرار. لما كانت تواجهنا مشكلة سواء في الكود أو في تنسيق التصميمات، كان دايمًا بيكون أول واحد يقترح حلول عملية ومبتكرة. شخص محترم، طموح، ومكسب لأي تيم يشتغل معاه سواء في الدراسة أو في الشغل.",
    name: "Mohamed Tarek",
    img: "mtarek.webp",
    stars: 5,
    title: "Backend Developer",
  },
  {
    quote:
      "أنا فخور إني اشتغلت مع أحمد خلال مشروعنا في الكلية. إنسان ملتزم ومجتهد بدرجة كبيرة، دايمًا حريص إنه يقدم أفضل حاجة ممكنة مهما كانت التحديات. يتمتع بقدرات قوية جدًا في حل المشكلات ومهارات عالية في استخدام تقنيات الفرونت إند الحديثة. أحمد دايمًا بيحط لمسة مميزة على أي شغل بيعمله، وبيعرف يضيف للمشروع قيمة حقيقية بتفكيره الإبداعي وسرعة تنفيذه",
    name: "Ehab Mamdouh",
    img: "ehab.webp",
    stars: 4,
    title: "Red Hat OpenShift Developer",
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
    title: "Responsive Web",
    desc: "A responsive web project ensuring seamless experience across all devices with Tailwind CSS.",
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
