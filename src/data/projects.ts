export interface Project {
    id: number;
    title: string;
    description: string;
    tech: string[];
    githubUrl?: string;
    liveUrl?: string;
    image: string;
    demo?: string;
    featured?: boolean;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Booking Fes",
        description:
            "A full-stack web application for booking tourist activities and experiences in the city of Fes. Developed with Laravel, React.js and MySQL.",
        tech: ["Laravel", "React.js", "PHP", "MySQL", "Bootstrap"],
        githubUrl: "https://github.com/Ayoub-Elassri/Booking_Fes",
        image: "/booking-fes.png",
        featured: true,
    },

    {
        id: 2,
        title: "Car Rental Management System",
        description:
            "A web application for managing car rentals, customers and reservations with a modern and responsive interface.",
        tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
        githubUrl: "https://github.com/Ayoub-Elassri/Location-de-Voitures",
        image: "/car-rental.png",
    },

    {
        id: 3,
        title: "Personal Portfolio",
        description:
            "My personal portfolio built with React and TypeScript to showcase my skills, projects and contact information.",
        tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
        githubUrl: "https://github.com/Ayoub-Elassri",
        image: "/portfolio.png",
    }
];