import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle } from 'lucide-react';

export const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div id="booking-form" className="glass-card p-8 md:p-12 max-w-2xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-serif mb-4">Book a Consultation</h2>
        <p className="text-muted">Take the first step towards your perfect smile.</p>
      </div>

      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <div className="w-20 h-20 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-forest" size={40} />
          </div>
          <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
          <p className="text-muted">Your request has been received. We'll contact you shortly.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-ink">Full Name</label>
              <input
                required
                type="text"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-forest transition-colors text-ink"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-ink">Phone Number</label>
              <input
                required
                type="tel"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-forest transition-colors text-ink"
                placeholder="+91 00000 00000"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-ink">Service Interested In</label>
            <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-forest transition-colors appearance-none text-ink">
              <option>General Checkup</option>
              <option>Cosmetic Dentistry</option>
              <option>Orthodontics</option>
              <option>Dental Implants</option>
              <option>Root Canal</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-ink">Message (Optional)</label>
            <textarea
              rows={4}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-forest transition-colors resize-none text-ink"
              placeholder="Tell us about your dental concerns..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-forest hover:bg-forest-light text-white font-bold py-4 rounded-xl flex items-center justify-center space-x-2 transition-all transform hover:scale-[1.02] active:scale-95"
          >
            <span>Confirm Booking</span>
            <Send size={18} />
          </button>
        </form>
      )}
    </div>
  );
};
