import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import waitingArea from "@/assets/gallery/waiting-area.jpg";
import clinicEntrance from "@/assets/gallery/clinic-entrance.jpg";
import dentalTeam from "@/assets/gallery/dental-team.jpg";

const milestones = [
  { year: "2023", text: "Founded in Port Harcourt with a mission to modernize dental care" },
  { year: "2024", text: "Expanded to Aba & Owerri, serving thousands of patients" },
  { year: "Now", text: "3 branches, 20+ services, and a growing family of happy patients" },
];

const AboutSection = () => {
  return (
    <section className="py-24 bg-card overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image composition */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="rounded-2xl overflow-hidden h-[220px]"
                >
                  <img src={waitingArea} alt="Comfortable waiting area" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="rounded-2xl overflow-hidden h-[180px]"
                >
                  <img src={clinicEntrance} alt="Clinic entrance" className="w-full h-full object-cover" />
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="rounded-2xl overflow-hidden h-full mt-8"
              >
                <img src={dentalTeam} alt="Our dental team" className="w-full h-full object-cover" />
              </motion.div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary rounded-2xl px-6 py-4 text-primary-foreground text-center shadow-elevated"
            >
              <div className="text-2xl font-display font-bold">5,000+</div>
              <div className="text-xs font-body opacity-90">Smiles Transformed</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-body font-semibold text-accent uppercase tracking-widest">Our Story</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              Built on Trust,{" "}
              <span className="text-primary">Driven by Care</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Smile 365 Star Dental Clinic is a fast-growing dental care provider in Nigeria, known for delivering
              modern, technology-driven oral healthcare. We've built a strong reputation across Rivers, Abia,
              and Imo States for combining advanced dental technology with patient-focused care.
            </p>

            {/* Timeline milestones */}
            <div className="space-y-0 mb-8 relative">
              <div className="absolute left-[19px] top-3 bottom-3 w-[2px] bg-border" />
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-4 py-3 relative"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center flex-shrink-0 z-10 bg-card">
                    <span className="text-[10px] font-display font-bold text-primary">{m.year}</span>
                  </div>
                  <p className="font-body text-sm text-muted-foreground pt-2">{m.text}</p>
                </motion.div>
              ))}
            </div>

            <Button variant="outline" asChild className="rounded-full">
              <Link to="/about">
                Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
