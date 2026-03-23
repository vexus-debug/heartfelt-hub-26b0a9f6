import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import treatmentImg from "@/assets/gallery/treatment-procedure.jpg";
import receptionImg from "@/assets/gallery/reception-desk.jpg";
import treatmentRoomImg from "@/assets/gallery/treatment-room.jpg";
import dentistAtWork from "@/assets/gallery/dentist-at-work.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Subtle geometric background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/[0.03] via-transparent to-accent/[0.03]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-[120px]" />
        <div className="absolute top-20 left-10 w-[400px] h-[400px] rounded-full bg-accent/[0.05] blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Text content — 5 columns */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-body font-semibold text-primary tracking-wide uppercase">Now Open in 3 Locations</span>
            </motion.div>

            <h1 className="font-display text-4xl md:text-5xl xl:text-6xl font-bold text-foreground leading-[1.1] mb-6">
              Your Smile
              <br />
              Deserves{" "}
              <span className="relative">
                <span className="text-primary">Expert</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute -bottom-1 left-0 right-0 h-[3px] bg-accent origin-left rounded-full"
                />
              </span>
              <br />
              Care
              <span className="text-gradient-gold">.</span>
            </h1>

            <p className="text-base font-body text-muted-foreground max-w-md mb-8 leading-relaxed">
              Modern, technology-driven dental care across Rivers, Abia & Imo States.
              Experience gentle, expert dentistry designed around your comfort.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Button size="lg" asChild className="text-base px-8 rounded-full">
                <Link to="/contact">
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base px-8 rounded-full">
                <Link to="/services">Our Services</Link>
              </Button>
            </div>

            {/* Stats row — redesigned */}
            <div className="flex items-center gap-6">
              {[
                { value: "3", label: "Branches", suffix: "" },
                { value: "5K", label: "Happy Patients", suffix: "+" },
                { value: "20", label: "Services", suffix: "+" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="flex items-baseline justify-center gap-0.5">
                    <span className="text-3xl md:text-4xl font-display font-bold text-foreground">{stat.value}</span>
                    <span className="text-lg font-display font-bold text-primary">{stat.suffix}</span>
                  </div>
                  <div className="text-[11px] font-body text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image mosaic — 7 columns */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="grid grid-cols-12 grid-rows-6 gap-3 h-[420px] md:h-[520px]">
              {/* Main large image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="col-span-7 row-span-4 rounded-2xl overflow-hidden relative group"
              >
                <img
                  src={treatmentImg}
                  alt="Expert dental treatment at Smile 365 Star"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-card/90 backdrop-blur-md rounded-xl px-4 py-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-sm">
                      ★
                    </div>
                    <div>
                      <div className="font-display font-bold text-foreground text-sm">Free Consultation</div>
                      <div className="text-[11px] font-body text-muted-foreground">Available at all branches</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Top right tall image */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="col-span-5 row-span-3 rounded-2xl overflow-hidden group"
              >
                <img
                  src={dentistAtWork}
                  alt="Dentist providing care"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>

              {/* Bottom right image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="col-span-5 row-span-3 rounded-2xl overflow-hidden group"
              >
                <img
                  src={receptionImg}
                  alt="Welcoming reception area"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>

              {/* Bottom left image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="col-span-7 row-span-2 rounded-2xl overflow-hidden group relative"
              >
                <img
                  src={treatmentRoomImg}
                  alt="Modern treatment room"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-hero/60 flex items-center justify-center">
                  <span className="font-display text-primary-foreground text-sm md:text-base font-bold tracking-wide">
                    Modern Equipment · Expert Care
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
