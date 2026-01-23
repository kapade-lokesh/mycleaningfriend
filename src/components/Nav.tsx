import { motion } from "framer-motion";
import mf from "../assets/logos/My-Ceaning-Friend-Logo.png";
const Nav = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 flex items-center justify-between px-6 py-2 max-w-7xl mx-auto
        bg-white/70 backdrop-blur-xl border-b border-[#E5E7EB] shadow-sm rounded-b-2xl"
    >
      {/* <h1 className="text-2xl font-bold text-[#0F766E]">CleanCare</h1> */}
      <img src={mf} alt="Urban Company" className="h-16 rounded-xl" />
      <a
        href="tel:+919876543210"
        className="flex items-center gap-2 border border-[#0F766E]/30 text-[#0F766E]
          px-5 py-2 rounded-xl shadow hover:shadow-md hover:border-[#0F766E] transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.5 4.493a1 1 0 01-.502 1.21l-2.257 1.128a11.042 11.042 0 005.516 5.516l1.128-2.257a1 1 0 011.21-.502l4.493 1.5a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        <span className="font-medium">+91 98765 43210</span>
      </a>
    </motion.nav>
  );
};

export default Nav;
