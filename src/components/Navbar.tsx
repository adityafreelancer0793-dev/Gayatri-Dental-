import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { CLINIC_INFO } from '@/src/constants';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const scrollToForm = () => {
    if (location.pathname !== '/') {
      window.location.href = '/#booking-form';
    } else {
      const element = document.getElementById('booking-form');
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center group">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              className="text-xl sm:text-2xl font-serif font-bold text-ink tracking-tight"
            >
              Gayatri Dental
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm uppercase tracking-widest transition-colors hover:text-forest",
                  location.pathname === link.path ? "text-forest font-bold" : "text-muted"
                )}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={scrollToForm}
              className="bg-forest hover:bg-forest-light text-white px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95"
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-ink p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-white border-b border-gray-100"
      >
        <div className="px-4 pt-2 pb-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block text-lg font-medium",
                location.pathname === link.path ? "text-forest" : "text-ink"
              )}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={scrollToForm}
            className="w-full bg-forest text-white py-3 rounded-xl font-bold"
          >
            Book Consultation
          </button>
          <div className="pt-4 flex items-center text-muted text-sm">
            <Phone size={16} className="mr-2" />
            {CLINIC_INFO.phone}
          </div>
        </div>
      </motion.div>
    </nav>
  );
};
