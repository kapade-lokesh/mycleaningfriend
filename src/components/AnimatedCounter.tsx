import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const AnimatedCounter = ({ value }: { value: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    Math.round(latest).toLocaleString(),
  );

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 1.4,
      ease: "easeOut",
    });

    return controls.stop;
  }, [value]);

  return (
    <motion.span className="text-3xl font-bold text-[#0F766E] inline-block">
      {rounded}
    </motion.span>
  );
};

export default AnimatedCounter;
