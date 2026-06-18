import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaGithub
} from "react-icons/fa";

export const skillsData = [

  // Frontend
  {
    id: 1,
    name: "HTML5",
    percentage: 95,
    category: "Frontend",
    icon: <FaHtml5 />
  },

  {
    id: 2,
    name: "CSS3",
    percentage: 90,
    category: "Frontend",
    icon: <FaCss3Alt />
  },

  {
    id: 3,
    name: "JavaScript",
    percentage: 88,
    category: "Frontend",
    icon: <FaJs />
  },

  {
    id: 4,
    name: "React.js",
    percentage: 90,
    category: "Frontend",
    icon: <FaReact />
  },

  {
    id: 5,
    name: "Bootstrap",
    percentage: 92,
    category: "Frontend",
    icon: <FaBootstrap />
  },

  // Backend

  {
    id: 6,
    name: "Node.js",
    percentage: 85,
    category: "Backend",
    icon: <FaNodeJs />
  },

  // {
  //   id: 7,
  //   name: "Express.js",
  //   percentage: 82,
  //   category: "Backend",
  //   icon: <FaNodeJs />
  // },

  // Database

  // {
  //   id: 8,
  //   name: "MongoDB",
  //   percentage: 85,
  //   category: "Database",
  //   icon: <FaDatabase />
  // },

  {
    id: 9,
    name: "MySQL",
    percentage: 80,
    category: "Database",
    icon: <FaDatabase />
  },

  // Tools

  {
    id: 10,
    name: "Git",
    percentage: 90,
    category: "Tools",
    icon: <FaGitAlt />
  },

  {
    id: 11,
    name: "GitHub",
    percentage: 90,
    category: "Tools",
    icon: <FaGithub />
  },

  {
    id: 12,
    name: "VS Code",
    percentage: 95,
    category: "Tools",
    icon: "💻"
  },

  {
    id: 13,
    name: "Postman",
    percentage: 85,
    category: "Tools",
    icon: "📮"
  }

];