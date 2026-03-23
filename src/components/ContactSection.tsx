import { motion } from "framer-motion";
import { Phone, MessageCircle, Instagram, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import loungeArea from "@/assets/gallery/lounge-area.jpg";

const ContactSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-elevated">
            {/* Image side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative hidden md:block"
            >
              <img src={loungeArea} alt="Our comfortable lounge area" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/60 to-primary/40" />
              <div className="absolute bottom-8 left-8 right-8 text-primary-foreground">
                <h3 className="font-display text-2xl font-bold mb-2">Ready to Smile?</h3>
                <p className="font-body text-sm opacity-90">
                  Your journey to a healthier, brighter smile starts with a free consultation.
                </p>
              </div>
            </motion.div>

            {/* Content side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-background p-8 md:p-10"
            >
              <span className="text-sm font-body font-semibold text-accent uppercase tracking-widest">Get In Touch</span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-2 mb-6">
                Book Your <span className="text-primary">Appointment</span>
              </h2>

              <div className="space-y-4 mb-8">
                <a href="tel:+2348165257737" className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors group">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-body">Call Us</div>
                    <div className="font-body font-semibold text-foreground">+234 816 525 7737</div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <a href="https://wa.me/2348165257737" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors group">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MessageCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-body">WhatsApp</div>
                    <div className="font-body font-semibold text-foreground">Chat with us</div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <a href="https://instagram.com/smile365star" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors group">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Instagram className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-body">Instagram</div>
                    <div className="font-body font-semibold text-foreground">@smile365star</div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>

              <Button size="lg" asChild className="w-full rounded-full">
                <Link to="/contact">Book Free Consultation</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
