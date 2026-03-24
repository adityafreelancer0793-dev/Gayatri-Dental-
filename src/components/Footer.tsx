import React from 'react';
import { motion } from 'motion/react';
import { CLINIC_INFO, SERVICES } from '@/src/constants';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-forest">Gayatri Dental</h3>
            <p className="text-muted leading-relaxed">
              Providing world-class dental care with a gentle touch. Your smile is our priority.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-forest hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-forest hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-forest hover:text-white transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-ink">Quick Links</h4>
            <ul className="space-y-4 text-muted">
              <li><Link to="/" className="hover:text-forest transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-forest transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-forest transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-forest transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-ink">Our Services</h4>
            <ul className="space-y-4 text-muted">
              {SERVICES.slice(0, 4).map(service => (
                <li key={service.id}>
                  <Link to="/services" className="hover:text-forest transition-colors">{service.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-ink">Contact Info</h4>
            <ul className="space-y-4 text-muted">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-forest shrink-0" />
                <span className="text-sm">{CLINIC_INFO.address}</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-forest shrink-0" />
                <span className="text-sm">{CLINIC_INFO.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-forest shrink-0" />
                <span className="text-sm">{CLINIC_INFO.email}</span>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-3 text-forest shrink-0" />
                <div className="text-sm">
                  {CLINIC_INFO.hours.map(h => (
                    <div key={h.day}>{h.day}: {h.time}</div>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 text-center text-muted text-sm">
          <p>© {new Date().getFullYear()} Gayatri Dental Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
