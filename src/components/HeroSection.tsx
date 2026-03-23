import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-smile.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mint" />
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary) / 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm font-body text-muted-foreground">Trusted Dental Care Since 2023</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Your Smile,{" "}
              <span className="text-primary">Our Passion</span>
              <span className="text-gradient-gold">.</span>
            </h1>

            <p className="text-lg font-body text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Modern, technology-driven dental care across Rivers, Abia & Imo States. 
              Experience gentle, expert dentistry designed around your comfort.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="text-base px-8">
                <Link to="/contact">
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base px-8">
                <Link to="/services">Our Services</Link>
              </Button>
            </div>

            <div className="flex items-center gap-8 mt-10 pt-8 border-t border-border">
              {[
                { value: "3", label: "Branches" },
                { value: "5K+", label: "Happy Patients" },
                { value: "20+", label: "Services" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-display font-bold text-primary">{stat.value}</div>
                  <div className="text-xs font-body text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img src={heroImg} alt="Smile 365 Star Dental Clinic - Beautiful Smiles" className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 to-transparent" />
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 bg-card rounded-2xl p-4 shadow-elevated"
            >
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">🦷</span>
                </div>
                <div>
                  <div className="font-display font-bold text-foreground text-sm">Free Consultation</div>
                  <div className="text-xs text-muted-foreground">All branches</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
