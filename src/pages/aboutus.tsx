import { motion, useInView } from 'framer-motion';
import {  useRef } from 'react';
import gary from '../assets/garythree.jpg';
import manager from '../assets/manager.jpg';
import biy from '../assets/biy.jpg';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const garyRef = useRef<HTMLDivElement>(null);
  const biyRef = useRef<HTMLDivElement>(null);
  const managerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate()



  const isSectionInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });
  const isGaryInView = useInView(garyRef, { once: true, margin: "-100px 0px" });
  const isBiyInView = useInView(biyRef, { once: true, margin: "-100px 0px" });
  const isManagerInView = useInView(managerRef, { once: true, margin: "-100px 0px" });
  const isCardInView = useInView(cardRef, { once: true, margin: "-100px 0px" });
  const isBottomInView = useInView(bottomRef, { once: true, margin: "-100px 0px" });

  const imageVariants = {
    hidden: { 
      scale: 1.6,
      opacity: 0,
    },
    visible: { 
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.33, 1, 0.68, 1], 
        scale: {
          duration: 1.5,
          ease: [0.34, 1.56, 0.64, 1] 
        }
      }
    }
  };



  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <div ref={sectionRef} className="min-h-screen  p-8 pt-28">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header Section */}
        <div className="relative py-8">
          <div className="flex items-center justify-center w-full gap-4">
            <motion.div
              className="h-0.5 bg-black"
              initial="hidden"
              animate={isSectionInView ? "visible" : "hidden"}
              variants={lineVariants}
            />
            <h1 className="text-5xl font-Bebas text-black px-4 tracking-wider whitespace-nowrap">
              ABOUT US
            </h1>
            <motion.div
              className="h-0.5 bg-black"
              initial="hidden"
              animate={isSectionInView ? "visible" : "hidden"}
              variants={lineVariants}
            />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mt-6 text-lg font-medium max-w-2xl mx-auto font-roboto text-black"
          >
            Blitz is a family owned and operated business specialising in group fitness classes. Our mission is to provide motivating and energising classes for people to move their bodies.
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <div ref={garyRef} className="relative group">

            <div className="overflow-hidden rounded-lg">
                <motion.img
                  src={gary}
                  alt="Gary Hancock"
                  className="w-full h-96 object-cover shadow-xl"
                  initial="hidden"
                  animate={isGaryInView ? "visible" : "hidden"}
                  variants={imageVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>

            </div>
            <div ref={cardRef} className="bg-black p-8 rounded-lg shadow-xl transform hover:scale-[1.02] transition-all duration-300">
              <h2 className="text-3xl font-bold mb-4 text-white">Meet Gary Hancock</h2>
              <motion.div
                className="h-0.5 bg-yellow-400"
                initial="hidden"
                animate={isCardInView ? "visible" : "hidden"}
                variants={lineVariants}
              />
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isCardInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-gray-200 leading-relaxed mt-6"
              >
                The owner of Blitz is Gary Hancock and he is well embedded in the Halswell community - He even literally lives over the back fence of the gym! Gary is a father of two, one attending Hillmorton High and the other at Halswell Primary School.
              </motion.p>
            </div>
          </div>

          {/* Middle Column */}
          <div className="space-y-8 lg:mt-16">
            <div ref={biyRef} className="relative">
              <div className="overflow-hidden rounded-lg">
                <motion.img
                  src={biy}
                  alt="Training Session"
                  className="w-full h-64 object-cover shadow-xl"
                  initial="hidden"
                  animate={isBiyInView ? "visible" : "hidden"}
                  variants={imageVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
            </div>
            <div className="bg-black p-8 rounded-lg shadow-xl text-white">
              <p className="text-xl italic text-center font-medium">
                "The only difference between ordinary and extraordinary is that little bit extra"
              </p>
              <motion.div
                className="h-0.5 bg-yellow-400 mx-auto mt-4"
                initial="hidden"
                animate={isBiyInView ? "visible" : "hidden"}
                variants={lineVariants}
              />
            </div>
            <div className="bg-black p-8 rounded-lg shadow-xl transform hover:scale-[1.02] transition-all duration-300">
              <h2 className="text-3xl font-bold mb-4 text-white">Our Vision</h2>
              <motion.div
                className="h-0.5 bg-yellow-400"
                initial="hidden"
                animate={isCardInView ? "visible" : "hidden"}
                variants={lineVariants}
              />
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isCardInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-gray-200 leading-relaxed mt-6"
              >
                Our vision is to provide a fun, friendly, communal group fitness studio in Halswell. This is to provide the community a non judgmental supportive environment to fulfill your goals, both mental and physical.
              </motion.p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div ref={managerRef} className="relative group">
              <div className="overflow-hidden rounded-lg">
                <motion.img
                  src={manager}
                  alt="Sam"
                  className="w-full h-96 object-cover shadow-xl"
                  initial="hidden"
                  animate={isManagerInView ? "visible" : "hidden"}
                  variants={imageVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
            </div>
            <div className="bg-black p-8 rounded-lg shadow-xl transform hover:scale-[1.02] transition-all duration-300">
              <h2 className="text-3xl font-bold mb-4 text-white">Meet Sam</h2>
              <motion.div
                className="h-0.5 bg-yellow-400"
                initial="hidden"
                animate={isCardInView ? "visible" : "hidden"}
                variants={lineVariants}
              />
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isCardInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-gray-200 leading-relaxed mt-6"
              >
                Sam is the manager of Blitz and has been with the gym since it opened two years ago. Sam has become a very experienced trainer and works with a large variety of athletes - however he is very adept at working with people from all walks of life.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div ref={bottomRef} className="bg-black text-white p-8 rounded-lg shadow-xl">
         
          <div className="max-w-3xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isBottomInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-lg font-medium mb-4"
            >
              Blitz Fitness believes in I.C.E Inspiring through actions and behaviors. Bringing the community together to sweat, connect, and improve physical well-being.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isBottomInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-xl font-bold"
            >
              Come in and join our sweaty community.
            </motion.p>
            <motion.div
              className="h-0.5 bg-yellow-400 mx-auto my-6"
              initial="hidden"
              animate={isBottomInView ? "visible" : "hidden"}
              variants={lineVariants}
            />
            <motion.button
            onClick={() => navigate('/contact')}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isBottomInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-yellow-400 text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-400/20"
            >
              GET IN TOUCH
            </motion.button>
          </div>
        </div>

        {/* Bottom Decorative Line */}
        <div className="flex justify-center">
          <motion.div
            className="h-0.5 bg-black"
            initial="hidden"
            animate={isSectionInView ? "visible" : "hidden"}
            variants={lineVariants}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;