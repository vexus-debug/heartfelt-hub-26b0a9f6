import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import anniversaryBanner from "@/assets/gallery/anniversary-banner.jpg";
import clinicEntrance from "@/assets/gallery/clinic-entrance.jpg";
import loungeArea from "@/assets/gallery/lounge-area.jpg";
import dentalTeam from "@/assets/gallery/dental-team.jpg";
import dentistAtWork from "@/assets/gallery/dentist-at-work.jpg";
import waitingArea from "@/assets/gallery/waiting-area.jpg";

const images = [
  { src: anniversaryBanner, alt: "Anniversary celebration", span: "col-span-2 row-span-2" },
  { src: clinicEntrance, alt: "Clinic entrance", span: "col-span-1 row-span-1" },
  { src: loungeArea, alt: "Lounge area", span: "col-span-1 row-span-1" },
  { src: dentalTeam, alt: "Our dental team", span: "col-span-1 row-span-1" },
  { src: dentistAtWork, alt: "Dentist at work", span: "col-span-1 row-span-1" },
  { src: waitingArea, alt: "Waiting area", span: "col-span-2 row-span-1" },
];

const GalleryPreview = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
        >
          <div>
            <span className="text-sm font-body font-semibold text-accent uppercase tracking-widest">Gallery</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              Inside <span className="text-primary">Our Clinic</span>
            </h2>
          </div>
          <Button variant="outline" asChild className="rounded-full self-start md:self-auto">
            <Link to="/gallery">
              View Full Gallery <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[160px] md:auto-rows-[180px]">
          {images.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`${img.span} rounded-2xl overflow-hidden group cursor-pointer`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
