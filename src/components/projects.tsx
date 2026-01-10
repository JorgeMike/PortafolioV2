import { motion, useInView } from "motion/react";
import React, { useRef, useState } from "react";
import {
  ExternalLink,
  Filter,
  GitBranch,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { allProjects, featuredProjects } from "@/const/projects";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import "@justinribeiro/lite-youtube";
import type { Experience } from "@/types/types";

export default function Projects() {
  const ref = useRef(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Experience | null>(
    null
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Detecta cuando el elemento entra a la pantalla
  const isInView = useInView(ref, {
    once: true,
    margin: "-150px",
  });

  // Función para abrir el modal con el proyecto seleccionado
  const openProjectDialog = (project: Experience) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setIsDialogOpen(true);
  };

  // Navegación de imágenes
  const nextImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  // Filtros disponibles
  const filters = [
    { id: "all", label: "All Projects", count: allProjects.length },
    {
      id: "Web App",
      label: "Web Apps",
      count: allProjects.filter((p) => p.category === "Web App").length,
    },
    {
      id: "AI/ML",
      label: "AI/ML",
      count: allProjects.filter((p) => p.category === "AI/ML").length,
    },
    {
      id: "Academic",
      label: "Academic",
      count: allProjects.filter((p) => p.category === "Academic").length,
    },
  ];

  // Proyectos filtrados
  const filteredProjects =
    activeFilter === "all"
      ? allProjects.filter((p) => !p.featured)
      : allProjects.filter((p) => p.category === activeFilter && !p.featured);

  return (
    <section ref={ref} className="container mx-auto px-6 py-16">
      {/* TÍTULO */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="font-retro text-4xl md:text-6xl mb-12 text-center"
      >
        Featured Projects
      </motion.h2>

      {/* HERO - PROYECTOS DESTACADOS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-20"
      >
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
              className="group cursor-pointer"
              onClick={() => openProjectDialog(project)}
            >
              {/* Imagen */}
              <div className="relative h-80 lg:h-96 overflow-hidden rounded-2xl border shadow-xl hover:shadow-2xl transition-all duration-500 mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400"><rect width="600" height="400" fill="%23f3f4f6"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%236b7280" font-family="sans-serif" font-size="24">${project.title}</text></svg>`;
                  }}
                />

                {/* Overlay hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-gray-700 font-medium">
                    Click to view details
                  </div>
                </div>

                {/* Badge de categoría */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Contenido debajo de la imagen */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Tecnologías principales */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-muted text-muted-foreground rounded text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-sm font-medium">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* FILTROS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
              activeFilter === filter.id
                ? "bg-primary text-primary-foreground shadow-lg scale-105"
                : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground"
            }`}
          >
            <Filter className="w-4 h-4" />
            {filter.label}
            <span className="text-xs bg-black/10 px-1.5 py-0.5 rounded">
              {filter.count}
            </span>
          </button>
        ))}
      </motion.div>

      {/* GRID DE TODOS LOS PROYECTOS */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h3 className="text-2xl font-bold mb-8 text-center">All Projects</h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group bg-card rounded-xl border shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
              onClick={() => openProjectDialog(project)}
            >
              {/* Imagen */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect width="400" height="300" fill="%23f3f4f6"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%236b7280" font-family="sans-serif">${project.title}</text></svg>`;
                  }}
                />

                {/* Overlay con enlaces */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  {project.links?.demo && (
                    <motion.a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-700"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  )}
                  {project.links?.github && (
                    <motion.a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-700"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <GitBranch className="w-5 h-5" />
                    </motion.a>
                  )}
                </div>

                {/* Badge de categoría */}
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-primary text-primary-foreground rounded text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h4 className="font-bold text-lg mb-2 line-clamp-1">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-muted text-xs rounded font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-muted text-xs rounded font-medium">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Estado vacío */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="w-24 h-24 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
              <Filter className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No projects found</h3>
            <p className="text-muted-foreground mb-4">
              No projects match the current filter criteria.
            </p>
            <button
              onClick={() => setActiveFilter("all")}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Show All Projects
            </button>
          </motion.div>
        )}
      </motion.div>

      {/* DIALOG DEL PROYECTO CON DOS COLUMNAS */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="min-w-[80vw] max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader className="border-b pb-4">
                <div className="flex items-start justify-between">
                  <div>
                    <DialogTitle className="text-2xl font-bold">
                      {selectedProject.title}
                    </DialogTitle>
                  </div>
                </div>
              </DialogHeader>

              <div className="grid lg:grid-cols-2 gap-8 py-6">
                {/* COLUMNA IZQUIERDA - GALERÍA */}
                <div className="space-y-4">
                  {/* Imagen principal */}
                  <div className="relative h-90 bg-muted rounded-xl overflow-hidden">
                    {/* Badge de categoría */}
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                        {selectedProject.category}
                      </span>
                    </div>

                    {selectedProject.images.length > 1 ? (
                      <img
                        src={
                          selectedProject.images
                            ? selectedProject.images[currentImageIndex].src
                            : selectedProject.image
                        }
                        alt={`${selectedProject.title} - Image ${
                          currentImageIndex + 1
                        }`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400"><rect width="600" height="400" fill="%23f3f4f6"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%236b7280" font-family="sans-serif" font-size="18">${selectedProject.title}</text></svg>`;
                        }}
                      />
                    ) : (
                      React.createElement("lite-youtube", {
                        videoid: "jLvXUXI2LAQ",
                        playlabel: "Play Misprofesores video",
                        style: { width: "100%", height: "100%" },
                      })
                    )}

                    {/* Navegación de imágenes */}
                    {selectedProject.images &&
                      selectedProject.images.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>

                          {/* Indicador de imagen */}
                          <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 text-white text-xs rounded">
                            {currentImageIndex + 1} /{" "}
                            {selectedProject.images.length}
                          </div>
                        </>
                      )}
                  </div>

                  {/* Thumbnails */}
                  {selectedProject.images &&
                    selectedProject.images.length > 1 && (
                      <div className="flex gap-2 overflow-x-auto">
                        {selectedProject.images.map((image, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                              index === currentImageIndex
                                ? "border-primary"
                                : "border-transparent hover:border-muted-foreground"
                            }`}
                          >
                            <img
                              src={image.src}
                              alt={
                                image.description || `Thumbnail ${index + 1}`
                              }
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                </div>

                {/* COLUMNA DERECHA - DETALLES */}
                <div className="space-y-6">
                  {/* Descripción */}
                  <div>
                    <h3 className="font-semibold text-lg mb-3">
                      About this project
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.description ||
                        selectedProject.shortDescription}
                    </p>
                  </div>

                  {selectedProject.images[currentImageIndex] && (
                    <div>
                      <h3 className="font-semibold text-lg mb-3">
                        {selectedProject.images[currentImageIndex].title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {selectedProject.images[currentImageIndex].description}
                      </p>
                    </div>
                  )}

                  {/* Tecnologías */}
                  <div>
                    <h3 className="font-semibold text-lg mb-3">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  {selectedProject.highlights && (
                    <div>
                      <h3 className="font-semibold text-lg mb-3">
                        Key Highlights
                      </h3>
                      <ul className="space-y-2">
                        {selectedProject.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Award className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
