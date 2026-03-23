import { motion } from "framer-motion";
import { Smile, Sparkles, Wrench, Stethoscope, Baby, AlertCircle, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const services = [
  {
    icon: Smile,
    title: "Orthodontics",
    subtitle: "Teeth Alignment & Bite Correction",
    desc: "Orthodontic treatments focus on correcting misaligned teeth and bite problems, improving both aesthetics and oral function. We offer a full range of alignment solutions for children, teens, and adults.",
    items: [
      "Traditional metal braces",
      "Ceramic braces (less visible option)",
      "Clear aligners (removable invisible braces)",
      "Retainers to maintain alignment",
      "Bite correction (overbite, underbite, crossbite)",
      "Teeth spacing correction",
      "Crowded teeth alignment",
    ],
    benefit: "Orthodontic treatment not only improves appearance but also helps prevent jaw problems, uneven tooth wear, and gum disease.",
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    subtitle: "Smile Enhancement",
    desc: "Our cosmetic dentistry services focus on improving the appearance of your teeth and smile. Whether you want a brighter smile or a complete transformation, our specialists create personalized treatment plans.",
    items: [
      "Professional teeth whitening",
      "Dental veneers",
      "Hollywood Smile design",
      "Tooth reshaping and contouring",
      "Gum contouring",
      "Composite bonding",
      "Smile makeover consultations",
    ],
    benefit: "These procedures help you achieve brighter, symmetrical, and more attractive smiles that boost your confidence.",
  },
  {
    icon: Wrench,
    title: "Restorative Dentistry",
    subtitle: "Repairing Damaged Teeth",
    desc: "Restorative dentistry focuses on repairing or replacing damaged or missing teeth. Our advanced techniques and materials ensure natural-looking, long-lasting results.",
    items: [
      "Dental implants",
      "Dental crowns",
      "Dental bridges",
      "Root canal therapy",
      "Tooth-colored fillings",
      "Full or partial dentures",
      "Broken tooth restoration",
      "Tooth reconstruction",
    ],
    benefit: "These procedures restore function, strength, and aesthetics to damaged teeth, giving you back your confident smile.",
  },
  {
    icon: Stethoscope,
    title: "General Dentistry",
    subtitle: "Routine Oral Care",
    desc: "General dentistry services focus on preventive care and everyday dental health maintenance. Regular check-ups are the foundation of good oral health.",
    items: [
      "Scaling and polishing (professional cleaning)",
      "Dental examinations & oral health check-ups",
      "Digital dental X-rays",
      "Cavity detection & fillings",
      "Tooth extractions",
      "Gum disease treatment",
      "Bad breath treatment",
      "Fluoride treatments",
      "Oral health education",
    ],
    benefit: "Routine visits help prevent tooth decay, gum disease, and other oral health issues before they become serious.",
  },
  {
    icon: Baby,
    title: "Pediatric Dentistry",
    subtitle: "Children's Dental Care",
    desc: "We provide specialized care designed specifically for infants, children, and teenagers. Our child-friendly environment helps kids develop positive dental habits early.",
    items: [
      "Children's dental checkups",
      "Preventive fluoride treatments",
      "Dental sealants",
      "Early orthodontic assessments",
      "Cavity treatment for children",
      "Gentle tooth extractions",
      "Oral hygiene education for kids",
      "Habit correction (thumb sucking, pacifier)",
    ],
    benefit: "We create a friendly, comfortable environment that helps children develop positive dental habits early in life.",
  },
  {
    icon: AlertCircle,
    title: "Emergency & Specialized Care",
    subtitle: "Urgent & Advanced Treatments",
    desc: "Beyond routine care, we provide emergency dental services and specialized treatments for complex dental issues that require immediate attention.",
    items: [
      "Wisdom tooth removal",
      "Emergency dental care",
      "Jaw pain treatment (TMJ disorders)",
      "Mouth guard fittings (sports/night)",
      "Gum disease management (periodontal care)",
      "Oral infection treatment",
      "Tooth sensitivity treatment",
      "Dental consultations & second opinions",
    ],
    benefit: "We're here when you need us most — providing prompt, expert care for dental emergencies and complex cases.",
  },
];

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

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4 space-y-16">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              id={service.title.toLowerCase().replace(/\s+/g, "-")}
              className={`grid lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-bold text-foreground">{service.title}</h2>
                    <span className="text-sm font-body text-muted-foreground">{service.subtitle}</span>
                  </div>
                </div>
                <p className="font-body text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
                <div className="bg-secondary/50 rounded-2xl p-5 mb-4">
                  <p className="font-body text-sm text-secondary-foreground italic">💡 {service.benefit}</p>
                </div>
                <Button asChild className="mt-2">
                  <Link to="/contact">
                    Book This Service <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className={`bg-card rounded-2xl p-6 border border-border shadow-card ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <h3 className="font-display text-lg font-bold text-foreground mb-4">Services Included</h3>
                <div className="space-y-3">
                  {service.items.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-body text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quick Overview Grid */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
              Why Choose <span className="text-gold">Smile 365 Star?</span>
            </h2>
          </motion.div>
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
          <motion.div {...fadeUp}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto mb-8">
              Book a free consultation and let our experts recommend the right treatment plan for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/contact">Book Free Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://wa.me/2348165257737" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
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
