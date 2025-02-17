import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import heroBackground from "../assets/herosectionimage.jpg";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = heroBackground;
    img.onload = () => setImageLoaded(true);
  }, []);

  const imageVariant = {
    initial: { scale: 1.5 },
    animate: {
      scale: 1,
      transition: {
        duration: 1.6,
        ease: "easeOut",
      },
    },
  };

  const containerVariant = {
    animate: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const letterVariant = {
    initial: { opacity: 0, y: 100, rotate: 45 },
    animate: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] },
    },
  };

  const text1 = "DWIGGS FITNESS";

  return (
    <div className="h-[65vh] md:h-screen w-full overflow-hidden">
      <motion.div
        className="w-full h-full relative flex justify-center items-center px-4"
        style={{ willChange: "transform" }}
      >
        {imageLoaded && (
          <motion.div
            variants={imageVariant}
            initial="initial"
            animate="animate"
            className="absolute inset-0"
          >
            <img
              src={heroBackground}
              alt="Hero Background"
              className="w-full h-full object-cover blur-xs"
            />
            <div className="absolute inset-0 backdrop-blur-[1px] bg-black/10"></div>
          </motion.div>
        )}

        <motion.div
          variants={containerVariant}
          initial="initial"
          animate="animate"
          className="z-10 text-6xl sm:text-7xl lg:text-9xl text-center font-Bebas text-white flex flex-col items-center"
        >
          <div className="overflow-hidden">
            <motion.div className="flex flex-wrap justify-center tracking-tighter lg:tracking-normal">
              {text1.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariant}
                  style={{ display: "inline-block" }}
                  className={`${char === " " ? "w-4 sm:w-8" : "mx-0.5 sm:mx-1"}`}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
