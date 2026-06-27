import React from 'react';
import { motion } from 'framer-motion';

export default function GlowBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-bg-dark pointer-events-none">
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:32px_32px] opacity-70" />
      
      {/* Glow Blob 1 */}
      <motion.div
        className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-accent-primary opacity-15 blur-[120px]"
        animate={{
          x: [0, 50, -20, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.1, 0.9, 1]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Glow Blob 2 */}
      <motion.div
        className="absolute top-[40%] -right-[10%] w-[45vw] h-[45vw] rounded-full bg-accent-tertiary opacity-10 blur-[130px]"
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 50, -30, 0],
          scale: [1, 0.9, 1.1, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Glow Blob 3 */}
      <motion.div
        className="absolute -bottom-[10%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-indigo-900 opacity-20 blur-[140px]"
        animate={{
          x: [0, 30, -30, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.05, 0.95, 1]
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}
