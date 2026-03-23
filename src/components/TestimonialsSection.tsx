import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Chioma A.",
    location: "Port Harcourt",
    text: "The team at Smile 365 Star made my dental implant procedure painless. I was so nervous, but they were incredibly gentle and professional. My smile has never looked better!",
    service: "Dental Implants",
  },
  {
    name: "Emeka O.",
    location: "Aba",
    text: "I took my 5-year-old for her first dental visit and the pediatric team was amazing. She actually enjoyed the experience and now looks forward to her check-ups!",
    service: "Pediatric Dentistry",
  },
  {
    name: "Ngozi I.",
    location: "Owerri",
    text: "Got my teeth whitened before my wedding and the results were stunning. The Digital Smile Design let me preview the outcome before we even started. Truly modern dentistry.",
    service: "Cosmetic Dentistry",
  },
  {
    name: "David K.",
    location: "Port Harcourt",
    text: "After years of avoiding the dentist, I finally went for a root canal at Smile 365 Star. The advanced technology they use made it quick and virtually pain-free. Wish I'd gone sooner!",
    service: "Restorative Dentistry",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-body font-semibold text-accent uppercase tracking-widest">Testimonials</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            What Our <span className="text-primary">Patients Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl p-6 md:p-8 border border-border ${
                i === 0 || i === 3 ? "bg-primary/[0.03]" : "bg-background"
              }`}
            >
              {/* Quote mark */}
              <div className="text-4xl font-display text-primary/20 leading-none mb-3">"</div>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">{t.text}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-display font-bold text-primary text-sm">
                      {t.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-body font-semibold text-foreground text-sm">{t.name}</div>
                    <div className="text-xs font-body text-muted-foreground">{t.location}</div>
                  </div>
                </div>
                <span className="text-[11px] font-body font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {t.service}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
