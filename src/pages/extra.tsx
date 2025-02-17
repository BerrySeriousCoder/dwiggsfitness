import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import personaltraining from "../assets/personaltraining.avif";
import sgtraining from "../assets/personaltrainingtwo.avif";
import { useNavigate } from "react-router-dom";

export default function Extra() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  
  const navigate = useNavigate()
  const containerVariant = {
    animate: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const wordVariant = {
    initial: {
      opacity: 0,
      y: 40,
      scale: 0.9,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const text: string = "PERSONAL TRAINING AND SMALL GROUP";

  return (
    <div className="py-20 pt-24 px-4">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center">
        <div ref={ref} className="lg:py-5 relative">
          {/* <p className="text-sm lg:text-base text-gray-500 tracking-wide">
            Find Your Perfect Fit
          </p> */}

          {/* Animated Heading */}
          <motion.div
            variants={containerVariant}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="lg:text-6xl text-3xl md:text-5xl font-oswald font-semibold mt-4 lg:mt-0"
          >
            <motion.div className="overflow-hidden flex flex-wrap justify-center">
              {text.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordVariant}
                  className="inline-block mx-1 lg:mx-2"
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Thin Line Animation */}
                            <motion.div
                               initial={{ scaleX: 0 }}
                               animate={isInView ? { scaleX: 1 } : {}}
                               transition={{ duration: 1.7, ease: "easeOut" }}
                               className="absolute left-1/2 bottom-0 h-[2px] bg-black origin-center transform -translate-x-1/2 w-[100%] "
                             />
        </div>
      </div>

      <div className="flex justify-center" >
      <motion.button
            initial={{ y: 10, boxShadow: "0px 6px 0px rgba(0, 0, 0, 0.2)" }}
            whileHover={{ y: 2, boxShadow: "0px 4px 0px rgba(0, 0, 0, 0.3)" }}
            whileTap={{ y: 4, boxShadow: "0px 2px 0px rgba(0, 0, 0, 0.5)" }}
            className="mt-6 px-6 py-2 bg-black text-white rounded-lg text-lg font-semibold tracking-wide"
          >
            Extra
          </motion.button>
      </div>

      {/* Training Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
        {/* Personal Training Section */}
        <div className="flex flex-col items-center text-center lg:text-left">
          <div
            className="overflow-hidden rounded-xl shadow-lg w-full max-w-[500px]"
          
          >
            <motion.img
              src={personaltraining}
              alt="Personal Training"
              initial={{ scale: 1.6 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 1.7, ease: [0.2, 0.65, 0.3, 0.9] }}
              className="w-full object-cover max-h-[400px] lg:max-h-none rounded-xl"
            />
          </div>
          <h3 className="mt-6 text-2xl font-semibold">PERSONAL TRAINING</h3>
          <p className="mt-2 text-gray-600 leading-relaxed max-w-[80%] mx-auto">
            Coming back from injury, new to the gym, or need extra focus on your
            goals? We provide quality personal training tailored to your needs.
            Limited availability—contact us today!
          </p>
        </div>

        {/* Small Group Training Section */}
        <div className="flex flex-col items-center text-center lg:text-left">
          <motion.div
            className="overflow-hidden rounded-xl shadow-lg w-full max-w-[500px]"
           
          >
            <motion.img
              src={sgtraining}
              alt="Small Group Training"
              initial={{ scale: 1.6 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 1.7, ease: [0.2, 0.65, 0.3, 0.9] }}
              className="w-full object-cover max-h-[400px] lg:max-h-none rounded-xl"
            />
          </motion.div>
          <h3 className="mt-6 text-2xl font-semibold">SMALL GROUP TRAINING</h3>
          <p className="mt-2 text-gray-600 leading-relaxed max-w-[80%] mx-auto">
            Have a sports team, small friend group, or corporate team looking
            for a fun and challenging workout? Contact us to create a
            specialized session tailored to your group.
          </p>
        </div>





        
      </div>

      {/* Call to Action Section */}
<div className="mt-20 w-full flex flex-col items-center justify-center text-center">
  {/* CTA Heading */}
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-xl">
    Ready to Take Your Fitness to the Next Level?
  </h2>

  {/* CTA Subtext */}
  <p className="mt-3 text-gray-600 max-w-2xl">
    Whether you're looking for personal training or small group sessions, 
    our expert trainers are here to help you achieve your goals. 
    Book a session today and start your transformation!
  </p>

  {/* CTA Button */}
  <motion.button
    onClick={() => {navigate('/contact')}}
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className="mt-6 px-8 py-3 text-lg font-semibold  
               bg-gradient-to-r from-yellow-300 to-yellow-600 rounded-full 
               shadow-lg transition-all hover:shadow-xl hover:brightness-110 
               active:top-1"
  >
    Get Started Today
  </motion.button>
</div>

    </div>
  );
}
