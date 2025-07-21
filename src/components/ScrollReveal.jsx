import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "motion/react";

function ScrollReveal({ children }) {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInview) {
      mainControls.start("visible");
    }
  }, [isInview, mainControls]);
  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 45 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
export default ScrollReveal;
