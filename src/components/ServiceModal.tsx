import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Service } from "../types/types";

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
  onAdd: (service: Service, price: number, qty: number) => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onAdd,
}) => {
  const [qty, setQty] = React.useState(1);
  const [price, setPrice] = React.useState(
    service?.priceOptions?.[0]?.price ?? service?.price ?? 0,
  );
  const [added, setAdded] = React.useState(false);

  React.useEffect(() => {
    if (!service) return;
    setQty(1);
    setPrice(service.priceOptions?.[0]?.price ?? service.price ?? 0);
    setAdded(false);
  }, [service]);

  if (!service) return null;

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
            <h2
              className="text-2xl font-bold"
              dangerouslySetInnerHTML={{ __html: service.title }}
            />
            <button
              onClick={onClose}
              className="text-2xl text-slate-500 hover:text-black"
            >
              ✕
            </button>
          </div>

          {/* Body */}
          <div className="grid md:grid-cols-2 gap-6 p-6 max-h-[70vh] overflow-y-auto">
            {/* Left */}
            <div className="space-y-6">
              {/* Images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <img
                    src={service.before}
                    alt="Before"
                    className="rounded-xl h-40 w-full object-cover"
                  />
                  <span className="absolute top-2 left-2 text-xs bg-black/70 text-white px-2 py-1 rounded-full">
                    Before
                  </span>
                </div>
                <div className="relative">
                  <img
                    src={service.after}
                    alt="After"
                    className="rounded-xl h-40 w-full object-cover"
                  />
                  <span className="absolute top-2 left-2 text-xs bg-black/70 text-white px-2 py-1 rounded-full">
                    After
                  </span>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 text-sm text-slate-600">
                ⭐ <span className="font-medium">{service.rating ?? 4.5}</span>
                <span className="text-slate-400">(Trusted)</span>
              </div>

              {/* Price */}
              <div className="text-2xl font-bold text-[#0F766E]">
                {service.priceOptions?.length
                  ? `From ₹${service.priceOptions[0].price}`
                  : service.price
                    ? `₹${service.price}`
                    : "Price on request"}
              </div>

              {/* Price Options */}
              {service.priceOptions && (
                <select
                  className="w-full border rounded-xl px-4 py-3"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                >
                  {service.priceOptions.map((opt) => (
                    <option key={opt.label}>
                      {opt.label} — ₹{opt.price}
                    </option>
                  ))}
                </select>
              )}
              <input
                type="number"
                min={1}
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
                className="w-24 border rounded-xl px-4 py-2 mt-3"
              />
            </div>

            {/* Right */}
            <div>
              <h3 className="font-semibold mb-2">Scope of Work</h3>
              <pre className="text-sm text-slate-600 whitespace-pre-wrap font-sans">
                {service.scope}
              </pre>

              <h3 className="font-semibold mt-6 mb-2">Customer Reviews</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                {service.reviews.slice(0, 6).map((r: any, i) => (
                  <li key={i}>⭐ {r}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-4 px-6 py-4 border-t">
            <button onClick={onClose} className="px-6 py-2 rounded-xl border">
              Close
            </button>
            <button
              onClick={() => {
                if (!service) return;

                onAdd(service, price, qty);

                setAdded(true);
                setTimeout(() => setAdded(false), 1200);
              }}
              className={`px-6 py-2 rounded-xl font-semibold transition-all
    ${
      added
        ? "bg-emerald-100 text-emerald-700"
        : "bg-gradient-to-r from-[#0F766E] to-[#14B8A6] text-white"
    }
  `}
            >
              {added ? "Added ✓" : "Add to booking"}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ServiceModal;
