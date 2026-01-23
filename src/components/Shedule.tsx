import { motion } from "framer-motion";
const Shedule = () => {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto bg-gradient-to-r from-[#0F766E] to-[#14B8A6]
          text-white rounded-3xl px-10 py-16 text-center shadow-2xl overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/10 blur-3xl"></div>

        <h3 className="relative text-3xl font-bold">
          Ready for a Spotless Home?
        </h3>
        <p className="relative mt-4 text-emerald-100">
          Schedule your professional cleaning service today — fast, easy, and
          reliable.
        </p>

        <button
          className="relative mt-8 bg-white text-[#0F766E]
            px-8 py-3 rounded-xl font-semibold shadow hover:bg-emerald-50 transition"
        >
          Schedule Cleaning
        </button>
      </motion.div>
    </section>
  );
};

export default Shedule;
