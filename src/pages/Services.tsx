import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '@/src/constants';
import { Star, CheckCircle2, ArrowRight } from 'lucide-react';

export const Services = () => {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-forest uppercase tracking-[0.3em] text-sm font-bold mb-4 block"
          >
            Our Expertise
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif mb-8 text-ink"
          >
            Dental <span className="text-forest italic">Excellence</span>
          </motion.h1>
          <p className="text-muted max-w-2xl mx-auto text-lg leading-relaxed">
            We offer a wide range of dental services tailored to your unique needs, using the latest technology and techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-20">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="flex-1 w-full">
                <div className="relative aspect-video rounded-[2rem] overflow-hidden group shadow-xl">
                  <img
                    src={`https://picsum.photos/seed/service-${service.id}/800/600`}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              
              <div className="flex-1 space-y-8">
                <div className="w-16 h-16 bg-forest/5 rounded-2xl flex items-center justify-center text-forest">
                  <Star size={32} />
                </div>
                <h2 className="text-4xl md:text-5xl font-serif text-ink">{service.title}</h2>
                <p className="text-muted text-lg leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-4">
                  {['Advanced Technology', 'Expert Care', 'Painless Procedures'].map((item) => (
                    <li key={item} className="flex items-center text-muted">
                      <CheckCircle2 className="text-forest mr-3" size={20} />
                      {item}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => window.location.href = '/#booking-form'}
                  className="bg-gray-50 hover:bg-forest hover:text-white border border-gray-200 px-8 py-4 rounded-full font-bold transition-all flex items-center group"
                >
                  Book This Service <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
