import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const navItems = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Classes', href: '/classes' },
    { title: 'FAQ', href: '/faq' },
    { title: 'Contact', href: '/contact' }
  ];

  const containerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.nav 
      className="fixed w-full z-50 bg-white"
      initial="hidden"
      animate={isLoaded ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            variants={itemVariants}
          >
            <motion.img 
              whileHover={{ scale: 1.0 }}
              className="h-24 w-auto cursor-pointer" 
              src={logo} 
              alt="logo" 
              onClick={() => navigate('/')} 
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <motion.div
                key={item.title}
                className="relative group"
                variants={itemVariants}
              >
                <motion.div
                  onClick={() => navigate(item.href)}
                  className="text-black text-3xl font-Bebas  cursor-pointer transition-all duration-300 group-hover:text-gray-400"
                  whileHover={{ y: -2 }}
                >
                  {item.title}
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Menu"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-sm w-full absolute top-full left-0 shadow-lg"
          >
            <div className="py-8 px-6 flex flex-col items-start space-y-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  onClick={() => { navigate(item.href); setIsOpen(false); }}
                  className="relative group"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-white text-2xl font-medium cursor-pointer group-hover:text-gray-400 transition-all duration-300">
                    {item.title}
                  </span>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;