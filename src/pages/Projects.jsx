import { useState } from "react";
import ProjectsCard from "../components/ProjectsCard";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ProjectArray = [
  {
    title: "Auto Caption",
    skills: ["React.js", "Tailwind CSS", "MongoDB", "Express", "Node", "JWT"],
    live: "https://auto-caption-three.vercel.app/",
    github: "https://github.com/master-farhan/social-app-backend",
    img: "https://ik.imagekit.io/iura/Portfolio-project/caption.png?updatedAt=1756855023827",
    category: "Backend",
    description:
      "A backend service for a social media app that powers automatic caption generation. Developed with Node.js, Express, and MongoDB, featuring secure authentication using JWT, robust RESTful APIs, and efficient database management to handle user data and posts.",
  },
  {
    title: "Ai Chat",
    skills: ["React.js", "Tailwind CSS", "Express", "Node"],
    live: "https://aichat-seven-ashen.vercel.app/",
    github: "https://github.com/master-farhan/ai.chat-backend",
    img: "https://ik.imagekit.io/iura/Portfolio-project/chat.png?updatedAt=1756855024181",
    category: "Backend",
    description:
      "A backend system for an AI-powered chat application. Built with Node.js and Express, it handles real-time communication with Socket.IO, integrates AI response generation, and provides secure, scalable APIs for smooth interaction between users and the AI assistant.",
  },
  {
    title: "Moody Player",
    skills: ["React.js", "Tailwind CSS", "Express", "Node", "imagekit"],
    live: "https://moody-player-gold.vercel.app/",
    github: "https://github.com/master-farhan/moody-player-backend",
    img: "https://ik.imagekit.io/iura/Portfolio-project/moody.png?updatedAt=1756855030847",
    category: "Backend",
    description:
      "A backend system for a moody music player that recommends and plays songs based on users' facial expressions. Developed with Node.js and Express, it manages audio streaming, mood-based playlist generation, and secure user authentication to deliver a personalized music experience.",
  },
  {
    title: "Havmor Ice-Cream",
    skills: [
      "React.js",
      "Tailwind CSS",
      "GSAP",
      "MongoDB",
      "Express",
      "Node",
      "JWT",
    ],
    live: "https://havmor.vercel.app/",
    github: "https://github.com/master-farhan/hackathon-frontend",
    img: "https://ik.imagekit.io/iura/Portfolio-project/Havmor.png?updatedAt=1756855023552",
    category: "Full-Stack",
    description:
      "Havmor Ice-Cream is a full-stack web application developed as part of the Sheriyans Hackathon. This project features a modern and responsive user interface built with React.js and styled using Tailwind CSS, ensuring smooth and visually appealing experiences across devices. GSAP animations are used to add engaging transitions and interactive elements throughout the app. On the backend, it utilizes Node.js and Express to handle server-side logic, while MongoDB provides a scalable database solution for storing and managing user and product data. Secure user authentication is implemented using JWT, enabling protected routes and personalized experiences. The application includes real-world features such as dynamic product listings, user account management, and seamless interactivity, making it a robust full-stack project showcasing practical web development skills from frontend design to backend functionality.",
  },
  {
    title: "GTA 6",
    skills: ["React.js", "Tailwind CSS", "GSAP"],
    live: "https://gta-6-02.vercel.app/",
    github: "https://github.com/master-farhan/GTA-6",
    img: "https://ik.imagekit.io/iura/Portfolio-project/GTA-6.png?updatedAt=1756855026210",
    category: "Frontend",
    description:
      "GTA 6 is a fan-made frontend web project designed to showcase the excitement and style of the upcoming game. Built with React.js for dynamic and modular components, Tailwind CSS for a modern and responsive design, and GSAP for smooth animations and interactive effects. The site features parallax scrolling, animated transitions, and sleek UI interactions that create an immersive browsing experience. This project demonstrates advanced frontend development skills by combining performance, interactivity, and visual appeal, making it a showcase of modern web design techniques.",
  },
  {
    title: "Clothing Store",
    skills: ["React.js", "Tailwind CSS"],
    live: "https://clothes-store-002.netlify.app/",
    github: "https://github.com/master-farhan/clothes-shop",
    img: "https://ik.imagekit.io/iura/Portfolio-project/DripNest-pro.png?updatedAt=1756855024647",
    category: "Frontend",
    description:
      "Clothing Store is a fully responsive fashion e-commerce frontend built with React.js and styled with Tailwind CSS. The site features a clean and modern user interface, intuitive navigation, and seamless product browsing experience. Users can easily filter products by category or search for specific items, enhancing usability and engagement. With a focus on modern design principles, responsive layouts, and smooth interactions, this project demonstrates proficiency in frontend development and UI/UX design, making it a polished showcase of a practical online store interface.",
  },
  {
    title: "Cocktails",
    skills: ["React.js", "Tailwind CSS", "GSAP"],
    live: "https://cocktails-02.vercel.app/",
    github: "https://github.com/master-farhan/gsap-cocktails",
    img: "https://ik.imagekit.io/iura/Portfolio-project/Cocktails.png?updatedAt=1756855024827",
    category: "Frontend",
    description:
      "Cocktails is a stylish and interactive frontend web application built using React.js, Tailwind CSS, and GSAP for smooth animations. The site allows users to explore a variety of cocktail recipes with visually engaging transitions and animated elements that enhance the browsing experience. With a focus on modern UI design, responsive layouts, and fluid interactivity, this project showcases advanced frontend development skills and the ability to create dynamic, visually appealing web applications that are both functional and enjoyable to use.",
  },
  {
    title: "3D Portfolio",
    skills: ["React.js", "Tailwind CSS", "Spline"],
    live: "https://spline-with-animation.netlify.app/",
    github: "https://github.com/master-farhan/Hero-Section-with-Spline",
    img: "https://ik.imagekit.io/iura/Portfolio-project/Spline-port.png?updatedAt=1756855032932",
    category: "Portfolio",
    description:
      "This 3D Portfolio project combines React.js, Tailwind CSS, and Spline to create an immersive and visually stunning showcase of skills and work. Using Spline, the site incorporates interactive 3D elements that respond to user interactions, making the experience engaging and modern. Tailwind CSS ensures a clean and responsive design, while React.js provides a dynamic and modular structure for seamless performance. Smooth animations and transitions throughout the site highlight attention to detail and advanced frontend capabilities, making this portfolio a unique demonstration of creativity, interactivity, and technical proficiency.",
  },
  {
    title: "My Gadget Bd",
    skills: ["React.js", "Redux", "Tailwind CSS"],
    live: "https://my-gadget-bd.netlify.app/",
    github: "https://github.com/master-farhan/My-Gadget",
    img: "https://ik.imagekit.io/iura/Portfolio-project/Gadget.png?updatedAt=1756855024500",
    category: "Frontend",
    description:
      "My Gadget Bd is a modern eCommerce frontend platform built with React.js and Redux for state management, styled using Tailwind CSS. The website allows users to browse, filter, and search for the latest gadgets efficiently. With a focus on responsive design and user-friendly interface, it ensures seamless interaction across devices, providing an engaging shopping experience. This project highlights advanced frontend skills including dynamic rendering, live search functionality, and clean UI design.",
  },
  {
    title: "My Portfolio 01",
    skills: ["HTML", "CSS", "JavaScript"],
    live: "https://master-farhan.github.io/portfolio-01/",
    github: "https://github.com/master-farhan/portfolio-01",
    img: "https://ik.imagekit.io/iura/Portfolio-project/port01.png?updatedAt=1756855031172",
    category: "Portfolio",
    description:
      "My Portfolio 01 is my first personal website built with HTML, CSS, and JavaScript. It was designed to showcase my early frontend projects and skills. With a clean and simple layout, it demonstrates the foundational knowledge of web development and my initial approach to UI design and responsive layouts.",
  },
  {
    title: "My Portfolio 02",
    skills: ["HTML", "CSS", "JavaScript"],
    live: "https://master-farhan.github.io/portfolio-02/",
    github: "https://github.com/master-farhan/portfolio-02",
    img: "https://ik.imagekit.io/iura/Portfolio-project/port02.png?updatedAt=1756855030900",
    category: "Portfolio",
    description:
      "My Portfolio 02 is an enhanced personal portfolio website built to better showcase my skills, projects, and growth as a frontend developer. Using HTML, CSS, and JavaScript, the site features improved design elements and responsive layouts, reflecting a more polished and professional approach to web development.",
  },
  {
    title: "AI Created Portfolio",
    skills: ["React.js", "TypeScript", "Tailwind CSS"],
    live: "https://ai-created-00.netlify.app/",
    github: "https://github.com/master-farhan/luminous-farhan-portfolio",
    img: "https://ik.imagekit.io/iura/Portfolio-project/Ai-created-port.png?updatedAt=1756855026032",
    category: "Portfolio",
    description:
      "AI Created Portfolio is an innovative web project built with React.js, TypeScript, and Tailwind CSS. The application allows users to generate AI-based images using prompt inputs. Its responsive design and intuitive UI make it engaging and accessible across devices. This project demonstrates the integration of AI features into a frontend interface, along with advanced type safety using TypeScript.",
  },
  {
    title: "Code & Cook",
    skills: ["React.js", "Tailwind CSS"],
    live: "https://master-farhan.github.io/recipe/",
    github: "https://github.com/master-farhan/recipe",
    img: "https://ik.imagekit.io/iura/Portfolio-project/Cook.png?updatedAt=1756855026239",
    category: "Frontend",
    description:
      "Code & Cook is a responsive recipe website built with React.js and Tailwind CSS. Users can explore a variety of meal recipes with clear navigation and visually appealing layouts. The project emphasizes user experience, modern design, and smooth interactions, making it an engaging platform for food enthusiasts.",
  },
  {
    title: "Travel Website",
    skills: ["React.js", "Tailwind CSS"],
    live: "https://travel-web-go.netlify.app/",
    github: "https://github.com/master-farhan/Travel",
    img: "https://ik.imagekit.io/iura/Portfolio-project/Travel.png?updatedAt=1756855031919",
    category: "Frontend",
    description:
      "This Travel Website is a modern frontend project built with React.js and Tailwind CSS. It features scenic destinations, interactive navigation, and a fully responsive layout. Users can browse destinations with ease, while the clean design and smooth transitions enhance the overall user experience, showcasing modern frontend development techniques.",
  },
  {
    title: "My Portfolio 03",
    skills: ["HTML", "CSS", "JavaScript"],
    live: "https://farhan-studio.netlify.app/",
    github: "https://github.com/master-farhan/studio",
    img: "https://ik.imagekit.io/iura/Portfolio-project/Port.png?updatedAt=1756855030771",
    category: "Portfolio",
    description:
      "My Portfolio 03 is a personal portfolio designed to showcase my frontend projects, skills, and contact information. Built with HTML, CSS, and JavaScript, it features an elegant design, responsive layout, and clean presentation, reflecting my growth and attention to user experience in web development.",
  },
  {
    title: "Hotel Booking",
    skills: ["React.js", "Tailwind CSS"],
    live: "https://hotel-booking-002.netlify.app/",
    github: "https://github.com/master-farhan/hotel-booking",
    img: "https://ik.imagekit.io/iura/Portfolio-project/Hotel.png?updatedAt=1756855026528",
    category: "Frontend",
    description:
      "Hotel Booking is a responsive frontend UI built with React.js and Tailwind CSS. Users can explore rooms, view amenities, and navigate the website effortlessly. The project focuses on clean design, intuitive interface, and smooth interactions, highlighting practical frontend development skills.",
  },
  {
    title: "Bubble Game",
    skills: ["HTML", "CSS", "JavaScript"],
    live: "https://master-farhan.github.io/Bubble-Game/",
    github: "https://github.com/master-farhan/Bubble-Game",
    img: "https://ik.imagekit.io/iura/Portfolio-project/Bubble.png?updatedAt=1756855758197",
    category: "Frontend",
    description:
      "Bubble Game is a fun and interactive casual game developed using vanilla JavaScript, HTML, and CSS. Players can enjoy a simple bubble shooter experience with responsive controls and engaging visuals, demonstrating skills in JavaScript logic, DOM manipulation, and game interface design.",
  },
  {
    title: "Gemini",
    skills: ["React.js", "Tailwind CSS"],
    live: "https://gemini-frontend-002.netlify.app/",
    github: "https://github.com/master-farhan/gemini-ui",
    img: "https://ik.imagekit.io/iura/Portfolio-project/gemini-clone.png?updatedAt=1756855769145",
    category: "Frontend",
    description:
      "Gemini is a frontend UI clone of Google's Gemini, built with React.js and Tailwind CSS. It features a modern design, smooth transitions, and responsive layouts. The project showcases frontend development proficiency in replicating high-quality UI patterns and delivering an interactive user interface.",
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("Recent");

  // Add "Recent" manually at the front
  const uniqueCategories = [...new Set(ProjectArray.map((p) => p.category))];
  const allCategories = ["All", "Recent", ...uniqueCategories];

  // Filtering logic
  const filteredProjects =
    activeCategory === "All"
      ? ProjectArray
      : activeCategory === "Recent"
      ? ProjectArray.slice(0, 4)
      : ProjectArray.filter((p) => p.category === activeCategory);

  // gsap
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils
      .toArray([".project-heading", ".project-category"])
      .forEach((className, index) => {
        gsap.from(className, {
          scrollTrigger: {
            trigger: className,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 50,
          duration: 0.6,
          delay: index * 0.2,
          ease: "power2.out",
        });
      });
  }, []);

  return (
    <section className="relative pt-10 pb-30 lg:pb-[8.5vw]">
      <div className="text-grow w-full rounded">
        <h2 className="project-heading text-grow text-xl sm:text-3xl lg:text-[2.5vw] flex justify-center font-bold">
          Featured Projects
        </h2>
        <p className="project-heading mt-4 lg:mt-[1.3vw] text-lg sm:text-xl lg:text-[1.5vw] text-grow text-center">
          A collection of my recent work, showcasing my skills in building
          modern, responsive, and user-friendly web applications.
        </p>
      </div>

      <div className="project-heading mt-10 lg:mt-[3vw] gap-5 lg:gap-[1.5vw] flex flex-nowrap overflow-auto scrollbar-hide">
        {allCategories.map((category, index) => (
          <div
            key={index}
            onClick={() => setActiveCategory(category)}
            className={`py-1 lg:py-[.5vw] px-10 lg:px-[3vw] font-Michroma rounded-full cursor-pointer text-sm lg:text-[1vw] whitespace-nowrap
              ${
                activeCategory === category
                  ? "bg-accent/50 text-grow"
                  : "bg-accent/10 hover:bg-accent text-grow/80"
              } transition duration-300`}
          >
            <p>{category}</p>
          </div>
        ))}
      </div>

      {/* Filtered Projects */}
      <ProjectsCard ProjectArray={filteredProjects} />
    </section>
  );
};

export default Projects;
