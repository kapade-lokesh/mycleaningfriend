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
      <section id="services" className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our professional <span className="text-[#0F766E]">Services</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
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
