import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

export default function Stats() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-250px",
  });

  const stats = [
    { value: "3+", label: "Years of experience" },
    { value: "5", label: "Apps led" },
    { value: "20+", label: "Developers mentored" },
    { value: "100k+", label: "Surveys processed" },
  ];

  return (
    <section ref={ref} className="flex items-center justify-center px-6 py-24">
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center max-w-4xl"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {stats.map((item, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-1 border rounded-lg p-6 flex items-center justify-center flex-col hover:scale-105 transition-transform"
          >
            <h3 className="text-4xl font-bold">{item.value}</h3>
            <p className="text-sm md:text-base opacity-80">{item.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
