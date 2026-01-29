import React, { useEffect, useCallback } from "react"; // Added useEffect, useCallback
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

  // 🔁 Carousel state
  const [current, setCurrent] = React.useState(0);

  // Support multiple images safely
  const images =
    service?.images && service.images.length > 0
      ? service.images
      : service
        ? [service.mainImage]
        : [];

  // ✅ Memoized next function for the timer
  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prev = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  // ✅ AUTO-CHANGE LOGIC
  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      next();
    }, 3000); // Changes every 3 seconds

    return () => clearInterval(timer); // Cleanup on unmount or service change
  }, [next, images.length]);

  React.useEffect(() => {
    if (!service) return;

    setQty(1);
    setPrice(service.priceOptions?.[0]?.price ?? service.price ?? 0);
    setAdded(false);
    setCurrent(0);
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
            {/* LEFT */}
            <div className="space-y-6">
              {/* ✅ IMAGE CAROUSEL (Manual + Auto) */}
              <div className="relative rounded-2xl overflow-hidden h-56 bg-slate-100">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current}
                    src={images[current]}
                    alt="Service"
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.4 }}
                  />
                </AnimatePresence>

                {/* Controls */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={prev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white z-10 w-9 h-9 rounded-full flex items-center justify-center"
                    >
                      ‹
                    </button>
                    <button
                      onClick={next}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white z-10 w-9 h-9 rounded-full flex items-center justify-center"
                    >
                      ›
                    </button>
                  </>
                )}

                {/* Dots */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {images.map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 w-2 rounded-full transition-all ${
                        i === current ? "bg-white" : "bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 text-sm text-slate-600">
                ⭐ <span className="font-medium">{service.rating ?? 4.5}</span>
                <span className="text-slate-400">(Trusted)</span>
              </div>

              {/* Price */}
              <div className="text-2xl font-bold text-[#1c67d2]">
                {service.priceOptions?.length
                  ? `From ₹${service.priceOptions[0].price}`
                  : service.price
                    ? `₹${service.price}`
                    : "Price on request"}
              </div>

              {/* Price Options */}
              {service.priceOptions && (
                <>
                  <select
                    className="w-100 border rounded-xl px-4 py-3 me-5 inline"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                  >
                    {service.priceOptions.map((opt) => (
                      <option key={opt.label} value={opt.price}>
                        {opt.label} — ₹{opt.price}
                      </option>
                    ))}
                  </select>
                  <input
                    type="number"
                    min={1}
                    value={qty}
                    onChange={(e) => setQty(Number(e.target.value))}
                    className="w-24 border rounded-xl px-4 py-2 inline"
                  />
                </>
              )}
            </div>

            {/* RIGHT */}
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
                onAdd(service, price, qty);
                setAdded(true);
                setTimeout(() => setAdded(false), 1200);
              }}
              className={`px-6 py-2 rounded-xl font-semibold transition-all ${
                added
                  ? "bg-[#3295CF]  text-white"
                  : "bg-gradient-to-r from-[#1c67d2] to-[#3295CF] text-white"
              }`}
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
