import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
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
import DebianIcon from "./icons/debian";
import ViteIcon from "./icons/vite";

export default function Skills() {
  const mainStack = [
    { name: "React", icon: ReactIcon },
    { name: "Next.js", icon: NextIcon },
    { name: "NestJS", icon: NestIcon },
    { name: "Debian Linux", icon: DebianIcon },
  ];

  const frontendSkills = [
    { name: "React", icon: ReactIcon },
    { name: "Next.js", icon: NextIcon },
    { name: "Vite", icon: ViteIcon },
    { name: "Redux", icon: ReduxIcon },
    { name: "TypeScript", icon: TypeScriptIcon },
    { name: "JavaScript", icon: JavaScriptIcon },
  ];

  const backendSkills = [
    { name: "Node.js", icon: NodeIcon },
    { name: "NestJS", icon: NestIcon },
    { name: "Express.js", icon: ExpressIcon },
    { name: "Fazt API", icon: FaztApi },
    { name: "Linux", icon: LinuxIcon },
  ];

  const databaseSkills = [
    { name: "MariaDB", icon: MariadbIcon },
    { name: "MySQL", icon: MySqlIcon },
    { name: "Mongo", icon: MongoIcon },
    // Add more database skills here
  ];

  const cloudSkills = [
    { name: "AWS", icon: AWSIcon },
    {
      name: "Google Cloud",
      icon: GoogleCloudIcon,
    },
    { name: "Docker", icon: DockerIcon },
    { name: "NGINX", icon: NginxIcon },
    { name: "Git", icon: GitIcon },
  ];

  return (
    <div className="container px-10 mx-auto my-20">
      <Carousel
        opts={{
          loop: true,
          active: true,
        }}
      >
        <CarouselContent>
          <CarouselItem>
            <div className="flex gap-8 items-center justify-center p-4">
              <h3 className="font-retro text-6xl">Main Stack</h3>
              {mainStack.map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 mb-6"
                  >
                    <IconComponent className="size-20 mb-4" />
                    <span className="text-lg font-medium">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="flex gap-8 items-center justify-center p-4">
              <h3 className="font-retro text-6xl">FrontEnd</h3>
              {frontendSkills.map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 mb-6"
                  >
                    <IconComponent className="size-20 mb-4" />
                    <span className="text-lg font-medium">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex gap-8 items-center justify-center p-4">
              <h3 className="font-retro text-6xl">BackEnd</h3>
              {backendSkills.map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 mb-6"
                  >
                    <IconComponent className="size-20 mb-4" />
                    <span className="text-lg font-medium">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex gap-8 items-center justify-center p-4">
              <h3 className="font-retro text-6xl">Databases</h3>
              {databaseSkills.map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 mb-6"
                  >
                    <IconComponent className="size-20 mb-4" />
                    <span className="text-lg font-medium">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex gap-8 items-center justify-center p-4">
              <h3 className="font-retro text-5xl">Cloud & Dev Ops</h3>
              {cloudSkills.map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 mb-6"
                  >
                    <IconComponent className="size-20 mb-4" />
                    <span className="text-lg font-medium">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
