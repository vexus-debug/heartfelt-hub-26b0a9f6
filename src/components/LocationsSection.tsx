import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const branches = [
  {
    name: "Port Harcourt",
    tag: "Headquarters",
    address: "61 Stadium Road, by Mummy B Junction, Beside Golden Tulip Hotel, Port Harcourt, Rivers State",
    phone: "+234 816 525 7737",
    accent: "bg-primary",
  },
  {
    name: "Aba",
    tag: "Branch",
    address: "215 Aba–Owerri Road, By MCC Junction, Aba, Abia State",
    phone: "+234 810 553 6130",
    accent: "bg-accent",
  },
  {
    name: "Owerri",
    tag: "Branch",
    address: "88 Wetheral Road, By MCC Junction, Beside FCMB Bank, Owerri, Imo State",
    phone: "+234 813 282 5366",
    accent: "bg-primary-light",
  },
];

const LocationsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-body font-semibold text-accent uppercase tracking-widest">Our Locations</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Find Us <span className="text-primary">Near You</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Quality dental care across Southern Nigeria — always within reach.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {branches.map((branch, i) => (
            <motion.div
              key={branch.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative bg-card rounded-2xl overflow-hidden border border-border hover:shadow-elevated transition-all duration-300 group"
            >
              {/* Top accent bar */}
              <div className={`h-1.5 ${branch.accent} w-full`} />

              <div className="p-6">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-display text-xl font-bold text-foreground">{branch.name}</h3>
                  <span className={`text-[11px] font-body font-semibold px-3 py-1 rounded-full ${
                    branch.tag === "Headquarters"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}>
                    {branch.tag}
                  </span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm font-body text-muted-foreground leading-relaxed">{branch.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                    <a href={`tel:${branch.phone.replace(/\s/g, '')}`} className="text-sm font-body text-primary font-medium hover:underline">
                      {branch.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm font-body text-muted-foreground">Mon – Sat: 8AM – 6PM</span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${branch.phone.replace(/[+\s]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 rounded-xl bg-primary text-primary-foreground font-body font-semibold text-sm hover:bg-primary/90 transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" asChild className="rounded-full">
            <Link to="/locations">
              View All Locations <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
