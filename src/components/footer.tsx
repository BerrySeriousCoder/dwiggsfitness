import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {

    const navItems = [
        { title: 'Home', href: '/' },
        { title: 'About', href: '/about' },
        { title: 'Classes', href: '/classes' },
        { title: 'FAQ', href: '/faq' },
        { title: 'Contact', href: '/contact' }
      ];
      const navigate = useNavigate()
  return (
    <footer className="relative bg-black text-white py-16 overflow-hidden min-h-[60vh]">
      {/* Large Background Watermark */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden">
        <div 
          className="text-[12vw] font-bold text-gray-500/20 whitespace-nowrap tracking-tight transform -translate-y-8"
          style={{ fontSize: 'clamp(100px, 12vw, 300px)' }}
        >
          DWIGGS <br className='block lg:hidden' /> FITNESS
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Description */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-400">DWIGGS FITNESS</h2>
            <p className="text-white/80  ">
              Empowering your fitness journey with professional guidance and a supportive community.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-400">Quick Links</h3>
            <nav>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.title}>
                    <div onClick={() => navigate(item.href)} className="hover:text-gray-400 font-roboto cursor-pointer transition-colors">
                      {item.title}
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-400">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex font-roboto items-center gap-2">
                <MapPin className="flex-shrink-0" />
                <span>1612 York Avenue, 

                  New York, NY 10028</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="flex-shrink-0" />
                <span>(917) 250-9357</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="flex-shrink-0" />
                <a href="mailto:Darryle@dwiggsfitness.com" className="hover:text-gray-400  transition-colors">
                Darryle@dwiggsfitness.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a href="#instagram" className="hover:text-gray-400 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#facebook" className="hover:text-gray-400 transition-colors">
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-white/60">
            © {new Date().getFullYear()} DWiggs Fitness, LLC. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;