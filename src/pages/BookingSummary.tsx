import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface BookingItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
}

interface BookingSummaryProps {
  booking: BookingItem[];
  onRemove: (id: string) => void;
  onClear: () => void;
}

const BookingSummary = ({
  booking,
  onRemove,
  onClear,
}: BookingSummaryProps) => {
  const subtotal = booking.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const hasItems = booking.length > 0;

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const applyCoupon = () => {
    if (coupon.toUpperCase() === "CLEAN10") {
      setDiscount(subtotal * 0.1); // 10%
    } else if (coupon.toUpperCase() === "FIRST50") {
      setDiscount(50);
    } else {
      setDiscount(0);
      alert("Invalid coupon");
    }
  };

  const totalPayable = Math.max(subtotal - discount, 0);

  const whatsappMessage = `
New Cleaning Booking

Name: ${name}
Mobile: ${mobile}
Address: ${address}

Services:
${booking
  .map((i) => `• ${i.title} × ${i.quantity} = ₹${i.price * i.quantity}`)
  .join("\n")}

Subtotal: ₹${subtotal}
Discount: ₹${discount.toFixed(0)}
Total Payable: ₹${totalPayable.toFixed(0)}
`;

  return (
    /* 1. WRAPPER FOR CENTERING AND WIDTH */
    <div className="w-full flex justify-center py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        /* 2. UPDATED WIDTH: max-w-2xl makes it wider, mx-auto centers it */
        className="relative w-full max-w-2xl bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-[32px] shadow-2xl shadow-slate-200/50 flex flex-col overflow-hidden font-sans"
      >
        {/* Header Section */}
        <div className="p-8 pb-4 flex items-center justify-between border-b border-slate-50">
          <div>
            <h3 className="text-2xl font-black text-slate-900 leading-none">
              Booking Summary
            </h3>
            <p className="text-sm text-slate-500 mt-2 font-medium">
              Review your selected services below
            </p>
          </div>
          {hasItems && (
            <button
              onClick={onClear}
              className="px-2 py-2 text-[11px] font-bold uppercase tracking-widest text-red-500 bg-red-50 hover:bg-red-100 rounded-full transition-all"
            >
              Clear All
            </button>
          )}
        </div>

        {/* Items List Area */}
        <div className="flex-1 px-8 py-6 space-y-4 min-h-[300px] overflow-y-auto">
          {!hasItems ? (
            <div className="flex flex-col items-center justify-center h-full py-16 opacity-60">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-4 border border-slate-100 text-3xl">
                🛒
              </div>
              <p className="text-slate-900 font-bold text-lg">
                Your cart is empty
              </p>
              <p className="text-slate-400 text-sm text-center mt-1">
                Add some services to get started.
              </p>
            </div>
          ) : (
            <AnimatePresence mode="popLayout">
              {booking.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="group flex items-center justify-between p-4 bg-white border border-slate-100 rounded-2xl hover:border-[#1c67d2] hover:shadow-xl hover:shadow-[#daedf9] transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#daedf9] text-[#1c67d2] rounded-xl flex items-center justify-center font-black text-base border border-[#3295CF]-100/50">
                      {item.quantity}x
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-base leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-xs font-medium text-slate-400 mt-1">
                        Price per unit: ₹{item.price}
                      </p>
                    </div>
                  </div>
                  <div className="text-right flex flex-col items-end">
                    <span className="font-black text-slate-900 text-lg">
                      ₹{item.price * item.quantity}
                    </span>
                    <button
                      onClick={() => onRemove(item.id)}
                      className="text-[11px] font-semibold  text-red-500 transition-colors uppercase mt-1 tracking-tight"
                    >
                      Remove Item
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </div>

        {/* --- YOUR INFORMATION SECTION START --- */}
        <div className="px-8 pb-8">
          <div className="p-6 bg-slate-50/50 border border-slate-200/50 rounded-[2rem] space-y-5">
            {/* Section Header */}
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-[10px] shadow-lg">
                👤
              </div>
              <h4 className="font-black text-slate-900 uppercase tracking-[0.15em] text-[11px]">
                Customer Information
              </h4>
            </div>

            {/* Input Group */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Name Input */}
              <div className="relative group">
                <input
                  type="text"
                  id="fullname"
                  placeholder=" " /* MUST BE A SINGLE SPACE */
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="peer w-full bg-white border border-slate-200 rounded-2xl px-4 py-4 text-sm font-bold outline-none 
          focus:border-[#1c67d2] focus:ring-4 focus:ring-[#14B8A6]/5 transition-all shadow-sm"
                />
                <label
                  htmlFor="fullname"
                  className="absolute rounded-full left-4 top-4 text-slate-400 text-sm font-medium transition-all duration-200
          pointer-events-none
          peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-[10px] peer-focus:font-black peer-focus:text-[#1c67d2] peer-focus:bg-white peer-focus:px-2 peer-focus:rounded-full
          peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:font-black peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2"
                >
                  FULL NAME
                </label>
              </div>

              {/* Mobile Input */}
              <div className="relative group">
                <input
                  type="tel"
                  id="mobile"
                  placeholder=" " /* MUST BE A SINGLE SPACE */
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="peer w-full bg-white border border-slate-200 rounded-2xl px-4 py-4 text-sm font-bold outline-none 
          focus:border-[#1c67d2] focus:ring-4 focus:ring-[#14B8A6]/5 transition-all shadow-sm"
                />
                <label
                  htmlFor="mobile"
                  className="absolute rounded-full left-4 top-4 text-slate-400 text-sm font-medium transition-all duration-200
          pointer-events-none
          peer-focus:-top-2.5 peer-focus:rounded-full peer-focus:left-3 peer-focus:text-[10px] peer-focus:font-black peer-focus:text-[#1c67d2] peer-focus:bg-white peer-focus:px-2
          peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:font-black peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2"
                >
                  MOBILE NUMBER
                </label>
              </div>

              {/* Address Textarea */}
              <div className="relative group md:col-span-2">
                <textarea
                  id="address"
                  placeholder=" " /* MUST BE A SINGLE SPACE */
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  rows={2}
                  className="peer w-full  bg-white border border-slate-200 rounded-2xl px-4 py-4 text-sm font-bold outline-none 
          focus:border-[#1c67d2] focus:ring-4 focus:ring-[#14B8A6]/5 transition-all shadow-sm resize-none"
                />
                <label
                  htmlFor="address"
                  className="absolute rounded-full left-4 top-4 text-slate-400 text-sm font-medium transition-all duration-200
          pointer-events-none
          peer-focus:-top-2.5 peer-focus:rounded-full peer-focus:left-3 peer-focus:text-[10px] peer-focus:font-black peer-focus:text-[#1c67d2] peer-focus:bg-white peer-focus:px-2
          peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:font-black peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2"
                >
                  COMPLETE ADDRESS
                </label>
              </div>
            </div>

            {/* Coupon Bar */}
            {/* Updated Responsive Coupon Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 p-1.5 bg-white border border-slate-200 rounded-2xl sm:rounded-full shadow-inner focus-within:border-[#1c67d2] transition-colors">
              <div className="flex items-center flex-1">
                <div className="pl-3 text-slate-400">🏷️</div>
                <input
                  placeholder="COUPON CODE"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  className="w-full bg-transparent px-2 py-3 sm:py-2 text-xs font-black uppercase tracking-widest outline-none placeholder:text-slate-300"
                />
              </div>
              <button
                onClick={applyCoupon}
                className="px-6 py-3 sm:py-2.5 rounded-xl sm:rounded-xl bg-slate-900 hover:bg-black text-white text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 shadow-lg shadow-slate-200 whitespace-nowrap"
              >
                Apply Coupon
              </button>
            </div>
          </div>
        </div>
        {/* --- YOUR INFORMATION SECTION END --- */}

        {/* Pricing & CTA Section */}
        <div className="p-8 bg-slate-50/50 border-t border-slate-100 space-y-6">
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            {discount > 0 && (
              <div className="flex justify-between text-emerald-600 font-semibold">
                <span>Discount</span>
                <span>-₹{discount.toFixed(2)}</span>
              </div>
            )}

            <div className="flex justify-between items-center pt-2">
              <span className="text-lg font-bold">Total</span>
              <span className="text-3xl font-black text-[#1c67d2]">
                ₹{totalPayable.toFixed(0)}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <motion.a
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              href={`https://wa.me/917030500240?text=${encodeURIComponent(
                whatsappMessage,
              )}`}
              target="_blank"
              onClick={(e) => {
                if (!name || !mobile || !address || !hasItems) {
                  e.preventDefault();
                  alert("Please fill all details before confirming");
                }
              }}
              className="md:col-span-2 flex items-center justify-center gap-3 py-2  bg-gradient-to-r from-[#1c67d2] to-[#3295CF] text-white rounded-2xl font-bold text-sm shadow-xl shadow-[#b0d8ef] transition-all"
            >
              <span>Confirm Booking</span>
              <span className="text-lg">→</span>
            </motion.a>

            <a
              href="tel:+917030500240"
              className="flex items-center justify-center gap-2 py-4 bg-white border border-slate-200 text-slate-700 rounded-2xl text-xs font-bold hover:bg-slate-100 transition-colors"
            >
              📞 Call Now
            </a>
            <a
              href="mailto:mycleaningfriend@gmail.com"
              className="flex items-center justify-center gap-2 py-4 bg-white border border-slate-200 text-slate-700 rounded-2xl text-xs font-bold hover:bg-slate-100 transition-colors"
            >
              ✉ Email
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BookingSummary;
