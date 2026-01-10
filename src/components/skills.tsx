import ReactIcon from "./icons/react";
import NextIcon from "./icons/next";
import ReduxIcon from "./icons/redux";
import TypeScriptIcon from "./icons/typescript";
import JavaScriptIcon from "./icons/javascript";
import NodeIcon from "./icons/node";
import NestIcon from "./icons/nest";
import FaztApi from "./icons/fazapi";
import ExpressIcon from "./icons/express";
import LinuxIcon from "./icons/linux";
import MariadbIcon from "./icons/mariadb";
import MySqlIcon from "./icons/mysql";
import MongoIcon from "./icons/mongo";
import AWSIcon from "./icons/aws";
import GoogleCloudIcon from "./icons/google-cloud";
import DockerIcon from "./icons/docker";
import NginxIcon from "./icons/nginx";
import GitIcon from "./icons/git";
import ViteIcon from "./icons/vite";
import { motion, useInView } from "motion/react";
import { useMemo, useRef } from "react";

export default function Skills() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-250px",
  });

  const skills = [
    { name: "React", icon: ReactIcon },
    { name: "Next.js", icon: NextIcon },
    { name: "Vite", icon: ViteIcon },
    { name: "Redux", icon: ReduxIcon },
    { name: "TypeScript", icon: TypeScriptIcon },
    { name: "JavaScript", icon: JavaScriptIcon },
    { name: "Node.js", icon: NodeIcon },
    { name: "NestJS", icon: NestIcon },
    { name: "Express.js", icon: ExpressIcon },
    { name: "Fazt API", icon: FaztApi },
    { name: "Linux", icon: LinuxIcon },
    { name: "MariaDB", icon: MariadbIcon },
    { name: "MySQL", icon: MySqlIcon },
    { name: "Mongo", icon: MongoIcon },
    { name: "AWS", icon: AWSIcon },
    {
      name: "Google Cloud",
      icon: GoogleCloudIcon,
    },
    { name: "Docker", icon: DockerIcon },
    { name: "NGINX", icon: NginxIcon },
    { name: "Git", icon: GitIcon },
  ];

  // Generar posiciones aleatorias una sola vez
  const skillsWithPositions = useMemo(() => {
    return skills.map((skill, index) => ({
      ...skill,
      // Rotación aleatoria entre -15 y 15 grados
      rotation: Math.random() * 30 - 15,
      // Offset aleatorio para crear efecto de apilado
      x: Math.random() * 20 - 10,
      y: Math.random() * 20 - 10,
      // Z-index para simular apilado
      zIndex: index + Math.floor(Math.random() * 5),
    }));
  }, []);

  return (
    <div className="md:container md:px-10 mx-auto my-20" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="font-retro text-4xl md:text-6xl ml-8 mb-5"
      >
        My Skills
      </motion.h2>
      <div className="relative flex flex-wrap justify-center">
        {skillsWithPositions.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{
              opacity: 0,
              scale: 0.8,
              rotateZ: skill.rotation + 20,
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    scale: 1,
                    rotateZ: skill.rotation,
                  }
                : {}
            }
            transition={{
              delay: isInView ? index * 0.1 : 0,
              duration: 0.5,
            }}
            className="relative border rounded-lg p-6 flex items-center justify-center flex-col shadow-lg hover:shadow-2xl transition-shadow duration-300 dark:bg-zinc-900 bg-white"
            style={{
              transform: `translate(${skill.x}px, ${skill.y}px) rotate(${skill.rotation}deg)`,
              zIndex: skill.zIndex,
              width: "120px",
              height: "120px",
            }}
          >
            <skill.icon className="w-8 h-8 md:w-12 md:h-12" />
            <p className="text-center mt-2 text-xs md:text-sm font-medium">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
