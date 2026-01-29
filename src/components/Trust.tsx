import { motion } from "framer-motion";

const Trust = () => {
  return (
    <section className="bg-[#daedf9] py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
        {["5★ Rating", "100% Verified Staff", "24/7 Support"].map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <h4 className="text-3xl font-bold text-[#1c67d2]">{item}</h4>
            <p className="mt-2 text-slate-600">
              Trusted by hundreds of happy customers
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Trust;
