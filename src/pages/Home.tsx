import React from 'react';
import { motion } from 'motion/react';
import { ScrollSequence } from '@/src/components/ScrollSequence';
import { ContactForm } from '@/src/components/ContactForm';
import { SERVICES, REVIEWS, CLINIC_INFO } from '@/src/constants';
import { ArrowRight, Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home = () => {
  const scrollToForm = () => {
    document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {/* Hero Section - Matching khakhariademo.lovable.app */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-muted uppercase tracking-[0.2em] text-sm font-bold mb-6 block">
                TRUSTED BY 1500+ PATIENTS IN RAIPUR
              </span>
              <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight text-ink">
                Creating Brighter Smiles for a Better Tomorrow
              </h1>
              <p className="text-lg md:text-xl text-muted mb-10 max-w-xl leading-relaxed">
                Experience exceptional dental care for a healthier, brighter smile you'll love to show off!
              </p>
              <div className="flex flex-col gap-4 max-w-md">
                <button 
                  onClick={scrollToForm}
                  className="btn-primary"
                >
                  Book Consultation
                </button>
                <a 
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="btn-secondary"
                >
                  Call: {CLINIC_INFO.phone}
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/dental-clinic-interior/1200/800" 
                  alt="Modern Dental Clinic" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-forest/10 rounded-full flex items-center justify-center text-forest">
                    <Star size={24} fill="currentColor" />
                  </div>
                  <div>
                    <div className="font-bold text-ink">4.9/5 Rating</div>
                    <div className="text-xs text-muted">Google Business Profile</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-32 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-forest uppercase tracking-[0.3em] text-sm font-bold mb-4 block"
              >
                Our Expertise
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-serif text-ink"
              >
                Comprehensive Dental Solutions
              </motion.h2>
            </div>
            <Link to="/services" className="text-forest font-bold flex items-center hover:underline decoration-2 underline-offset-8">
              View All Services <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card p-10 group cursor-pointer hover:shadow-xl transition-all duration-500"
              >
                <div className="w-16 h-16 bg-forest/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-forest group-hover:text-white transition-all duration-500">
                  <Star size={32} />
                </div>
                <h3 className="text-2xl font-serif mb-4 text-ink">{service.title}</h3>
                <p className="text-muted leading-relaxed mb-8">
                  {service.description}
                </p>
                <Link to="/services" className="text-forest font-bold flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ArrowRight className="ml-2" size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif mb-6 text-ink">What Our Patients Say</h2>
            <div className="flex items-center justify-center space-x-1 text-forest">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              <span className="ml-4 text-muted">4.9/5 based on 200+ reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 relative border border-gray-100"
              >
                <Quote className="absolute top-8 right-8 text-forest/10" size={40} />
                <div className="flex space-x-1 text-forest mb-6">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-ink/80 italic mb-8 leading-relaxed">
                  "{review.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center text-forest font-bold mr-4">
                    {review.author[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-ink">{review.author}</h4>
                    <span className="text-xs text-muted">{review.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-32 px-4 relative overflow-hidden bg-gray-50">
        <ContactForm />
      </section>

      {/* Map Section */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-[2.5rem] overflow-hidden h-[500px] relative shadow-lg border border-gray-100">
            <iframe
              src={CLINIC_INFO.googleMapsUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
            <div className="absolute bottom-8 left-8 right-8 md:right-auto md:w-96 bg-white/90 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-xl font-serif mb-4 text-ink">Visit Us</h3>
              <p className="text-muted text-sm mb-6 leading-relaxed">
                {CLINIC_INFO.address}
              </p>
              <a 
                href="https://goo.gl/maps/..." 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-forest font-bold flex items-center hover:underline"
              >
                Get Directions <ArrowRight className="ml-2" size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
