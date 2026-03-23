import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import dentistAtWork from "@/assets/gallery/dentist-at-work.jpg";
import treatmentRoom from "@/assets/gallery/treatment-room.jpg";
import treatmentProcedure from "@/assets/gallery/treatment-procedure.jpg";

const services = [
  {
    title: "Orthodontics",
    desc: "Braces, clear aligners & bite correction for a perfect smile.",
    items: ["Metal & Ceramic Braces", "Clear Aligners", "Bite Correction"],
    image: dentistAtWork,
    color: "from-primary/80 to-primary-dark/90",
  },
  {
    title: "Cosmetic Dentistry",
    desc: "Teeth whitening, veneers & complete smile makeovers.",
    items: ["Teeth Whitening", "Dental Veneers", "Smile Makeover"],
    image: treatmentProcedure,
    color: "from-accent/80 to-accent/95",
  },
  {
    title: "Restorative Dentistry",
    desc: "Dental implants, crowns, bridges & root canals.",
    items: ["Dental Implants", "Crowns & Bridges", "Root Canal"],
    image: treatmentRoom,
    color: "from-primary-light/80 to-primary/90",
  },
];

const otherServices = [
  { title: "General Dentistry", items: ["Scaling & Polishing", "Dental Exams", "Cavity Treatment", "Extractions"] },
  { title: "Pediatric Dentistry", items: ["Kids Check-ups", "Fluoride", "Sealants", "Habit Correction"] },
  { title: "Emergency Care", items: ["Urgent Treatment", "Wisdom Tooth", "TMJ Treatment", "Night Guards"] },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-body font-semibold text-accent uppercase tracking-widest">What We Do</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Comprehensive <span className="text-primary">Dental Care</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            From routine check-ups to advanced cosmetic procedures — a full range of dental services for the whole family.
          </p>
        </motion.div>

        {/* Featured services — image cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="group relative rounded-2xl overflow-hidden h-[380px] cursor-pointer"
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-70 group-hover:opacity-80 transition-opacity`} />
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-primary-foreground">
                <h3 className="font-display text-2xl font-bold mb-2">{service.title}</h3>
                <p className="font-body text-sm opacity-90 mb-4">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.items.map((item) => (
                    <span key={item} className="text-[11px] font-body bg-primary-foreground/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other services — compact grid */}
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {otherServices.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border hover:shadow-elevated transition-shadow duration-300"
            >
              <h3 className="font-display text-lg font-bold text-foreground mb-4">{service.title}</h3>
              <div className="space-y-2">
                {service.items.map((item) => (
                  <div key={item} className="flex items-center gap-3 font-body text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild className="rounded-full">
            <Link to="/services">
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
