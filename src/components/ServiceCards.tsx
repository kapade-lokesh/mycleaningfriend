import { motion } from "framer-motion";
import { useState } from "react";
import type { ServiceCardProps } from "../types/types";

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  index,
  onClick,
  onAdd,
}) => {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const defaultPrice =
    service.unit === "sqft"
      ? service.pricePerSqft || 0
      : Number(service.priceOptions?.[0]?.price || service.price || 0);

  const [price, setPrice] = useState<number>(Number(defaultPrice));
  const [sqft, setSqft] = useState(1);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    const finalPrice =
      service.unit === "sqft" ? (service.pricePerSqft || 0) * sqft : price;

    onAdd(service, finalPrice, service.unit === "sqft" ? 1 : qty);

    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      onClick={() => onClick(service)}
      className={`relative bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg
      hover:shadow-xl transition overflow-hidden border
      ${added ? "ring-2 ring-[#1c67d2]" : "border-[#E5E7EB]"}`}
    >
      {/* IMAGE */}
      <div className="relative h-36 sm:h-48 overflow-hidden">
        <img
          src={service.mainImage}
          alt={service.title}
          className="w-full h-full object-cover transition duration-700"
        />
      </div>

      {/* CONTENT */}
      <div className="p-3 sm:p-6 space-y-2 sm:space-y-4">
        {/* TITLE */}
        <h3
          className="text-sm sm:text-lg font-semibold leading-snug line-clamp-2"
          dangerouslySetInnerHTML={{ __html: service.title }}
        />

        {/* RATING */}
        {service.rating && (
          <div className="flex  items-center gap-1 text-xs sm:text-sm text-slate-600">
            ⭐ <span>{service.rating}</span>
          </div>
        )}

        {
          <div className="mt-3">
            {service.secondtitle && (
              <span
                className="bg-gradient-to-r from-[#1c67d2] to-[#3295CF]
              text-white text-sm px-3 py-1  rounded-xl shadow-lg hover:shadow-xl transition"
              >
                {service.secondtitle}
              </span>
            )}
          </div>
        }

        {/* PRICE */}
        {service.id != "mini" && (
          <>
            {service.unit === "sqft"
              ? `₹${service.pricePerSqft}/sqft`
              : `From ₹${defaultPrice}`}
          </>
        )}

        {/* 🔴 DESKTOP / TABLET ONLY */}
        <div className="hidden sm:block space-y-3">
          {service.priceOptions &&
            service.priceOptions.length > 0 &&
            service.unit !== "sqft" && (
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

          <div className="flex items-center gap-3">
            {service.id !== "mini" && (
              <>
                {service.unit === "sqft" ? (
                  <input
                    type="number"
                    min={1}
                    placeholder="Sq Ft"
                    value={sqft}
                    onChange={(e) => setSqft(Number(e.target.value))}
                    className="w-24 border rounded-xl px-3 py-2 text-center"
                  />
                ) : (
                  <input
                    type="number"
                    min={1}
                    value={qty}
                    onChange={(e) => setQty(Number(e.target.value))}
                    className="w-16 border rounded-xl px-3 py-2 text-center"
                  />
                )}
              </>
            )}
            {service.id !== "mini" && (
              <button
                onClick={handleAdd}
                className="flex-1 py-2 rounded-xl font-semibold bg-gradient-to-r
              from-[#1c67d2] to-[#3295CF] text-white hover:shadow-lg transition"
              >
                {added ? "Added ✓" : "Add"}
              </button>
            )}
            {service.id === "mini" && (
              <button
                className="flex-1 py-2 rounded-xl font-semibold bg-gradient-to-r
              from-[#1c67d2] to-[#3295CF] text-white hover:shadow-lg transition"
              >
                Open
              </button>
            )}
          </div>
        </div>

        {/* 🟢 MOBILE ONLY */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAdd(service, Number(defaultPrice), 1);
            setAdded(true);
            setTimeout(() => setAdded(false), 1200);
          }}
          className={`sm:hidden w-full py-2 rounded-xl text-xs font-semibold transition
          ${
            added
              ? "bg-emerald-100 text-emerald-700"
              : "bg-gradient-to-r from-[#0F766E] to-[#14B8A6] text-white"
          }`}
        >
          {added ? "Added ✓" : "Add"}
        </button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
