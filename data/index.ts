
export const svgs = [
  {
    src: "/react native.png",
  },
  {
    src: "/next.png",
  },
  {
    src: "/node.png",
  },
  {
    src: "/typescript.png",
  },
  {
    src: "/mongoose.png",
  },
  {
    src: "/monogodb.png",
  },
  {
    src: "/postgre sql.png",
  },
  {
    src: "/react native.png",
  },
  {
    src: "/react native.png",
  },
  {
    src: "/react native.png",
  },
];


type CarouselImage = {
  src: string;
  alt?: string;
  orientation?: "desktop" | "mobile";
};

type Project = {
  id: number;
  title: string;
  des: string;
  img: CarouselImage[];
  iconLists: string[];
  github: string;
  link: string;
  time: string;
  type: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: "VERSUS (E-Learning Website)",
    des: "Learn and grow together with VERSUS a platform that turly makes you wish you were learning in a way that really teaches you.",
    img: [
      { src: "/projects/VERSUS/HERO.png", alt: "Landing Page", orientation: "desktop" },
      { src: "/projects/VERSUS/MAIN MENU.png", alt: "Main Menu", orientation: "desktop" },
      { src: "/projects/VERSUS/COURSES.png", alt: "Courses Page", orientation: "desktop" },
      { src: "/projects/VERSUS/CHAPTERS.png", alt: "Chapters", orientation: "desktop" },
      { src: "/projects/VERSUS/CONTACT.png", alt: "Contact Page", orientation: "desktop" },
    ],
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    github: "https://github.com/aditya0john/VERSUS",
    link: "https://versus-code.vercel.app/",
    time: "v1.0 Jan 2024 - latest v2.0 2025",
    type: ["Full Stack", "Web App"],
  },
  {
    id: 2,
    title: "Hoppit (React Native)",
    des: "Welcome to your personal KANBAN BOARD, where you can manage your tasks and projects with ease.",
    img: [
      { src: "/projects/HOPPIT/HOPPIT MENU.jpg", alt: "MENU", orientation: "mobile" },
      { src: "/projects/HOPPIT/HOPPIT cart.PNG", alt: "Cart", orientation: "mobile" },
      { src: "/projects/HOPPIT/HOPPIT groceryModal.jpg", alt: "Grocery Modal", orientation: "mobile" },
      { src: "/projects/HOPPIT/HOPPIT items.jpg", alt: "Items", orientation: "desktop" },
      { src: "/projects/HOPPIT/HOPPIT orders.jpg", alt: "Orders", orientation: "desktop" },
    ],
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    github: "https://github.com/aditya0john/KandanBoard",
    link: "/",
    time: "v1.0 Nov 2024",
    type: ["Full Stack", "React Native", "Mobile App"]
  },
  {
    id: 3,
    title: "Kanban Board (Full Stack)",
    des: "Welcome to your personal KANBAN BOARD, where you can manage your tasks and projects with ease.",
    img: [
      { src: "/p5.png", alt: "page 1", orientation: "desktop" }
    ],
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    github: "https://github.com/aditya0john/KandanBoard",
    link: "/",
    time: "v1.0 Nov 2024",
    type: ["Full Stack", "Web App"]
  },
  {
    id: 4,
    title: "Flappy Bird (Mobile App)",
    des: "Play as FLAPPY on an adventure against obstacles.",
    img: [
      { src: "/p2.jpg", alt: "page 1", orientation: "desktop" }
    ],
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    github: "https://github.com/aditya0john/Flappy-Bird",
    link: "",
    time: "v1.0 March 2024",
    type: ["React Native", "Mobile App", "Game"]
  },
  {
    id: 5,
    title: "LAZIZ PIZZA : (Restraunt website)",
    des: "Laziz Pizza™ is known for its Taste & Variety of Pizza. Laziz Pizza has a wide product portfolio of pizza to savor customers taste buds.",
    img: [
      { src: "/projects/LAZIZ PIZZA/Loading.png", alt: "Loading Screen", orientation: "desktop" },
      { src: "/projects/LAZIZ PIZZA/Landing.png", alt: "Landing Page", orientation: "desktop" },
      { src: "/projects/LAZIZ PIZZA/Menu.png", alt: "Menu", orientation: "desktop" },
      { src: "/projects/LAZIZ PIZZA/Cart.png", alt: "Cart", orientation: "desktop" }
    ],
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    github: "https://github.com/aditya0john/poseidonplate",
    link: "https://poseidonplate.vercel.app/",
    time: "v1.0 Nov 2024",
    type: ["Full Stack", "Web App"]
  },
  {
    id: 6,
    title: "Personal Portfolio",
    des: "Welcome to a special place where you feel the MAGIC of being ME for the while you stay...",
    img: [
      { src: "/Portfolio_img.png", alt: "page 1", orientation: "desktop" }
    ],
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    github: "/",
    link: "/",
    time: "latest version 2026",
    type: ["Full Stack", "Web App"]
  },
];
