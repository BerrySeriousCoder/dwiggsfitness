import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import privateTraining from '../assets/onetraining.png'
import kickBoxing from '../assets/kickboxing.png'
import strengthTraining from '../assets/strengthtraining.png'
import bootcamp from '../assets/bootcamp.png'
import trxSuspension from '../assets/trxsuspension.png'
import boxing from '../assets/boxing.png'
import enduranceTraining from '../assets/indurancetraining.png'
import muscleBuilding from '../assets/musclebuilding.png'
import toning from '../assets/toning.png'
interface ClassItem {
  number: string;
  title: string;
  description: string;
}

interface ClassSectionProps extends ClassItem {
    isEven: boolean;
    image: string;
  }
  

const FitnessClasses: React.FC = () => {
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
      const classes: (ClassItem & { image: string })[] = [
        {
          number: "01",
          title: "1-ON-1 PRIVATE TRAINING",
          description: "Personalized training sessions tailored to your specific fitness goals. Work closely with an expert trainer who will guide you through customized workouts and nutrition planning to ensure maximum progress.",
          image: privateTraining,
        },
        {
          number: "02",
          title: "KICKBOXING",
          description: "A high-energy workout that combines martial arts techniques with fast-paced cardio. Kickboxing classes help improve agility, strength, and endurance while providing an intense calorie burn.",
          image: kickBoxing,
        },
        {
          number: "03",
          title: "STRENGTH TRAINING",
          description: "Designed to build functional strength and lean muscle. Our structured and progressive strength training programs focus on lifting, mobility, and body control to develop overall fitness.",
          image: strengthTraining,
        },
        {
          number: "04",
          title: "BOOTCAMP",
          description: "A full-body workout designed to challenge and push you to your limits. Bootcamp classes include a mix of strength, endurance, and agility training in a high-intensity, team-focused environment.",
          image: bootcamp,
        },
        {
          number: "05",
          title: "TRX SUSPENSION",
          description: "Utilizing body weight and suspension training, TRX classes help build core stability, balance, and strength. A great workout for all fitness levels to develop functional strength and endurance.",
          image: trxSuspension,
        },
        {
          number: "06",
          title: "BOXING",
          description: "Learn fundamental boxing techniques while improving your speed, power, and endurance. Boxing training enhances cardiovascular health and is a great stress reliever.",
          image: boxing,
        },
        {
          number: "07",
          title: "ENDURANCE TRAINING",
          description: "Develop stamina and cardiovascular endurance with our endurance training program. These classes focus on high-rep, low-rest workouts to enhance overall fitness and performance.",
          image: enduranceTraining,
        },
        {
          number: "08",
          title: "MUSCLE BUILDING",
          description: "For those looking to increase muscle mass and strength. Our muscle-building program focuses on progressive overload, compound movements, and structured training to maximize gains.",
          image: muscleBuilding,
        },
        {
          number: "09",
          title: "TONING",
          description: "A combination of strength training and high-rep workouts to sculpt and define muscles. Toning classes focus on full-body exercises to enhance muscle definition and overall fitness.",
          image: toning,
        },
      ];
      

      const ref = useRef<HTMLDivElement>(null);
      const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

      const text: string = "FIND THE RIGHT ONE FOR YOU";
      const text2: string = "ALL CLASSES ARE 45 MINUTES";
      

  return (
    <div ref={ref} className="bg-white min-h-screen py-16">
              <div className='p-5' >
        <div className="text-center  ">OUR CLASSES</div>

        <motion.div
          variants={containerVariant}
          initial="initial"
          animate={isInView ? "animate" : "initial"} 
          className="z-10 lg:text-7xl text-3xl text-center font-oswald  font-semibold flex flex-col items-center"
        >
          {/* First Line */}
          <motion.div className="overflow-hidden flex">
            {text.split(" ").map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariant}
                className="inline-block lg:mx-2 mx-1"
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          {/* Second Line */}
          <motion.div className="overflow-hidden flex">
            {text2.split(" ").map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariant}
                className="inline-block lg:mx-2 mx-1"
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>  
      {classes.map((classItem, index) => (
        <ClassSection
          key={classItem.number}
          {...classItem}
          isEven={index % 2 === 0}
        />
      ))}
    </div>
  );
};

const ClassSection: React.FC<ClassSectionProps> = ({ number, title, description, isEven , image }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="relative mx-auto  px-4 mb-4">
      <motion.div
        initial={{ width: "0%" }}
        animate={isInView ? { width: "100%" } : {}}
        transition={{ duration: 1.7, ease: "easeOut" }}
        className="absolute top-0 left-0 h-[1px] bg-black"
      />
      
      <div className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? '' : 'md:flex-row-reverse'}`}>
        <div className="w-full md:w-1/2">
          <div className="overflow-hidden">
            <motion.img
              src={image}
              alt={`${title} class`}
              className="w-full  object-cover"
              initial={{ scale: 1.6 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 1.7, ease: [0.2, 0.65, 0.3, 0.9] }}
            />
          </div>
        </div>
        
        <div className="w-full md:w-1/2">
          <div className="relative pl-4">
            <motion.div
              initial={{ height: "0%" }}
              animate={isInView ? { height: "100%" } : {}}
              transition={{ duration: 1.7, ease: "easeOut" }}
              className="absolute top-0 left-0 w-[1px] bg-black h-full"
            />
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-sm font-medium mb-2"
            >
              {number}/
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-4xl font-bold mb-4"
            >
              {title}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.9 }}
              className="text-gray-700"
            >
              {description}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitnessClasses;