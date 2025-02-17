import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Define types for our FAQ items
interface FAQItem {
  question: string;
  answer: string;
}

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const navigate = useNavigate()
  const toggleAccordion = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question: "Who is personal training for?",
      answer: "Personal training services is for anyone looking to reach their optimal health and fitness goals."
    },
    {
      question: "Why should you hire a personal trainer?",
      answer: "Hiring DWiggs Fitness takes the thinking out of your fitness activities. You’re hiring a personal trainer to create tailored workouts and food planning services based on your needs and wants. Welcomely, our Upper East Side facility is accessible and easily located for personal training services for clients who reside in the Lenox Hill, Carnegie Hill, and Yorkville neighborhoods."
    },
    {
      question: "How many times per week should you meet with a personal trainer?",
      answer: "On average, most clients meet with their trainer one to three times per week. While personal training services are an investment, the fitness experience should not create a barrier or stress. Determine your budget to create accountability you desire and the freedom to reach your fitness goals with expert guidance."
    },
    {
      question: "Do I need my own equipment?",
      answer: "Our location is fully equipped with the equipment you need. Just bring your towel and water bottle."
    },
    {
      question: "What will be covered in my first workout?",
      answer: "Your first workout includes the following: Nutrition Assessment, Goal Setting, Fitness Assessment, and Body Assessment."
    },
    {
      question: "How quickly will I see results?",
      answer: "Results will be based on your diet and how many times per week you train."
    },
    {
      question: "Who do you train?",
      answer: "We train everyone! From teens, adults, prenatal & postnatal women, corporate clients, groups, and non-athletes."
    },
    {
      question: "How do I get started?",
      answer: "You can start by calling us at 917-250-9357 or emailing at darryle@dwiggsfitness.com."
    }
  ];
  

  return (
    <motion.div 
      className="max-w-4xl   mx-auto pt-36 px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header section */}
      <motion.div 
        className="text-center mb-12"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <motion.div 
          className="inline-block bg-gray-100 py-1 px-3 rounded-md mb-3"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-gray-600  text-sm font-medium">Dwiggs FAQ</span>
        </motion.div>
        
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          We're here to answer all<br />your questions.
        </h1>
        
        <p className="text-gray-600 max-w-2xl mx-auto">
          New to Dwiggs Fitness or looking to supercharge your current stack? We'll
          help you learn more about the platform and its features.
        </p>
      </motion.div>

      {/* Contact button */}
      <motion.div 
        className="text-center mb-12"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <motion.div 
          onClick={() => {navigate('/contact')}}
          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          Get in touch
          <motion.svg 
            className="w-5 h-5 ml-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            initial={{ x: 0 }}
            animate={{ x: [0, 5, 0] }}
            transition={{ 
              repeat: Infinity,
              repeatType: "mirror",
              duration: 1.5,
              ease: "easeInOut"
            }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </motion.svg>
        </motion.div>
      </motion.div>

      {/* FAQ accordion */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div 
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index + 0.6, duration: 0.4 }}
            whileHover={{ scale: 1.01 }}
          >
            <motion.button
              className="w-full flex justify-between items-center p-4 lg:p-6 text-left"
              onClick={() => toggleAccordion(index)}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5 text-gray-500" />
              </motion.div>
            </motion.button>
            
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="p-4 lg:p-6 pt-0 lg:pt-0 text-gray-600">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default FAQPage;