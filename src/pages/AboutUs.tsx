import { motion } from "framer-motion";

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

          <div className="grid sm:grid-cols-2 gap-10 max-w-4xl mx-auto py-4">
            {[
              {
                name: "Hemant Kapade",
                role: "Founder",
                image: "https://picsum.photos/id/1018/600/400", // Replace with your actual image path
              },
              {
                name: "Ramkrushn Dhorajkar",
                role: "Co-Founder",
                image: "https://picsum.photos/id/1018/600/400", // Replace with your actual image path
              },
            ].map((leader) => (
              <div
                key={leader.name}
                className="
        group relative flex items-center gap-6 
        bg-white p-4 pr-10 rounded-[2.5rem]
        shadow-[0_4px_20px_rgba(0,0,0,0.03)]
        hover:shadow-[0_30px_60px_-15px_rgba(15,118,110,0.15)]
        hover:-translate-y-2 transition-all duration-500 ease-out
      "
              >
                {/* 1. Image Container with Double Ring */}
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0F766E] to-[#14B8A6] rounded-[2rem] rotate-6 group-hover:rotate-12 transition-transform duration-500 opacity-20" />

                  <div className="relative w-24 h-24 rounded-[1.8rem] overflow-hidden border-4 border-white shadow-md bg-slate-100">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  {/* Status indicator / Accent dot */}
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                  </div>
                </div>

                {/* 2. Content */}
                <div className="flex flex-col">
                  <span className="text-[16px] font-black uppercase tracking-[0.2em] text-[#14B8A6] mb-1">
                    {leader.role}
                  </span>
                  <h4 className="font-bold text-slate-900 text-xl tracking-tight leading-tight">
                    {leader.name}
                  </h4>

                  {/* Subtle Social Line */}
                  <div className="mt-3 flex gap-3">
                    <div className="h-[1px] w-6 bg-slate-200 group-hover:w-12 group-hover:bg-[#14B8A6] transition-all duration-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
