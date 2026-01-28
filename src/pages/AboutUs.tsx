import { motion } from "framer-motion";
import founder from "../assets/team/founder.jpeg";
import coFounder from "../assets/team/cofounder.jpeg";
export default function AboutUS() {
  return (
    <section className="relative py-14 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-black text-slate-900">
            About <span className="text-[#0F766E]">My Cleaning Friend</span>
          </h2>

          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Cleaning services and solutions like never before.
          </p>

          <p className="mt-6 text-slate-600 leading-relaxed">
            At <strong>My Cleaning Friend</strong>, we are redefining
            cleanliness with a complete range of professional cleaning
            solutions. From homes and offices to industrial spaces and
            specialized facilities, we deliver reliable, high-quality, and
            transparent services designed to make every environment healthier,
            safer, and more welcoming.
          </p>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[
            {
              title: "Residential Cleaning",
              desc: "Deep cleaning, regular upkeep, and pest control for healthier homes",
            },
            {
              title: "Commercial Cleaning",
              desc: "Offices, shops, and corporate spaces maintained to the highest standards",
            },
            {
              title: "Industrial Cleaning",
              desc: "Heavy-duty cleaning for factories, warehouses, and production units",
            },
            {
              title: "Specialized Cleaning",
              desc: "Carpet, sofa, vehicle, and equipment cleaning with advanced techniques",
            },
            {
              title: "On-Demand Help",
              desc: "Quick, hassle-free cleaning support whenever you need it",
            },
          ].map((service) => (
            <div
              key={service.title}
              className="
    group relative rounded-[2.5rem] p-8
    bg-gradient-to-b from-white to-slate-50/50
    border-2 border-slate-500
    shadow-[0_10px_30px_-15px_rgba(15,118,110,0.1)]
    hover:shadow-[0_25px_60px_-12px_rgba(15,118,110,0.2)]
    hover:-translate-y-2
    transition-all duration-500 ease-out
    overflow-hidden
  "
            >
              {/* 1. Animated Gradient Glow (Visible on Hover) */}
              <div className="absolute -inset-24 bg-[radial-gradient(circle_at_center,#14B8A6_0%,transparent_70%)] opacity-0 group-hover:opacity-[0.08] transition-opacity duration-700 blur-3xl pointer-events-none" />

              {/* 2. Abstract Geometric Accent */}
              <div className="absolute top-[-10%] right-[-10%] w-32 h-32 bg-[#ECFEFF] rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* 3. Icon Bubble with Glass Effect */}
              <div
                className="
      relative z-10 w-14 h-14 mb-6 rounded-2xl
      bg-gradient-to-br from-[#0F766E] to-[#14B8A6]
      text-white shadow-lg shadow-[#0F766E]/20
      flex items-center justify-center
      text-xl transform rotate-[-5deg]
      group-hover:rotate-0 group-hover:scale-110
      transition-all duration-500
    "
              >
                <div className="absolute inset-0 bg-white/20 rounded-2xl blur-[2px] group-hover:blur-0 transition-all" />
                <span className="relative font-black">✓</span>
              </div>

              {/* 4. Content with Refined Typography */}
              <div className="relative z-10">
                <h4 className="font-black text-slate-900 text-xl tracking-tight group-hover:text-[#0F766E] transition-colors duration-300">
                  {service.title}
                </h4>

                <p className="mt-3 text-sm text-slate-500 leading-relaxed font-medium">
                  {service.desc}
                </p>

                {/* 5. Subtle "Learn More" or Progress Indicator */}
                <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <span className="h-[2px] w-8 bg-[#14B8A6] rounded-full" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#0F766E]">
                    Explore Service
                  </span>
                </div>
              </div>

              {/* 6. High-End Border Light Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#14B8A6]/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </div>
          ))}
        </motion.div>

        {/* Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-28"
        >
          <h3 className="text-3xl text-center font-black text-slate-900 mb-6">
            Our Leadership <span className="text-[#0F766E]">Team</span>
          </h3>
          <div className="grid sm:grid-cols-2 gap-16 max-w-4xl mx-auto py-20 px-4">
            {[
              {
                name: "Hemant Kapade",
                role: "Founder",
                image: founder,
                instagram: "https://instagram.com/hemant_kapade",
                linkedin: "https://linkedin.com/in/hemant-kapade1",
                email: "mailto:hemantgkapade@gmail.com",
              },
              {
                name: "Ramkrushn Dhorajkar",
                role: "Co-Founder",
                image: coFounder,
                instagram: "https://instagram.com/vishaldhorajkar",
                linkedin: "https://linkedin.com/in",
                email: "mailto:ramkrushndhorajkar123@gmail.com",
              },
            ].map((leader) => (
              <motion.div
                key={leader.name}
                whileHover={{ y: -10 }}
                className="
        relative group bg-white rounded-[2rem] p-8
        border border-slate-100
        shadow-[0_20px_50px_-20px_rgba(15,118,110,0.15)]
        hover:shadow-[0_40px_80px_-20px_rgba(15,118,110,0.25)]
        transition-all duration-500
      "
              >
                {/* FLOATING PHOTO */}
                <div className="relative -mt-20 mx-auto w-32 h-32 overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-teal-900/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* CONTENT */}
                <div className="pt-6 text-center">
                  <h4 className="text-2xl font-bold text-slate-900 tracking-tight">
                    {leader.name}
                  </h4>
                  <span className="inline-block mt-2 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0F766E] bg-teal-50 rounded-full">
                    {leader.role}
                  </span>

                  {/* SOCIAL ICONS */}
                  <div className="mt-8 flex justify-center gap-4">
                    {/* Instagram */}
                    <a
                      href={leader.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-50 text-[#E1306C] hover:text-[#E1306C] hover:bg-white hover:shadow-md transition-all duration-300"
                      aria-label="Instagram"
                    >
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>

                    {/* LinkedIn */}
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-50 text-[#0A66C2] hover:text-[#0A66C2] hover:bg-white hover:shadow-md transition-all duration-300"
                      aria-label="LinkedIn"
                    >
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>

                    {/* Email */}
                    <a
                      href={leader.email}
                      className="p-2.5 rounded-xl bg-slate-50 text-[#0F766E] hover:text-[#0F766E] hover:bg-white hover:shadow-md transition-all duration-300"
                      aria-label="Email"
                    >
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c1.1 0 2 .9 2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
