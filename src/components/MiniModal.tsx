import { motion, AnimatePresence } from "framer-motion";
import ServiceCard from "./ServiceCards";
import { useState } from "react";
import type { Service } from "../types/types";

interface MiniModalProps {
  Data: Service[];
  onClose: () => void;
  onAdd: (service: Service, price: number, qty: number) => void;
}

const MiniModal: React.FC<MiniModalProps> = ({ Data, onClose, onAdd }) => {
  const [, setActiveService] = useState<Service | null>(null);

  if (!Data) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Modal Card */}
        <motion.div
          initial={{ scale: 0.95, y: 30 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 30 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <button
              onClick={onClose}
              className="text-2xl text-slate-500 hover:text-black"
            >
              ✕
            </button>
          </div>

          {/* Body */}
          <div className="grid md:grid-cols-2 gap-6 p-6 max-h-[70vh] overflow-y-auto">
            {Data.map((service: Service, index: number) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                onClick={setActiveService}
                onAdd={onAdd}
              />
            ))}
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-4 px-6 py-4 border-t"></div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MiniModal;
