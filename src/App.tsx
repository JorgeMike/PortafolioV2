import React from "react";
import { motion } from "framer-motion";

export default function App() {
  const stats = [
    { number: "3+", label: "Years Experience" },
    { number: "5", label: "Technical Projects Led" },
    { number: "20+", label: "Developers Trained" },
    {
      number: "100K+",
      label: "Transactions/Semester",
    },
  ];

  return (
    <div className="container mx-auto text-white">
      <section className="mt-10">
        <motion.h1
          className="text-9xl font-bold font-mono text-blue-400"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi! I'm Miguel
        </motion.h1>

        <motion.h1
          className="text-5xl font-bold font-mono"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          I'm a Full Stack Developer
        </motion.h1>
        <motion.p
          className="text-xl text-gray-400 mt-6 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Specialized in JavaScript/TypeScript ecosystem, building scalable
          applications with clean architecture and high-performance systems
        </motion.p>
      </section>
      <section className="mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg border border-zinc-900 hover:border-blue-400 transition-colors duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={`text-4xl font-bold mb-2`}>{stat.number}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
