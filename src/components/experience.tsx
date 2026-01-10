import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Calendar,
  MapPin,
  Award,
  Users,
  Code,
  Server,
  Database,
  Cloud,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

export default function Experience() {
  const ref = useRef(null);

  // Detecta cuando el elemento entra a la pantalla
  const isInView = useInView(ref, {
    once: true, // solo se anima la primera vez
    margin: "-150px", // aparece un poco antes de estar completamente visible
  });

  const experiences = [
    {
      id: "content-oh",
      company: "Content-Oh!",
      position: "Fullstack Developer",
      period: "July 2025 - Present",
      location: "Remote",
      description: [
        "Developed and maintained full-stack web applications across frontend, backend, and database layers to deliver comprehensive solutions",
        "Optimized application performance through SQL query refactoring and database view creation, reducing response times",
        "Implemented serverless solutions on AWS using Lambda functions and S3 buckets for file processing and storage",
        "Collaborated on significant UI/UX improvements, enhancing user satisfaction and system usability",
      ],
      technologies: [
        "React",
        "Node.js",
        "AWS Lambda",
        "S3",
        "SQL",
        "TypeScript",
      ],
      highlights: [
        {
          icon: Cloud,
          label: "Serverless Architecture",
          description: "AWS Lambda & S3 implementation",
        },
        {
          icon: Database,
          label: "Performance Optimization",
          description: "SQL query refactoring",
        },
        {
          icon: Users,
          label: "UI/UX Enhancement",
          description: "Improved user satisfaction",
        },
        {
          icon: Code,
          label: "Full-Stack Development",
          description: "End-to-end solutions",
        },
      ],
      metrics: [
        { value: "AWS", label: "Cloud Solutions" },
        { value: "Optimized", label: "Performance" },
      ],
    },
    {
      id: "fes-acatlan",
      company: "FES Acatlán (UNAM)",
      position: "Web Development Lead",
      period: "January 2023 - June 2025",
      location: "Naucalpan, Mexico",
      description: [
        "Led development of 5 academic web applications, including a faculty evaluation system processing 100,000+ surveys per semester",
        "Designed scalable, modular architectures using Next.js and Nest.js, implementing SOLID principles for efficient high-traffic handling",
        "Coordinated and mentored 20+ developers and students, conducting web development workshops and promoting agile methodologies",
        "Trained team in frontend and backend technologies, ensuring knowledge transfer and continuous improvement",
      ],
      technologies: [
        "Next.js",
        "Nest.js",
        "TypeScript",
        "React",
        "Node.js",
        "MySQL",
      ],
      // Timeline de progresión profesional
      timeline: [
        {
          period: "Jan 2023 - Aug 2023",
          role: "Frontend Developer",
          description:
            "Started focusing on React development and user interface implementation",
          technologies: ["Next.js", "JavaScript", "CSS"],
          icon: Code,
          color: "bg-blue-500",
        },
        {
          period: "Sep 2023 - Dec 2024",
          role: "Fullstack Developer",
          description:
            "Expanded to backend development, working with complete web application stack",
          technologies: ["React", "Node.js", "Express", "MySQL"],
          icon: Server,
          color: "bg-green-500",
        },
        {
          period: "Jan 2024 - Jun 2025",
          role: "Web Development Lead",
          description:
            "Promoted to leadership role, mentoring team and architecting solutions",
          technologies: ["Next.js", "Nest.js", "TypeScript", "Leadership"],
          icon: Users,
          color: "bg-purple-500",
        },
      ],
      highlights: [
        {
          icon: TrendingUp,
          label: "Career Growth",
          description: "Frontend → Fullstack → Lead",
        },
        {
          icon: Users,
          label: "Team Leadership",
          description: "Mentored 20+ developers",
        },
        {
          icon: Server,
          label: "Scalable Architecture",
          description: "High-traffic systems",
        },
        {
          icon: Award,
          label: "Academic Impact",
          description: "5 web applications",
        },
      ],
      metrics: [
        { value: "3", label: "Role Progressions" },
        { value: "100K+", label: "Surveys Processed" },
      ],
    },
    {
      id: "freelance",
      company: "Independent",
      position: "Freelance Developer",
      period: "January 2024 - December 2024",
      location: "Remote",
      description: [
        "Designed and implemented custom web solutions, including an appointment management system for car dealerships",
        "Managed complete project lifecycle: server configuration and deployment with NGINX, test and production environment setup",
        "Implemented continuous integration and maintained constant client communication to ensure project satisfaction",
      ],
      technologies: ["React", "Express.js", "MongoDB", "NGINX", "Docker"],
      highlights: [
        {
          icon: Code,
          label: "Custom Solutions",
          description: "Tailored web applications",
        },
        {
          icon: Server,
          label: "DevOps Management",
          description: "Full lifecycle deployment",
        },
        {
          icon: Users,
          label: "Client Relations",
          description: "Continuous communication",
        },
        {
          icon: Award,
          label: "Project Success",
          description: "100% satisfaction rate",
        },
      ],
      metrics: [
        { value: "Custom", label: "Solutions" },
        { value: "Full-Cycle", label: "Development" },
      ],
    },
  ];

  return (
    <section ref={ref} className="container mx-auto px-6 py-16">
      {/* TÍTULO */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="font-retro text-4xl md:text-6xl mb-12 text-center"
      >
        My Experience
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Tabs defaultValue="content-oh" className="w-full max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="content-oh" className="text-sm">
              Content-Oh!
            </TabsTrigger>
            <TabsTrigger value="fes-acatlan" className="text-sm">
              UNAM
            </TabsTrigger>
            <TabsTrigger value="freelance" className="text-sm">
              Freelance
            </TabsTrigger>
          </TabsList>

          {experiences.map((exp) => (
            <TabsContent key={exp.id} value={exp.id} className="mt-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {/* Header de la experiencia */}
                <div className="text-center space-y-4">
                  <h3 className="text-3xl font-bold text-blue-500">
                    {exp.position}
                  </h3>
                  <h4 className="text-xl font-semibold text-foreground">
                    {exp.company}
                  </h4>

                  <div className="md:flex justify-center gap-8 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-bold">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm font-bold">{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Timeline horizontal de progresión (solo para UNAM) */}
                {exp.timeline && (
                  <div className="mb-8">
                    <h5 className="font-semibold mb-5 text-lg text-center">
                      Career Progression
                    </h5>

                    {/* Timeline horizontal */}
                    <div className="relative overflow-x-auto py-5">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
                        {exp.timeline.map((stage, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="md:flex flex-col items-center relative hidden"
                          >
                            {/* Línea conectora horizontal - solo en desktop */}
                            {index < exp.timeline.length - 1 && (
                              <div className="absolute top-6 left-full w-full h-0.5 bg-primary/20 hidden md:block z-0">
                                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2">
                                  <ArrowRight className="w-4 h-4 text-primary/90" />
                                </div>
                              </div>
                            )}

                            {/* Icono del rol */}
                            <div className="w-12 h-12 dark:bg-zinc-900 bg-white border rounded-full flex items-center justify-center mb-4 relative z-10 shadow-lg">
                              <stage.icon className="w-6 h-6" />
                            </div>

                            {/* Contenido de la etapa */}
                            <div className="bg-muted/50 rounded-lg p-4 border shadow-sm w-full text-center">
                              <h6 className="font-semibold text-primary mb-2">
                                {stage.role}
                              </h6>
                              <p className="text-xs text-muted-foreground mb-2">
                                {stage.period}
                              </p>
                              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                                {stage.description}
                              </p>

                              {/* Tecnologías */}
                              <div className="flex flex-wrap justify-center gap-1">
                                {stage.technologies.map((tech, techIndex) => (
                                  <span
                                    key={techIndex}
                                    className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Indicador de progresión en móviles */}
                    <div className="flex justify-center items-center gap-2 mt-6 md:hidden">
                      {exp.timeline.map((_, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          {index < exp.timeline.length - 1 && (
                            <ArrowRight className="w-4 h-4 text-primary/50 mx-2" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Grid de contenido */}
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Columna izquierda */}
                  <div className="space-y-6">
                    <div>
                      <h5 className="font-semibold mb-4 text-lg">
                        Key Responsibilities
                      </h5>
                      <ul className="space-y-3">
                        {exp.description.map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold mb-4 text-lg">
                        Technologies Used
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Columna derecha */}
                  <div className="space-y-6">
                    <div>
                      <h5 className="font-semibold mb-4 text-lg">
                        Key Achievements
                      </h5>
                      <div className="grid gap-3">
                        {exp.highlights.map((highlight, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg border"
                          >
                            <highlight.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <h6 className="font-medium text-sm">
                                {highlight.label}
                              </h6>
                              <p className="text-xs text-muted-foreground mt-1">
                                {highlight.description}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-muted/50 rounded-lg p-6">
                      <h5 className="font-semibold mb-3 text-lg">
                        Impact & Results
                      </h5>
                      <div className="grid grid-cols-2 gap-4">
                        {exp.metrics.map((metric, index) => (
                          <div key={index} className="text-center">
                            <div className="text-2xl font-bold text-primary">
                              {metric.value}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>
    </section>
  );
}
