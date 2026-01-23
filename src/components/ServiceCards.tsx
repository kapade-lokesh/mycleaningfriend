import { motion } from "framer-motion";
import { useState } from "react";
import type { ServiceCardProps } from "../types/types";

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  index,
  onClick,
  onAdd,
}) => {
  const [showAfter, setShowAfter] = useState<boolean>(false);
  const [qty, setQty] = useState<number>(1);
  const [added, setAdded] = useState(false);

  const [price, setPrice] = useState<number>(
    service.priceOptions?.[0]?.price ?? service.price ?? 0,
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      onClick={() => onClick(service)}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className={`relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-lg
hover:shadow-2xl transition overflow-hidden border
${added ? "ring-2 ring-[#0F766E]" : "border-[#E5E7EB]"}`}
    >
      {/* Image */}
      <div
        className="relative h-48 overflow-hidden cursor-pointer"
        onMouseEnter={() => setShowAfter(true)}
        onMouseLeave={() => setShowAfter(false)}
      >
        <img
          src={showAfter ? service.after : service.before}
          alt={service.title}
          className="w-full h-full object-cover transition duration-700"
        />

        <div className="absolute top-3 left-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
          {showAfter ? "After" : "Before"}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title (HTML Safe) */}
        <h3
          className="text-lg font-semibold leading-snug"
          dangerouslySetInnerHTML={{ __html: service.title }}
        />

        {/* Rating */}
        {service.rating && (
          <div className="flex items-center gap-2 text-sm text-slate-600">
            ⭐ <span className="font-medium">{service.rating ?? 4.5}</span>
            <span className="text-slate-400">(Trusted)</span>
          </div>
        )}

        {/* Price */}
        <div className="text-xl font-bold text-[#0F766E]">
          {service.priceOptions?.length
            ? `From ₹${service.priceOptions[0].price}`
            : service.price
              ? `₹${service.price}`
              : "Price on request"}
        </div>

        {/* Price Options */}
        {service.priceOptions && (
          <select
            className="w-full border rounded-xl px-4 py-2 text-sm bg-white"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          >
            {service.priceOptions.map((opt) => (
              <option key={opt.label} value={opt.price}>
                {opt.label} — ₹{opt.price}
              </option>
            ))}
          </select>
        )}

        {/* CTA */}
        <div className="flex items-center gap-3 pt-2">
          <input
            type="number"
            min={1}
            value={qty}
            onChange={(e) => setQty(Number(e.target.value))}
            className="w-16 border rounded-xl px-3 py-2 text-center"
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              onAdd(service, price, qty);

              // UX feedback
              setAdded(true);
              setTimeout(() => setAdded(false), 1200);
            }}
            className={`flex-1 py-2 rounded-xl font-semibold transition-all
    ${
      added
        ? "bg-emerald-100 text-emerald-700"
        : "bg-gradient-to-r from-[#0F766E] to-[#14B8A6] text-white hover:shadow-lg"
    }
  `}
          >
            {added ? "Added ✓" : "Add"}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
