import { useState } from "react";
import { MessageCircle, X, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const branches = [
  {
    name: "Port Harcourt",
    tag: "Headquarters",
    phone: "2348165257737",
  },
  {
    name: "Aba",
    tag: "Branch",
    phone: "2348105536130",
  },
  {
    name: "Owerri",
    tag: "Branch",
    phone: "2348132825366",
  },
];

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBranchClick = (phone: string) => {
    window.open(
      `https://wa.me/${phone}?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment.`,
      "_blank"
    );
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="bg-card border border-border rounded-2xl shadow-xl w-72 overflow-hidden mb-2"
          >
            <div className="bg-[#25D366] px-5 py-4 text-white">
              <h3 className="font-display font-bold text-base">Book via WhatsApp</h3>
              <p className="text-xs text-white/80 mt-0.5">Select a branch to chat with us</p>
            </div>
            <div className="p-3 space-y-2">
              {branches.map((branch) => (
                <button
                  key={branch.phone}
                  onClick={() => handleBranchClick(branch.phone)}
                  className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-muted transition-colors text-left group"
                >
                  <div className="h-10 w-10 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-[#25D366]" />
                  </div>
                  <div>
                    <span className="font-display font-semibold text-sm text-foreground block">
                      {branch.name}
                    </span>
                    <span className="text-xs text-muted-foreground">{branch.tag}</span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:bg-[#20bd5a] transition-colors"
        aria-label={isOpen ? "Close WhatsApp menu" : "Book via WhatsApp"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </motion.button>
    </div>
  );
};

export default WhatsAppButton;
