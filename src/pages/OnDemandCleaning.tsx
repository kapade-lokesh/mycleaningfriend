import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const OnDemandCleaning: React.FC = () => {
  const [description, setDescription] = useState("");

  return (
    <section className="py-10">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold">
            On-Demand <span className="text-[#0F766E]">Cleaning</span>
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Describe your custom cleaning requirement. Add it to booking or send
            full details directly on WhatsApp.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-white/80 backdrop-blur-xl rounded-3xl
          shadow-xl border border-[#E5E7EB] p-8 md:p-10"
        >
          {/* Label */}
          <label className="block text-sm font-semibold text-slate-700 mb-3">
            Describe the cleaning you need
          </label>

          {/* Textarea */}
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={5}
            placeholder="e.g. Deep kitchen degrease + balcony wash; 2 BHK; preferred time: 10am–1pm"
            className="w-full resize-none rounded-2xl border border-slate-300
            px-5 py-4 text-slate-700 placeholder-slate-400
            focus:outline-none focus:ring-2 focus:ring-[#0F766E]
            bg-white"
          />

          {/* Helper text */}
          <p className="mt-3 text-xs text-slate-500">
            Tip: Mention BHK, areas to clean, and preferred time for faster
            response.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:items-center">
            {/* Add to Booking */}
            <button
              className="flex-1 bg-gradient-to-r from-[#0F766E] to-[#14B8A6]
              text-white py-3 rounded-xl font-semibold
              shadow-md hover:shadow-lg transition"
            >
              Add to Booking
            </button>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/8554996834?text=${encodeURIComponent(
                description || "Hi, I want to request on-demand cleaning.",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2
              bg-white border border-[#0F766E]
              text-[#0F766E] py-3 rounded-xl font-semibold
              hover:bg-[#ECFEFF] transition"
            >
              <Send size={18} />
              Send on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OnDemandCleaning;
