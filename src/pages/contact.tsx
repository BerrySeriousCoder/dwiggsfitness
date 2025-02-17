import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const ContactUs = () => {
  const lineControls = useAnimation();
  const cardLineControls = useAnimation();
  const formControls = useAnimation();

  useEffect(() => {
    const animate = async () => {
      await lineControls.start({ width: '100%' }, { duration: 0.7 });
      await cardLineControls.start({ width: '4rem' }, { duration: 0.5 });
      await formControls.start({ opacity: 1, y: 0 }, { duration: 0.5 });
    };

    animate();
  }, [lineControls, cardLineControls, formControls]);

  return (
    <div className="min-h-screen  p-8 pt-28">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header Section */}
        <div className="relative py-8">
  <div className="flex items-center justify-center w-full gap-4">
    <motion.div
      className="h-0.5 bg-black"
      initial={{ width: 0 }}
      animate={{ width: "100%" }} // Adjust width as needed
      transition={{ duration: 2, ease: "easeOut" }}
    />
    <h1 className="text-5xl font-Bebas text-black px-4 tracking-wider whitespace-nowrap">CONTACT US</h1>
    <motion.div
      className="h-0.5 bg-black"
      initial={{ width: 0 }}
      animate={{ width: "100%" }} // Adjust width as needed
      transition={{ duration: 2, ease: "easeOut" }}
    />
  </div>
</div>


        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={formControls}
              className="bg-black p-8 rounded-lg shadow-xl"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Get in Touch</h2>
              <motion.div
                className="h-0.5 bg-yellow-400 mb-6"
                initial={{ width: 0 }}
                animate={cardLineControls}
              />
              
              <div className="space-y-6 text-gray-200">
                <div>
                  <p className="text-xl font-semibold">📍 Location</p>
                  <p>345 Halswell Road</p>
                  <p>Halswell</p>
                  <p>Christchurch, New Zealand</p>
                </div>
                
                <div>
                  <p className="text-xl font-semibold">📧 Email</p>
                  <p>info@blitzfitness.co.nz</p>
                </div>
                
                <div>
                  <p className="text-xl font-semibold">📞 Phone</p>
                  <p>+640275475339</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={formControls}
              className="bg-black p-8 rounded-lg shadow-xl"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Operating Hours</h2>
              <motion.div
                className="h-0.5 bg-yellow-400 mb-6"
                initial={{ width: 0 }}
                animate={cardLineControls}
              />
              <div className="text-gray-200 space-y-2">
                <p className="text-lg">Mon-Fri: 5:30 AM - 8:30 PM</p>
                <p className="text-lg">Sat: 7:00 AM - 4:00 PM</p>
                <p className="text-lg">Sun: Closed</p>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            animate={formControls}
            className="bg-black p-8 rounded-lg shadow-xl space-y-6"
          >
            <div>
              <label className="block text-white mb-2 text-lg">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label className="block text-white mb-2 text-lg">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label className="block text-white mb-2 text-lg">Phone</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label className="block text-white mb-2 text-lg">Message</label>
              <textarea
                placeholder="Type your message here..."
                rows={4}
                className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-black py-3 px-6 rounded font-bold text-lg hover:bg-yellow-300 transition-colors duration-300"
            >
              SEND MESSAGE
            </button>
          </motion.form>
        </div>

        {/* Bottom Section */}
        <div className="bg-black text-white p-8 rounded-lg shadow-xl">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg font-medium mb-4">
              Have questions? We're here to help! Reach out and we'll get back to you within 24 hours.
            </p>
            <motion.div
              className="h-0.5 bg-yellow-400 mx-auto"
              initial={{ width: 0 }}
              animate={cardLineControls}
            />
          </div>
        </div>

        {/* Bottom Decorative Line */}
        <div className="flex justify-center">
          <motion.div
            className="h-0.5 bg-black"
            initial={{ width: 0 }}
            animate={lineControls}
            transition={{ type: 'tween', ease: 'easeOut' }}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;