import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, CalendarCheck, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BookingDialog from "@/components/BookingDialog";
import { services } from "@/data/services";

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="bg-card rounded-2xl border border-border shadow-card overflow-hidden group hover:shadow-elevated transition-shadow duration-300"
    >
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start gap-4">
          <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
            <service.icon className="h-7 w-7 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-xl font-bold text-foreground">{service.title}</h3>
            <p className="text-sm font-body text-primary/80 font-medium">{service.subtitle}</p>
          </div>
        </div>
        <p className="font-body text-sm text-muted-foreground mt-3 leading-relaxed">{service.desc}</p>
      </div>

      {/* Sub-services grid */}
      <div className="px-6 pb-2">
        <div className="space-y-0">
          {(expanded ? service.items : service.items.slice(0, 4)).map((item) => (
            <div key={item} className="flex items-center justify-between py-2.5 border-b border-border/50 last:border-0">
              <div className="flex items-center gap-2.5">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="font-body text-sm text-foreground">{item}</span>
              </div>
              <BookingDialog
                preselectedServices={[item]}
                trigger={
                  <button className="text-xs font-body font-semibold text-primary hover:text-primary/80 transition-colors px-2 py-1 rounded-lg hover:bg-primary/5 flex-shrink-0">
                    Book
                  </button>
                }
              />
            </div>
          ))}
        </div>

        {service.items.length > 4 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-xs font-body font-medium text-muted-foreground hover:text-foreground transition-colors mt-2 mb-1"
          >
            {expanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
            {expanded ? "Show less" : `+${service.items.length - 4} more services`}
          </button>
        )}
      </div>

      {/* Benefit + CTA */}
      <div className="px-6 pb-6 pt-2">
        <div className="bg-muted/60 rounded-xl p-3.5 mb-4">
          <p className="font-body text-xs text-muted-foreground leading-relaxed">💡 {service.benefit}</p>
        </div>
        <BookingDialog
          preselectedServices={service.items}
          trigger={
            <Button className="w-full" size="lg">
              <CalendarCheck className="mr-2 h-4 w-4" />
              Book {service.title}
            </Button>
          }
        />
      </div>
    </motion.div>
  );
};

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        badge="What We Offer"
        title="Comprehensive"
        highlight="Dental Services"
        description="From routine check-ups to advanced cosmetic procedures, we provide a full range of dental services for individuals and families across all ages."
        breadcrumb="Services"
      />

      {/* Services Grid */}
      <section className="py-20 bg-gradient-mint">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Choose Your <span className="text-primary">Treatment</span>
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              Select any service to book directly — pick multiple services and choose your preferred location.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { stat: "20+", label: "Dental Services" },
              { stat: "6", label: "Specialty Areas" },
              { stat: "3", label: "Convenient Locations" },
              { stat: "100%", label: "Patient Satisfaction" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6"
              >
                <div className="text-3xl font-display font-bold text-gold mb-2">{item.stat}</div>
                <div className="font-body text-sm text-primary-foreground/70">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto mb-8">
              Book a free consultation and let our experts recommend the right treatment plan for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <BookingDialog />
              <Button size="lg" variant="outline" asChild>
                <a href="https://wa.me/2348165257737" target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
