import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function AboutMe() {
  const ref = useRef(null);

  // Detecta cuando el elemento entra a la pantalla
  const isInView = useInView(ref, {
    once: true, // solo se anima la primera vez
    margin: "-250px", // aparece un poco antes de estar completamente visible
  });

  return (
    <section
      ref={ref}
      className="flex items-center justify-center mb-6 md:mb-0"
    >
      <div className="max-w-3xl space-y-10">
        {/* TÍTULO */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-retro text-4xl md:text-6xl"
        >
          About Me
        </motion.h2>

        {/* PÁRRAFO PRINCIPAL */}
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 1.5 }}
          className="text-lg leading-relaxed"
        >
          I'm a <strong className="text-blue-500">Full-stack developer</strong>{" "}
          specialized in the <strong>JavaScript/TypeScript</strong> ecosystem,
          with experience building{" "}
          <span className="font-semibold text-brand-500">
            scalable applications
          </span>
          , optimizing performance, and designing clean architectures for
          systems that handle high data volume. I have led academic and
          production projects, as well as development teams, delivering
          workshops and mentoring new developers.
        </motion.p>
      </div>
    </section>
  );
}
