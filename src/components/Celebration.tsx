import React from "react";
import { motion } from "framer-motion";
import { PartyPopper } from "lucide-react";

import RomanticSlideshow from "./RomanticSlideshow";

const Celebration: React.FC = () => {
  // Add your images here
  const images = [
    "/path-to-your-image-1.jpg",
    "/path-to-your-image-2.jpg",
    "/path-to-your-image-3.jpg",
    "/path-to-your-image-4.jpg",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-romantic-pink flex flex-col items-center justify-start relative overflow-hidden py-12"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="mb-8"
      >
        <PartyPopper className="w-16 h-16 text-romantic-red" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-romantic-red mb-12 heading-text text-center"
      >
        Thank you for saying Yes! ❤️
      </motion.h1>

      <RomanticSlideshow images={images} />
    </motion.div>
  );
};

export default Celebration;
