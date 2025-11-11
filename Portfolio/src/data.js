import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import home from "./assets/images/home-1.png";

export const userInfo = {
  greeting: "Hello it's Me",
  name: "Noorul Hadi",
  role: "Web Developer",
  description:
    "I am a passionate MERN stack developer skilled in creating responsive, user-friendly interfaces using HTML, CSS, JavaScript, and modern frameworks.",
  image: home,
};

export const socials = [
  { id: 1, icon: FaGithub, link: "https://github.com/nh0105912" },
  {
    id: 2,
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/in/noorul-hadi-b837a8372/",
  },
  { id: 3, icon: FaFacebookF, link: "#" },
];

export const buttons = [
  {
    text: "Download Resume",
    link: "#",
  },
  {
    text: "Coming Soon",
    link: "#",
  },
];
