import OurServices from "./OurServices";
import OnDemandCleaning from "./OnDemandCleaning";
import { servicesData } from "../constants";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Trust from "../components/Trust";
import Shedule from "../components/Shedule";
import Footer from "../components/Footer";
import type { BookingItem, Service } from "../types/types";
import { useState } from "react";
import BookingSummary from "./BookingSummary";
import AboutUS from "./AboutUs";
import SocialBar from "../components/Socialbar";

export default function CleaningLanding() {
  const [booking, setBooking] = useState<BookingItem[]>([]);

  const addToBooking = (service: Service, price: number, qty: number) => {
    setBooking((prev) => {
      const existing = prev.find((i) => i.id === service.id);

      if (existing) {
        return prev.map((i) =>
          i.id === service.id ? { ...i, quantity: i.quantity + qty } : i,
        );
      }

      return [
        ...prev,
        {
          id: service.id,
          title: service.title.replace(/<[^>]*>/g, ""),
          price,
          quantity: qty,
        },
      ];
    });
  };

  const removeFromBooking = (id: string) =>
    setBooking((prev: any) => prev.filter((i: any) => i.id !== id));

  const clearBooking = () => setBooking([]);

  return (
    <div
      className="min-h-screen overflow-x-hidden bg-gradient-to-b  from-[#F3F4F1] via-[#EDEFEA] to-[#E3ECE9]
 text-[#0F172A]"
    >
      {/* Navbar */}
      <Nav />

      {/* Hero */}
      <Hero />

      {/* Services */}
      <OurServices onAdd={addToBooking} servicesData={servicesData} />

      <OnDemandCleaning />

      {/* Trust */}
      <Trust />

      {/* Content stays straight */}
      <section className="relative overflow-hidden">
        {/* Top diagonal cut background */}
        <div
          className="absolute inset-0 bg-gradient-to-r
    from-[#1c67d2] to-[#3295CF]"
          style={{
            clipPath: "polygon(0 30%, 100% 0%, 100% 70%, 0% 100%)",
          }}
        />
        <div className="relative">
          <BookingSummary
            booking={booking}
            onRemove={removeFromBooking}
            onClear={clearBooking}
          />
        </div>
      </section>

      <AboutUS />

      {/* CTA */}
      <Shedule />

      {/* Footer */}
      <Footer />

      {/* social bar */}
      <SocialBar />
    </div>
  );
}
