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
import LoginPDISystem from "@/assets/images/pdi/login.png";
import Private from "@/assets/images/votaciones/image.png";
import PharmacyUIHome from "@/assets/images/pharmacy/ui.png";
import MoratoryInterestCalculator from "@/assets/images/calculator/image.png";
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
  {
    id: "pdi-system",
    title: "Institutional Development Plan",
    description:
      "System used by the faculty administration to publish the Institutional Development Plan and receive feedback from the university community to take their opinions into account",
    shortDescription:
      "System for feedback on the institutional development plan",
    image: RegistroLanding,
    technologies: ["Next.js", "Nest.js", "TypeScript", "React"],
    category: "Web App",
    featured: false,
    links: {
      demo: "",
      github: null,
    },
    highlights: ["Capacity Management System", "Role-Based Access Control"],
    images: [
      {
        src: LoginPDISystem,
        title: "Login Page",
        description: "Login page to access the system",
      },
    ],
  },
  {
    id: "internal-elections-system",
    title: "Internal Elections System",
    description:
      "System used for managing internal university elections, including the publication and upload of candidate lists, vote registration, role-based permission enforcement for voting, PDF generation of results, and real-time result monitoring through WebSockets for supervision purposes",
    shortDescription:
      "System for managing internal university elections and real-time voting results",
    image: RegistroLanding,
    technologies: ["Next.js", "Nest.js", "TypeScript", "React"],
    category: "Web App",
    featured: false,
    links: {
      demo: "",
      github: null,
    },
    highlights: [
      "Role-Based Voting Permissions",
      "Real-Time Results with WebSockets",
      "PDF Generation of Election Results",
      "Secure Vote Registration",
    ],
    images: [
      {
        src: Private,
        title: "Private System",
        description: "",
      },
    ],
  },
  {
    id: "pharmacy-ui",
    title: "Pharmacy Management UI",
    description:
      "User interface design for a pharmacy management system, focused exclusively on the visual layer, including product listing, layout structure, and navigation without backend functionality",
    shortDescription: "UI-only pharmacy management interface",
    image: RegistroLanding,
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    category: "Web UI",
    featured: false,
    links: {
      demo: "https://jorgemike.github.io/Farmacia/",
      github: null,
    },
    highlights: [
      "Clean and Responsive Layout",
      "Product Listing Interface",
      "User-Friendly Navigation",
      "UI-Focused Design (No Backend)",
    ],
    images: [
      {
        src: PharmacyUIHome,
        title: "Main Interface",
        description: "Main UI view of the pharmacy interface",
      },
    ],
  },
  {
    id: "moratory-interest-calculator",
    title: "Moratory Interest Calculator",
    description:
      "Web application developed to calculate moratory interest, allowing users to input loan details and automatically compute the interest based on the provided data",
    shortDescription: "Web app for calculating moratory interest",
    image: RegistroLanding,
    technologies: ["Next.js", "Bootstrap", "JavaScript"],
    category: "Web App",
    featured: false,
    links: {
      demo: "https://jorgemike.github.io/calculadora_interes_moratorio/",
      github: null,
    },
    highlights: [
      "Moratory Interest Calculation",
      "Simple and Intuitive Form Inputs",
      "Responsive UI with Bootstrap",
      "Client-Side Calculation Logic",
    ],
    images: [
      {
        src: MoratoryInterestCalculator,
        title: "Calculator Interface",
        description: "Main interface for calculating moratory interest",
      },
    ],
  },
];

// Todos los proyectos
export const allProjects: Experience[] = [...featuredProjects];
