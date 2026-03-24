import React from 'react';
import { motion } from 'motion/react';
import { CLINIC_INFO } from '@/src/constants';
import { Award, Users, Heart, ShieldCheck } from 'lucide-react';

export const About = () => {
  const stats = [
    { label: 'Years Experience', value: '15+', icon: Award },
    { label: 'Happy Patients', value: '10k+', icon: Users },
    { label: 'Success Rate', value: '99%', icon: ShieldCheck },
    { label: 'Dental Experts', value: '5+', icon: Heart },
  ];

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-forest uppercase tracking-[0.3em] text-sm font-bold mb-4 block">Our Story</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight text-ink">
              A Tradition of <span className="text-forest italic">Excellence</span> in Raipur
            </h1>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Gayatri Dental Clinic has been serving the Raipur community for over a decade. Founded on the principles of integrity, compassion, and advanced clinical excellence, we have grown into one of the most trusted dental practices in Chhattisgarh.
            </p>
            <p className="text-muted leading-relaxed">
              Our mission is to provide personalized dental care that not only improves your oral health but also enhances your overall quality of life. We believe every patient deserves a smile they can be proud of.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src="https://picsum.photos/seed/clinic-about/800/800"
                alt="Gayatri Dental Clinic Interior"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
              <h3 className="text-2xl font-serif text-forest mb-2">Dr. Gayatri Sahni</h3>
              <p className="text-muted text-sm">Lead Dentist & Founder</p>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 text-center hover:shadow-lg transition-shadow"
            >
              <stat.icon className="mx-auto mb-4 text-forest" size={32} />
              <div className="text-4xl font-serif text-ink mb-2">{stat.value}</div>
              <div className="text-muted text-sm uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Values Section */}
        <div className="bg-gray-50 rounded-[3rem] p-12 md:p-20 border border-gray-100">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif mb-6 text-ink">Our Core Values</h2>
            <p className="text-muted max-w-2xl mx-auto">The pillars that define our practice and patient care.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Patient Centric', desc: 'Your comfort and needs are at the heart of everything we do.' },
              { title: 'Innovation', desc: 'We continuously invest in the latest dental technology and training.' },
              { title: 'Transparency', desc: 'Clear communication about treatments, costs, and expectations.' }
            ].map((value, i) => (
              <div key={i} className="space-y-4">
                <div className="text-forest font-serif text-5xl opacity-10">0{i + 1}</div>
                <h3 className="text-2xl font-serif text-ink">{value.title}</h3>
                <p className="text-muted leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
