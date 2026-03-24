export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export const CLINIC_INFO = {
  name: "Gayatri Dental Clinic",
  phone: "+91 7714042434",
  email: "gayatridentalraipur@gmail.com",
  address: "House no 3, 1st floor, Dharam niwas, RMS Colony, Tagore Nagar, Raipur, Mathpurena, Chhattisgarh 492001",
  hours: [
    { day: "Monday - Saturday", time: "10:00 AM - 02:00 PM, 05:00 PM - 09:00 PM" },
    { day: "Sunday", time: "Closed" }
  ],
  googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.53483484242!2d81.6447!3d21.21!2m3!1f0!2f0!3f0!3m2!1i1024!2i748!2m3!1f0!2f0!3f0!3m2!1i1024!2i748!4f13.1!3m3!1m2!1s0x3a28dd3f3f3f3f3f%3A0x3a28dd3f3f3f3f3f!2sGayatri%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
};

export const SERVICES: Service[] = [
  {
    id: "1",
    title: "General Dentistry",
    description: "Comprehensive checkups, cleanings, and preventative care for all ages.",
    icon: "Stethoscope"
  },
  {
    id: "2",
    title: "Cosmetic Dentistry",
    description: "Teeth whitening, veneers, and smile makeovers to boost your confidence.",
    icon: "Sparkles"
  },
  {
    id: "3",
    title: "Orthodontics",
    description: "Braces and clear aligners to straighten your teeth and improve your bite.",
    icon: "Smile"
  },
  {
    id: "4",
    title: "Dental Implants",
    description: "Permanent solutions for missing teeth that look and feel natural.",
    icon: "Anchor"
  },
  {
    id: "5",
    title: "Root Canal Treatment",
    description: "Painless procedures to save damaged teeth and relieve pain.",
    icon: "Activity"
  },
  {
    id: "6",
    title: "Pediatric Dentistry",
    description: "Specialized dental care for children in a friendly environment.",
    icon: "Baby"
  }
];

export const REVIEWS: Review[] = [
  {
    id: "1",
    author: "Rahul Sharma",
    rating: 5,
    text: "Excellent service and very professional doctors. The clinic is clean and well-maintained.",
    date: "2 months ago"
  },
  {
    id: "2",
    author: "Priya Singh",
    rating: 5,
    text: "I had a great experience with my root canal treatment. Highly recommended!",
    date: "1 month ago"
  },
  {
    id: "3",
    author: "Amit Patel",
    rating: 4,
    text: "Good clinic with modern equipment. The staff is very helpful.",
    date: "3 weeks ago"
  }
];
