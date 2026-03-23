import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import dentalTeam from "@/assets/gallery/dental-team.jpg";
import treatmentRoom from "@/assets/gallery/treatment-room.jpg";

const techItems = [
  { title: "Digital Intraoral Scanners", desc: "3D imaging for precise, comfortable diagnosis without messy impressions" },
  { title: "Digital Smile Design", desc: "Preview your smile transformation before treatment begins" },
  { title: "Computer-Guided Implants", desc: "Pinpoint accuracy for safer, faster implant placement" },
  { title: "Modern Sterilization", desc: "Autoclave systems meeting the highest international safety standards" },
];

const TechnologySection = () => {
  return (
    <section className="py-24 bg-gradient-hero text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-body font-semibold text-gold uppercase tracking-widest">Our Technology</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-6">
              Advanced Dental{" "}
              <span className="text-gold">Technology</span>
            </h2>
            <p className="font-body opacity-80 leading-relaxed mb-10 max-w-lg">
              We invest in cutting-edge equipment so you get better results, more comfort, and faster treatment times.
            </p>

            <div className="space-y-4 mb-10">
              {techItems.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-gold font-display font-bold text-sm">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div>
                    <div className="font-body font-semibold text-sm mb-0.5">{item.title}</div>
                    <div className="text-xs opacity-70 leading-relaxed">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button variant="secondary" asChild className="rounded-full">
              <Link to="/technology">
                Explore Our Technology <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img src={dentalTeam} alt="Our dental team with advanced equipment" className="w-full h-[350px] object-cover" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -left-4 rounded-xl overflow-hidden shadow-elevated border-4 border-primary-dark w-44 h-32 hidden md:block"
            >
              <img src={treatmentRoom} alt="Treatment room technology" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
