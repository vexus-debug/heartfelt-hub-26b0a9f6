import { motion } from "framer-motion";
import { Smile, Sparkles, Wrench, Stethoscope, Baby, AlertCircle } from "lucide-react";

const services = [
  {
    icon: Smile,
    title: "Orthodontics",
    desc: "Braces, clear aligners, bite correction & teeth alignment for a perfect smile.",
    items: ["Metal & Ceramic Braces", "Clear Aligners", "Bite Correction", "Retainers"],
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    desc: "Teeth whitening, veneers, Hollywood Smile design & complete smile makeovers.",
    items: ["Teeth Whitening", "Dental Veneers", "Smile Makeover", "Gum Contouring"],
  },
  {
    icon: Wrench,
    title: "Restorative Dentistry",
    desc: "Dental implants, crowns, bridges, root canals & tooth reconstruction.",
    items: ["Dental Implants", "Crowns & Bridges", "Root Canal", "Dentures"],
  },
  {
    icon: Stethoscope,
    title: "General Dentistry",
    desc: "Scaling, polishing, check-ups, X-rays, fillings & gum disease treatment.",
    items: ["Teeth Cleaning", "Dental Exams", "Cavity Treatment", "Extractions"],
  },
  {
    icon: Baby,
    title: "Pediatric Dentistry",
    desc: "Gentle dental care for children including check-ups, sealants & fluoride.",
    items: ["Kids Check-ups", "Fluoride Treatments", "Dental Sealants", "Habit Correction"],
  },
  {
    icon: AlertCircle,
    title: "Emergency & Specialized",
    desc: "Emergency care, wisdom tooth removal, TMJ treatment & mouth guards.",
    items: ["Emergency Care", "Wisdom Tooth Removal", "TMJ Treatment", "Night Guards"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-gradient-mint">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-body font-semibold text-accent uppercase tracking-widest">Our Services</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Comprehensive <span className="text-primary">Dental Care</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            From routine check-ups to advanced cosmetic procedures, we provide a full range of dental services for the whole family.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-shadow duration-300 group"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">{service.title}</h3>
              <p className="font-body text-sm text-muted-foreground mb-4">{service.desc}</p>
              <div className="flex flex-wrap gap-2">
                {service.items.map((item) => (
                  <span key={item} className="text-xs font-body bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
