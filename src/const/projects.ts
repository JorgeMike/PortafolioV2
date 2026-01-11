import MisProfesores from "@/assets/images/mis_profesores.png";
import EvaluacionDocente from "@/assets/images/evaluacion-docente/evaluacion_docecnte.png";
import Image1 from "@/assets/images/evaluacion-docente/image_1.png";
import Image2 from "@/assets/images/evaluacion-docente/image_2.png";
import Image3 from "@/assets/images/evaluacion-docente/image_3.png";
import Image4 from "@/assets/images/evaluacion-docente/image_4.png";
import Image5 from "@/assets/images/evaluacion-docente/image_5.png";
import Image6 from "@/assets/images/evaluacion-docente/image_6.png";
import DSC from "@/assets/images/cedetec/DSc.png";
import Login from "@/assets/images/cedetec/login.png";
import Landing from "@/assets/images/cedetec/landing.png";
import RegistroLanding from "@/assets/images/registro/landing.png";
import RegistroRegister from "@/assets/images/registro/register.png";
import RegistroSuccessEmail from "@/assets/images/registro/succes_email.png";
import RegistroSuccessRegister from "@/assets/images/registro/succes_register.png";
import CameraScanner from "@/assets/images/registro/camera_scanning.jpeg";
import CameraRequest from "@/assets/images/registro/camera_request.jpeg";
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
  {
    id: "cedetec",
    title: "CEDETEC Technological Development Center Website",
    description:
      "Informative web platform showcasing CEDETEC department services, featuring comprehensive event management system with creation, administration, and automated attendee list generation capabilities.",
    shortDescription:
      "Web platform for CEDETEC services with event management and attendee tracking.",
    image: Landing,
    technologies: ["Next.js", "Nest.js", "TypeScript", "MySQL", "React"],
    category: "Web App",
    featured: false,
    links: {
      demo: "https://cedetec.acatlan.unam.mx",
      github: null,
    },
    highlights: [
      "Event Management System",
      "Service Information Portal",
      "Automated Attendee Lists",
      "Administrative Dashboard",
    ],
    images: [
      {
        src: Landing,
        title: "Landing Page",
        description: "Dynamic carousel landing page updated by administrators",
      },
      {
        src: Login,
        title: "Admin Login",
        description: "Secure authentication portal for event administrators",
      },
      {
        src: DSC,
        title: "Event Dashboard",
        description: "Event management interface with attendee list generation",
      },
    ],
  },
  {
    id: "event-registration-system",
    title: "Event Registration System",
    description:
      "Comprehensive event management platform enabling faculty to create internal and external events with automated information autofill for students and professors. Features QR-based attendance tracking, automatic attendee list generation, capacity management, and role-based administration with Markdown support for rich content customization.",
    shortDescription:
      "Event management platform with QR attendance, autofill, and capacity control.",
    image: RegistroLanding,
    technologies: [
      "Next.js",
      "Nest.js",
      "TypeScript",
      "MySQL",
      "React",
      "QR Code",
    ],
    category: "Web App",
    featured: false,
    links: {
      demo: "",
      github: null,
    },
    highlights: [
      "QR-Based Attendance Tracking",
      "Automated Registration Autofill",
      "Capacity Management System",
      "Role-Based Access Control",
      "Markdown Content Support",
      "Real-time Attendee Reports",
    ],
    images: [
      {
        src: RegistroLanding,
        title: "Event Landing Page",
        description: "Landing page showing currents events",
      },
      {
        src: RegistroRegister,
        title: "Registration Form",
        description: "Registration form for internal students or professors",
      },
      {
        src: RegistroSuccessRegister,
        title: "Registration Confirmation",
        description:
          "Successful registration with QR code for event attendance",
      },
      {
        src: RegistroSuccessEmail,
        title: "Email Confirmation",
        description:
          "Automated email with QR attendance code and event details",
      },
      {
        src: CameraRequest,
        title: "Camera Permission Request",
        description: "Browser camera access request for QR code scanning",
        isMobile: true,
      },
      {
        src: CameraScanner,
        title: "QR Code Scanner",
        description: "Live QR code scanning interface for attendance tracking",
        isMobile: true,
      },
    ],
  },
];

// Todos los proyectos
export const allProjects: Experience[] = [...featuredProjects];
