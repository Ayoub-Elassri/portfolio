export interface SkillCategory {
    title: string;
    skills: string[];
}

export const skillsData: SkillCategory[] = [
    {
        title: "Frontend",
        skills: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "React.js",
            "Bootstrap",
            "Tailwind CSS"
        ],
    },

    {
        title: "Backend",
        skills: [
            "PHP",
            "Laravel"
        ],
    },

    {
        title: "Databases",
        skills: [
            "MySQL",
            "MongoDB"
        ],
    },

    {
        title: "Tools",
        skills: [
            "Git",
            "GitHub",
            "VS Code",
            "Postman",
            "XAMPP"
        ],
    },
];