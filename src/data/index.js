import {
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaGitAlt,
    FaGithub,
    FaFigma,
} from 'react-icons/fa';
import {
    SiTailwindcss,
    SiJavascript,
    SiReactrouter,
    SiPostman,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

export const portfolioData = {
    personalInfo: {
        name: "Md. Firoz Al Mahmud",
        title: "Frontend Developer",
        location: "Dhaka, Bangladesh",
        email: "firoz.a.mahmud01@gmail.com",
        phone: "+8801743929833",
        github: "https://github.com/Firoz671",
        linkedin: "https://www.linkedin.com/in/firoz-al-mahmud/",
    },
    about: {
        description:
            "Motivated Frontend Developer with hands-on experience in building responsive, user-focused web interfaces using React.js and modern web technologies. Currently pursuing a B.Sc. in Computer Science and Engineering with a strong foundation in programming and modern frameworks. Committed to continuous learning and delivering clean, efficient, and scalable solutions.",
    },
    skills: {
        frontend: [
            { name: "HTML5", icon: FaHtml5, color: "text-[#E34F26]", hoverBorder: "hover:border-[#E34F26]/50", hoverGlow: "hover:shadow-[0_0_15px_rgba(227,79,38,0.3)]", proficiency: 95 },
            { name: "CSS3", icon: FaCss3Alt, color: "text-[#1572B6]", hoverBorder: "hover:border-[#1572B6]/50", hoverGlow: "hover:shadow-[0_0_15px_rgba(21,114,182,0.3)]", proficiency: 90 },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]", hoverBorder: "hover:border-[#06B6D4]/50", hoverGlow: "hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]", proficiency: 95 },
            { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]", hoverBorder: "hover:border-[#F7DF1E]/50", hoverGlow: "hover:shadow-[0_0_15px_rgba(247,223,30,0.3)]", proficiency: 85 },
            { name: "React.js", icon: FaReact, color: "text-[#61DAFB]", hoverBorder: "hover:border-[#61DAFB]/50", hoverGlow: "hover:shadow-[0_0_15px_rgba(97,218,251,0.3)]", proficiency: 90 },
            { name: "React Router", icon: SiReactrouter, color: "text-[#CA4245]", hoverBorder: "hover:border-[#CA4245]/50", hoverGlow: "hover:shadow-[0_0_15px_rgba(202,66,69,0.3)]", proficiency: 80 },
        ],
        tools: [
            { name: "Git", icon: FaGitAlt, color: "text-[#F05032]", hoverBorder: "hover:border-[#F05032]/50", hoverGlow: "hover:shadow-[0_0_15px_rgba(240,80,50,0.3)]", proficiency: 85 },
            { name: "GitHub", icon: FaGithub, color: "text-slate-800 dark:text-white", hoverBorder: "hover:border-slate-800/50 dark:hover:border-white/50", hoverGlow: "hover:shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]", proficiency: 90 },
            { name: "VS Code", icon: VscVscode, color: "text-[#007ACC]", hoverBorder: "hover:border-[#007ACC]/50", hoverGlow: "hover:shadow-[0_0_15px_rgba(0,122,204,0.3)]", proficiency: 95 },
            { name: "Postman", icon: SiPostman, color: "text-[#FF6C37]", hoverBorder: "hover:border-[#FF6C37]/50", hoverGlow: "hover:shadow-[0_0_15px_rgba(255,108,55,0.3)]", proficiency: 85 },
            { name: "Figma", icon: FaFigma, color: "text-[#F24E1E]", hoverBorder: "hover:border-[#F24E1E]/50", hoverGlow: "hover:shadow-[0_0_15px_rgba(242,78,30,0.3)]", proficiency: 80 },
        ],
    },
    education: [
        {
            degree: "B.Sc. in Computer Science and Engineering",
            institution: "Daffodil International University",
            location: "Dhaka, Bangladesh",
            duration: "2022 - 2025",
        },
        {
            degree: "Higher Secondary Certificate",
            institution: "Biam Model School and College, Rangpur",
            location: "Rangpur, Bangladesh",
            duration: "2017 - 2019",
        },
        {
            degree: "Secondary School Certificate",
            institution: "M.s School and College, Ulipur, Kurigram",
            location: "Ulipur, Kurigram, Bangladesh",
            duration: "2012 - 2017",
        }
    ],
    certifications: [
        {
            title: "MERN Stack Developer Course",
            issuer: "Programming Hero",
        },
        {
            title: "Responsive Web Design",
            issuer: "freeCodeCamp",
        },
        {
            title: "Postman Student Expert",
            issuer: "Postman",
        },
        {
            title: "Introduction to Prompt Engineering",
            issuer: "Simplilearn",
        },
        {
            title: "JavaScript Workshop for Absolute Beginners",
            issuer: "Ostad"
        }
    ],
};
