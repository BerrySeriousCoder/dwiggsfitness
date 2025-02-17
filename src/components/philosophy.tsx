import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import imageOne from '../assets/dwiggs.jpg'
import imagetwo from '../assets/gymimage.jpg'
import biy from '../assets/darryle.jpeg'


export default function PhilosophySection() {
  // ... keep existing refs and animation logic the same ...
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const refText = useRef<HTMLDivElement>(null) ;
  const isInViewText = useInView(refText, { once: true, margin: "-100px 0px" });

  

  const containerVariant = {
    animate: {
      transition: {
        staggerChildren: 0.08, // Faster stagger for quicker appearance
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
        duration: 0.3, // Shorter duration for faster animation
        ease: [0.2, 0.65, 0.3, 0.9], // Smooth cubic bezier easing
      },
    },
  };

  const text: string = "WE DON'T JUST LIFT WEIGHTS,";
  const text2: string = "WE LIFT SPIRIT";

  return (
    <div
      ref={ref}
      className="bg-white lg:min-h-screen flex flex-col justify-center lg:pt-12 px-4 sm:px-6 lg:px-0"
    >
      <div>
        <div className="text-center text-sm lg:text-base">OUR PHILOSOPHY</div>

        <motion.div
          variants={containerVariant}
          initial="initial"
          animate={isInView ? "animate" : "initial"} 
          className="z-10 lg:text-7xl text-3xl md:text-5xl text-center font-oswald font-semibold flex flex-col items-center mt-4 lg:mt-0"
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

          <motion.div className="overflow-hidden flex flex-wrap justify-center">
            {text2.split(" ").map((word, index) => (
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
      </div>  

      <div className="flex flex-col lg:flex-row lg:mt-20 lg:gap-60 mt-8 gap-8">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-0">
          <div className="lg:m-2 w-full lg:w-xl overflow-hidden">
            <motion.img
              src={imageOne}
              alt="garryImage"
              className="w-full object-cover max-h-[400px] lg:max-h-none"
              initial={{ scale: 1.6 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 1.7, ease: [0.2, 0.65, 0.3, 0.9] }}
            />
          </div>
          
          <div className="lg:m-2 w-full lg:w-96 flex flex-col gap-4 lg:gap-3">
            <div className="overflow-hidden">
              <motion.img
                src={imagetwo}
                alt="garryImage"
                className="w-full object-cover max-h-[300px] lg:max-h-none"
                initial={{ scale: 1.6 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 1.7, ease: [0.2, 0.65, 0.3, 0.9] }}
              />
            </div>

            <motion.div 
              ref={refText}  
              initial={{opacity: 0, y: 10}} 
              animate={isInViewText ? { opacity: 1, y: 0 } : {}} 
              transition={{duration: 0.6, ease: "easeOut"}}  
              className="font-roboto text-sm lg:text-base px-2 lg:px-0"
            >
             Darryle plays a significant part in DWiggs Fitness, handling multiple roles within the company.
              His primary objective revolves around establishing a fitness and health enterprise that resonates with his core values,
               emphasizing community, personal accountability, and overall well-being.
            </motion.div>
          </div>
        </div>

        <div className="flex lg:ml-6 relative pb-8 lg:pb-0">
          <motion.div
            initial={{ height: "0%" }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 1.7, ease: "easeOut" }}
            className="absolute top-0 left-0 w-[1px] bg-black h-full hidden lg:block"
          />
          <div className="flex flex-col justify-between lg:pl-4">
            <div className="font-roboto text-sm lg:text-base space-y-4 px-2 lg:px-0">
              <p>
              Darryle is intuitive and caters well to his clients' needs each day by providing support, tough workouts, and effective training plans.
               He is committed to their success, offering flexibility with availability throughout the week. 
               Beyond DWiggs Fitness, Darryle enjoys sports and cherishes his roles as a husband, father, grandfather, and friend.
              </p>
              <p>
                Dwiggs fitness believes in YOU. <br />
                Come in and join our sweaty community.
              </p>
            </div>

      <div>

      
            <div className="text-3xl p-2 font-semibold" >
            Darryle Wiggins, PES | CES
            </div>
            
            <div className="overflow-hidden mt-4 lg:mt-0 lg:m-3">
              <motion.img
                src={biy}
                alt="garryImage"
                className="w-full object-cover max-h-[300px] lg:max-h-none"
                initial={{ scale: 1.6 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 1.7, ease: [0.2, 0.65, 0.3, 0.9] }}
              />
            </div>
      </div>
          </div>
        </div>
      </div>
    </div>
  );
}