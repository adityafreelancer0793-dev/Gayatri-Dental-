import React from 'react';
import { motion } from 'motion/react';
import { CLINIC_INFO } from '@/src/constants';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';
import { ContactForm } from '@/src/components/ContactForm';

export const Contact = () => {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-forest uppercase tracking-[0.3em] text-sm font-bold mb-4 block"
          >
            Get In Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif mb-8 text-ink"
          >
            Contact <span className="text-forest italic">Us</span>
          </motion.h1>
          <p className="text-muted max-w-2xl mx-auto text-lg leading-relaxed">
            Have questions or ready to book? We're here to help you achieve your best smile.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-card p-10 text-center space-y-6"
          >
            <div className="w-16 h-16 bg-forest/5 rounded-full flex items-center justify-center mx-auto text-forest">
              <Phone size={28} />
            </div>
            <h3 className="text-2xl font-serif text-ink">Call Us</h3>
            <p className="text-muted">Mon-Sat, 10am - 9pm</p>
            <a href={`tel:${CLINIC_INFO.phone}`} className="text-xl font-bold text-forest block hover:underline">
              {CLINIC_INFO.phone}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card p-10 text-center space-y-6"
          >
            <div className="w-16 h-16 bg-forest/5 rounded-full flex items-center justify-center mx-auto text-forest">
              <Mail size={28} />
            </div>
            <h3 className="text-2xl font-serif text-ink">Email Us</h3>
            <p className="text-muted">We'll reply within 24 hours</p>
            <a href={`mailto:${CLINIC_INFO.email}`} className="text-xl font-bold text-forest block hover:underline break-all">
              {CLINIC_INFO.email}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-10 text-center space-y-6"
          >
            <div className="w-16 h-16 bg-forest/5 rounded-full flex items-center justify-center mx-auto text-forest">
              <MapPin size={28} />
            </div>
            <h3 className="text-2xl font-serif text-ink">Visit Us</h3>
            <p className="text-muted leading-relaxed">
              {CLINIC_INFO.address}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-serif mb-8 text-ink">Working Hours</h2>
              <div className="space-y-4">
                {CLINIC_INFO.hours.map((h) => (
                  <div key={h.day} className="flex justify-between items-center py-4 border-b border-gray-100">
                    <span className="text-muted font-medium">{h.day}</span>
                    <span className="text-forest font-bold">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-8 bg-forest/5 border-forest/20">
              <div className="flex items-start space-x-4">
                <MessageSquare className="text-forest shrink-0" size={24} />
                <div>
                  <h4 className="font-bold mb-2 text-ink">Emergency Care</h4>
                  <p className="text-muted text-sm leading-relaxed">
                    If you're experiencing a dental emergency after hours, please call our emergency line at {CLINIC_INFO.phone}.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
};
