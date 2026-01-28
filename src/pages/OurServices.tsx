import { useState } from "react";
import ServiceCard from "../components/ServiceCards";
import ServiceModal from "../components/ServiceModal";
import type { Service } from "../types/types";
import { motion } from "framer-motion";

interface OurServicesProps {
  servicesData: Service[];
  onAdd: (service: Service, price: number, qty: number) => void;
}

const OurServices: React.FC<OurServicesProps> = ({ servicesData, onAdd }) => {
  const [activeService, setActiveService] = useState<Service | null>(null);

  return (
    <>
      <section
        id="services"
        className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-20"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center mb-10"
        >
          Our professional <span className="text-[#0F766E]">Services</span>
        </motion.h2>

        {/* ✅ MOBILE: 2 cards per row */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 lg:gap-10">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onClick={setActiveService}
              onAdd={onAdd}
            />
          ))}
        </div>
      </section>

      <ServiceModal
        service={activeService}
        onClose={() => setActiveService(null)}
        onAdd={onAdd}
      />
    </>
  );
};

export default OurServices;
