import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import image from "@/assets/me.jpeg";
import { Button } from "./ui/button";

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["Miguel", "Developer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-4 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 items-center min-h-screen">
        {/* Columna Izquierda - Texto */}
        <div className="flex flex-col justify-center p-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
            }}
            className="font-retro text-6xl md:text-7xl"
          >
            <span>Hi! I'm </span> <br />
            <AnimatePresence mode="wait">
              <motion.span
                key={texts[textIndex]}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{
                  duration: 0.7,
                  ease: "easeInOut",
                }}
                className="inline-block"
              >
                {texts[textIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
              delay: 0.3,
            }}
            className="mt-10 text-lg"
          >
            I'm a passionate developer with experience in building web
            applications.
          </motion.p>
          <div className="mt-10">
            <Button variant="default" size="lg">
              Got an idea? Let's talk.
            </Button>
          </div>
        </div>

        {/* Columna Derecha - Imagen */}
        <div className="flex justify-center items-center md:p-4 relative">
          {/* Líneas decorativas centradas con desvanecido */}
          <motion.span
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 540 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: 1.2,
            }}
            className="h-25 absolute rotate-12 top-1/2 left-1/2 -translate-x-1/2 translate-y-8 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          ></motion.span>
          <motion.span
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 600 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: 0.7,
            }}
            className=" h-25 absolute rotate-12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-30 bg-gradient-to-r from-transparent via-blue-600 to-transparent"
          ></motion.span>

          {/* Imagen */}
          <motion.img
            src={image}
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="relative w-74 h-125 rounded-full overflow-hidden bg-zinc-600 shadow-2xl object-cover hover:scale-105 hover:-translate-y-2 transition-transform duration-500 ease-out ring-8 ring-white/10"
          ></motion.img>
        </div>
      </div>
    </div>
  );
}
