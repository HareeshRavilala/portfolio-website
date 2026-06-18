import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaDatabase,
  FaGithub
} from "react-icons/fa";

import { SiJquery } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";

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
  {
    id: 6,
    name: "jQuery",
    percentage: 85,
    category: "Frontend",
    icon: <SiJquery />
  },

  // Backend
  {
    id: 7,
    name: "Node.js",
    percentage: 85,
    category: "Backend",
    icon: <FaNodeJs />
  },

  // Database
  {
    id: 8,
    name: "MySQL",
    percentage: 80,
    category: "Database",
    icon: <FaDatabase />
  },

  // Tools
  {
    id: 9,
    name: "GitHub",
    percentage: 90,
    category: "Tools",
    icon: <FaGithub />
  },
  {
    id: 10,
    name: "VS Code",
    percentage: 95,
    category: "Tools",
    icon: "💻"
  },
  {
    id: 11,
    name: "Postman",
    percentage: 85,
    category: "Tools",
    icon: "📮"
  },
  {
    id:12,
    name: "Redux",
    percentage: 80,
    category: "Frontend",
    icon: <TbBrandRedux />
  }
];