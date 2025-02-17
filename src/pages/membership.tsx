import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const MembershipPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });


  const navigate = useNavigate()
  const memberships = [
    {
      title: "FULL TIME MEMBERSHIP",
      price: "$47.50/WEEK",
      desc: "Unlimited entry to all 37 group fitness classes including Yoga",
      highlight: "Best Value",
      features: [
        "37 group fitness classes",
        "Includes all yoga sessions",
        "No lock-in contracts",
        "Blitz's price promise: Never over $50!",
        "24/7 access to facilities"
      ]
    },
    {
      title: "OFF PEAK MEMBERSHIP",
      price: "$35/WEEK",
      desc: "Access to 9:15AM & 12:15PM classes Mon-Fri + Weekends/Public Holidays",
      features: [
        "Morning & lunchtime classes",
        "Includes yoga classes",
        "Weekend access",
        "Public holiday classes",
        "Perfect for flexible schedules"
      ]
    },
    {
      title: "10 CLASS PACK",
      price: "$175",
      desc: "Perfect for those who can't commit to weekly classes",
      features: [
        "10 class credits",
        "Valid for 3 months",
        "Use for any class type",
        "Great for busy schedules",
        "Pause option available"
      ]
    },
    {
      title: "7 DAY TRIAL",
      price: "FREE",
      desc: "Experience everything we offer for 7 days",
      features: [
        "Unlimited classes",
        "All facilities access",
        "No commitment",
        "One per customer",
        "Cancel anytime"
      ]
    },
    {
      title: "ONE OFF CLASS",
      price: "$20",
      desc: "Try a single session with no strings attached",
      features: [
        "Single class access",
        "Valid for 1 week",
        "Any class type",
        "Upgrade option available",
        "Perfect for beginners"
      ]
    },    {
        title: "5 CLASS YOGA PACK",
        price: "$60",
        desc: "Yoga-only concession pack for dedicated practitioners",
        features: [
          "5 yoga class credits",
          "Valid for 2 months",
          "All yoga styles included",
          "Perfect for yoga enthusiasts",
          "Concession pricing"
        ]
      },
      {
        title: "5 CLASS PACK",
        price: "$100",
        desc: "Flexible pack for any class type",
        features: [
          "5 class credits",
          "Valid for 2 months",
          "Use for any class type",
          "Great for casual attendees",
          "Upgrade option available"
        ]
      },
  ];

  // Thin line animation variants


  // Updated card animation variants
  const cardVariant = {
    initial: { opacity: 0, y: 50 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.5
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  // Existing text animation variants
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

  const text: string = "JOIN OUR AWESOME BLITZ COMMUNITY - No Term Contracts!";

  return (
    <div className="min-h-screen pt-14 p-8">
      {/* Header Section */}

      <div className="py-20" >

                     
                       <div ref={ref} className="lg:py-5   relative">
                         {/* Thin line animation */}
                 
                 
                         
                         <div className="text-center text-sm lg:text-base">Find Your Perfect Fit</div>
                 
                         <motion.div
                           variants={containerVariant}
                           initial="initial"
                           animate={isInView ? "animate" : "initial"}
                           className="z-10 lg:text-6xl text-3xl md:text-5xl text-center font-oswald font-semibold flex flex-col items-center mt-4 lg:mt-0"
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
                             
                             <motion.div
                               initial={{ scaleX: 0 }}
                               animate={isInView ? { scaleX: 1 } : {}}
                               transition={{ duration: 1.7, ease: "easeOut" }}
                               className="absolute left-1/2 bottom-0 h-[2px] bg-black origin-center transform -translate-x-1/2 w-[100%] lg:w-[80%]"
                             />

                            
                              
                             
                           </motion.div>
                           
                         </motion.div>
                       </div>

      </div>



      {/* Membership Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {memberships.map((membership, index) => (
          <motion.div
            key={index}
            variants={cardVariant}
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            viewport={{ once: true, margin: "-100px" }}
            className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200"
          >
            {/* Highlight Badge */}
            {membership.highlight && (
              <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                {membership.highlight}
              </div>
            )}

            {/* Card Content */}
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                {membership.title}
              </h3>
              
              {/* Price */}
              <div className="mb-6">
                <div className="font-oswald text-4xl font-bold text-yellow-500 mb-2">
                  {membership.price}
                </div>
                <p className="text-gray-600 text-sm">
                  {membership.desc}
                </p>
              </div>

              {/* Features List */}
              <div className="mb-8">
                {membership.features.map((feature, i) => (
                  <div key={i} className="flex items-start mb-3">
                    <svg className="w-4 h-4 mr-2 text-yellow-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-yellow-500 text-white py-3 px-6 rounded-lg font-bold text-lg hover:bg-yellow-600 transition-colors"
              >
                Join Now
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Info Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-20 max-w-2xl mx-auto"
      >
        <h2 className="text-2xl font-bold mb-4">Need More Flexibility?</h2>
        <p className="text-gray-600 mb-6">
          Ask about our <strong>Yoga Concession Packs</strong> or{' '}
          <strong>Strength-Only Memberships</strong>
        </p>
        <div
          onClick={() => {navigate('/contact')}}
          className="inline-flex items-center cursor-pointer text-yellow-500 font-bold hover:text-yellow-600 transition-colors"
        >
          Contact our team
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

export default MembershipPage;