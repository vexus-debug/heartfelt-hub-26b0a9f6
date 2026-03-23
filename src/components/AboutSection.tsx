import { motion } from "framer-motion";
import { Shield, Heart, Sparkles, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import waitingArea from "@/assets/gallery/waiting-area.jpg";
import clinicEntrance from "@/assets/gallery/clinic-entrance.jpg";

const values = [
  { icon: Shield, title: "Advanced Technology", desc: "Digital scanners, 3D imaging & modern sterilization" },
  { icon: Heart, title: "Patient Comfort", desc: "Pain-minimizing techniques & gentle care" },
  { icon: Sparkles, title: "Expert Team", desc: "Internationally trained dentists & specialists" },
  { icon: Users, title: "Family Friendly", desc: "Care for all ages, from children to adults" },
];

const AboutSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <img src={waitingArea} alt="Smile 365 Star comfortable waiting area" className="rounded-2xl shadow-card w-full h-[400px] object-cover" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-6 rounded-xl overflow-hidden shadow-elevated border-4 border-card w-40 h-32 hidden md:block"
              >
                <img src={clinicEntrance} alt="Clinic entrance" className="w-full h-full object-cover" />
              </motion.div>
              <div className="absolute -bottom-6 -left-4 bg-primary rounded-2xl p-6 text-primary-foreground md:hidden">
                <div className="text-3xl font-display font-bold">2023</div>
                <div className="text-sm opacity-90">Founded</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-body font-semibold text-accent uppercase tracking-widest">About Us</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              Modern Dentistry, <span className="text-primary">Trusted Care</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Smile 365 Star Dental Clinic is a fast-growing dental care provider in Nigeria, known for delivering 
              modern, technology-driven oral healthcare. Founded in 2023, we've built a strong reputation across 
              Rivers, Abia, and Imo States for combining advanced dental technology with patient-focused care.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {values.map((v) => (
                <div key={v.title} className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <v.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-body font-semibold text-foreground text-sm">{v.title}</div>
                    <div className="text-xs text-muted-foreground mt-1">{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="outline" asChild>
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
