import MisProfesores from "@/assets/images/mis_profesores.png";
import EvaluacionDocente from "@/assets/images/evaluacion-docente/evaluacion_docecnte.png";
import Image1 from "@/assets/images/evaluacion-docente/image_1.png";
import Image2 from "@/assets/images/evaluacion-docente/image_2.png";
import Image3 from "@/assets/images/evaluacion-docente/image_3.png";
import Image4 from "@/assets/images/evaluacion-docente/image_4.png";
import Image5 from "@/assets/images/evaluacion-docente/image_5.png";
import Image6 from "@/assets/images/evaluacion-docente/image_6.png";
import type { Experience } from "@/types/types";

// Proyectos destacados para el hero
export const featuredProjects: Experience[] = [
  {
    id: "chatbot-ai",
    title: "AI Chatbot with NLP",
    description:
      "Intelligent chatbot with natural language processing using web scraping, data cleaning, and Google Cloud Platform storage. Integrated with Gemini API for contextual responses.",
    shortDescription:
      "Intelligent chatbot with NLP using web scraping and Google Cloud.",
    technologies: ["React", "FastAPI", "Python", "Google Cloud", "Gemini API"],
    category: "AI/ML",
    featured: true,
    links: {
      demo: "https://misprofesores.com/chatbot",
      github: "https://github.com/JorgeMike/chatbot-ai",
    },
    highlights: [
      "Natural Language Processing",
      "Web Scraping Integration",
      "Google Cloud Storage",
      "Contextual AI Responses",
    ],
    image: MisProfesores,
    video: "https://www.youtube.com/watch?v=jLvXUXI2LAQ&t=26s",
    images: [],
  },
  {
    id: "faculty-evaluation",
    title: "Faculty Evaluation System",
    description:
      "Academic web application processing 100,000+ surveys per semester. Built with scalable architecture using Next.js and Nest.js, handling high-traffic efficiently.",
    shortDescription:
      "Academic web app processing 100K+ surveys with scalable architecture.",
    image: EvaluacionDocente,
    technologies: ["Next.js", "Nest.js", "TypeScript", "MySQL", "React"],
    category: "Web App",
    featured: true,
    links: {
      demo: "https://encuesta.acatlan.unam.mx",
      github: null, // Privado
    },
    highlights: [
      "100K+ Surveys Processed",
      "High-Traffic Architecture",
      "Real-time Analytics",
      "Academic Impact",
    ],
    images: [
      {
        src: EvaluacionDocente,
        title: "Landing Page",
        description: "User-friendly welcome page with login options",
      },
      {
        src: Image1,
        title: "Student Portal",
        description: "Dedicated login interface for students",
      },
      {
        src: Image2,
        title: "Admin Dashboard",
        description: "Management interface with survey overview",
      },
      {
        src: Image3,
        title: "Real-time Monitoring",
        description: "Live tracking of survey submissions",
      },
      {
        src: Image4,
        title: "Survey Details",
        description: "Comprehensive survey statistics view",
      },
      {
        src: Image5,
        title: "Analytics Dashboard",
        description: "Visual data representation and insights",
      },
      {
        src: Image6,
        title: "Survey Preview",
        description: "Student view before submission",
      },
    ],
  },
];

// Todos los proyectos
export const allProjects: Experience[] = [...featuredProjects];
