import { motion } from "framer-motion";
import uc from "../assets/logos/UC-image.png";
import ht from "../assets/logos/Home-Triangle-Image.png";
import nb from "../assets/logos/Nobroker-Image.png";
import AnimatedCounter from "./AnimatedCounter";
const Hero = () => {
  return (
    <section className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-6 pt-20 pb-28">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          All Types of Deep Cleaning —{" "}
          <span className="text-[#1c67d2]">Fast, Safe & Trusted</span>
        </h2>

        <p className="mt-4 text-slate-600 max-w-xl">
          Professional staff, eco-friendly products, and transparent pricing.
          <strong className="text-slate-800">
            {" "}
            • 5+ Years of Bold Experience
          </strong>
        </p>

        {/* Partners */}
        <div className="mt-6 flex items-center gap-6">
          <div className="text-sm font-semibold text-slate-500">
            Partner With
          </div>
          <img src={uc} alt="Urban Company" className="h-14 rounded-xl" />
          <img src={ht} alt="HomeTriangle" className="h-14 rounded-xl" />
          <img src={nb} alt="NoBroker" className="h-14 rounded-xl" />
        </div>

        {/* CTA */}
        <div className="mt-8 flex gap-4">
          <a
            href="#services"
            className="bg-gradient-to-r from-[#1c67d2] to-[#3295CF]
              text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition"
          >
            Book a Cleaning
          </a>
          <a
            href="#services"
            className="border border-slate-300 px-6 py-3 rounded-xl
              bg-white/70 backdrop-blur hover:bg-white transition"
          >
            Our Services
          </a>
        </div>

        {/* Stats */}
        <div className="mt-8 flex gap-10">
          <div>
            <div className="text-3xl font-bold text-[#1c67d2]">4.6</div>
            <div className="text-sm text-slate-500">Average rating</div>
          </div>
          <div>
            {/* <div className="text-3xl font-bold text-[#0F766E]">10,000+</div> */}
            <AnimatedCounter value={10000} />
            <span className="text-3xl font-bold text-[#1c67d2]">+</span>
            <div className="text-sm text-slate-500">Happy customers</div>
          </div>
        </div>
      </motion.div>

      {/* Images */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-[#bbdff4] rounded-full blur-3xl"></div>
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-[#cbe9fa] rounded-full blur-3xl"></div>

        <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/60">
          <motion.div
            className="flex"
            animate={{ x: ["0%", "-100%", "-200%", "0%"] }}
            transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
          >
            {[
              "1581578731548-c64695cc6952",
              "1600585154340-be6161a56a0c",
              "1581578731548-c64695cc6952",
            ].map((img) => (
              <img
                key={img}
                src={`https://images.unsplash.com/photo-${img}?auto=format&fit=crop&w=1200&q=80`}
                alt="Cleaning service"
                className="w-full h-[420px] object-cover flex-shrink-0"
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
