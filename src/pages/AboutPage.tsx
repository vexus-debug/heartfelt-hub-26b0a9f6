import { motion } from "framer-motion";
import { Shield, Heart, Sparkles, Users, Target, Eye, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import clinicImg from "@/assets/clinic-interior.jpg";
import dentistImg from "@/assets/dentist-team.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const values = [
  { icon: Shield, title: "Advanced Technology", desc: "We invest in cutting-edge digital scanners, 3D imaging, and modern sterilization systems to ensure the most accurate diagnoses and comfortable treatments." },
  { icon: Heart, title: "Patient Comfort", desc: "Every procedure is designed around your comfort. Our pain-minimizing techniques and gentle approach ensure a stress-free experience every visit." },
  { icon: Sparkles, title: "Expert Clinicians", desc: "Our team of internationally trained dentists and orthodontists bring years of specialized experience across cosmetic, restorative, and general dentistry." },
  { icon: Users, title: "Family Focused", desc: "From your child's first dental visit to advanced procedures for adults, we provide comprehensive care tailored to every family member." },
];

const milestones = [
  { year: "2023", title: "Founded in Port Harcourt", desc: "Opened our flagship clinic at 61 Stadium Road with state-of-the-art equipment." },
  { year: "2023", title: "Aba Branch Launch", desc: "Expanded to Abia State to serve more communities in the South East." },
  { year: "2024", title: "Owerri Branch Opening", desc: "Brought modern dental care to Imo State with our third branch." },
  { year: "2024", title: "5,000+ Patients Served", desc: "Reached a milestone of over 5,000 happy patients across all branches." },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        badge="Who We Are"
        title="Your Trusted Partner in"
        highlight="Dental Health"
        description="Smile 365 Star Dental Clinic is a fast-growing dental care provider in Nigeria, delivering modern, technology-driven oral healthcare across Rivers, Abia, and Imo States."
        breadcrumb="About Us"
      />

      {/* Mission & Vision */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div {...fadeUp} className="bg-background rounded-2xl p-8 border border-border shadow-card">
              <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                To help individuals and families achieve healthy, confident smiles through accessible, modern, and patient-centered dentistry. We are committed to combining advanced technology with compassionate care to deliver exceptional oral healthcare experiences.
              </p>
            </motion.div>
            <motion.div {...fadeUp} className="bg-background rounded-2xl p-8 border border-border shadow-card">
              <div className="h-14 w-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-accent" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                To become Nigeria's most trusted dental care provider, recognized for clinical excellence, innovative technology, and a relentless focus on patient satisfaction. We envision a future where quality dental care is accessible to every Nigerian.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-mint">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <span className="text-sm font-body font-semibold text-accent uppercase tracking-widest">Our Story</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Built on a Passion for <span className="text-primary">Better Smiles</span>
              </h2>
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <p>
                  Smile 365 Star Dental Clinic was founded in 2023 with a clear mission: to bring world-class dental care closer to Nigerians. Starting with our flagship clinic in Port Harcourt, we quickly built a reputation for combining advanced dental technology with warm, patient-focused care.
                </p>
                <p>
                  Our founder recognized that many Nigerians lacked access to modern dental services — often traveling abroad for treatments that could be provided locally with the right equipment and expertise. Smile 365 Star was born to bridge that gap.
                </p>
                <p>
                  Today, with three thriving branches across Rivers, Abia, and Imo States, we continue to grow — driven by the smiles of thousands of satisfied patients and a commitment to making quality dental care accessible to all.
                </p>
              </div>
            </motion.div>
            <motion.div {...fadeUp} className="relative">
              <img src={clinicImg} alt="Our modern dental clinic" className="rounded-2xl shadow-elevated w-full h-[400px] object-cover" />
              <div className="absolute -bottom-6 -left-6 bg-primary rounded-2xl p-6 text-primary-foreground shadow-elevated">
                <div className="text-3xl font-display font-bold">3</div>
                <div className="text-sm opacity-80">Branches & Growing</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-sm font-body font-semibold text-accent uppercase tracking-widest">What Drives Us</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Our Core Values</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-5 bg-background rounded-2xl p-6 border border-border shadow-card"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <v.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{v.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-mint">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <img src={dentistImg} alt="Our dental team" className="rounded-2xl shadow-elevated w-full h-[400px] object-cover" />
            </motion.div>
            <motion.div {...fadeUp}>
              <span className="text-sm font-body font-semibold text-accent uppercase tracking-widest">Our Team</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Expert Care, <span className="text-primary">Gentle Hands</span>
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Our clinic is staffed by highly trained dentists, orthodontists, and dental specialists who are passionate about delivering exceptional care.
              </p>
              <div className="space-y-3">
                {[
                  "International training and certifications",
                  "Specialized in cosmetic & orthodontic treatments",
                  "Continuous professional development",
                  "Patient-focused treatment planning",
                  "Gentle care & clear communication",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="font-body text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-sm font-body font-semibold text-accent uppercase tracking-widest">Our Journey</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Key Milestones</h2>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-0">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 relative"
              >
                <div className="flex flex-col items-center">
                  <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-body text-xs font-bold flex-shrink-0 z-10">
                    {m.year.slice(-2)}
                  </div>
                  {i < milestones.length - 1 && <div className="w-0.5 h-full bg-border" />}
                </div>
                <div className="pb-10">
                  <span className="text-xs font-body text-accent font-semibold">{m.year}</span>
                  <h3 className="font-display text-lg font-bold text-foreground">{m.title}</h3>
                  <p className="font-body text-sm text-muted-foreground mt-1">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Experience the Difference?
            </h2>
            <p className="font-body text-primary-foreground/70 max-w-xl mx-auto mb-8">
              Join thousands of happy patients who trust Smile 365 Star for their dental care.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Book Your Free Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
