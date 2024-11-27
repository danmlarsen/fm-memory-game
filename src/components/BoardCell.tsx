import { AnimatePresence, motion } from "motion/react";

type AppProps = {
  children: React.ReactNode;
  show?: boolean;
  lastMatch?: boolean;
  disabled?: boolean;
  onClick: () => void;
};

const cellVariants = {
  hide: { opacity: 0, y: "-1.5625rem", scale: 1.05 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      ease: "easeInOut",
    },
  },
};

export default function BoardCell({
  children,
  onClick,
  show = false,
  lastMatch = false,
  disabled = false,
}: AppProps) {
  return (
    <motion.button
      variants={cellVariants}
      className={`group relative rounded-full`}
      style={{
        paddingBottom: "100%",
      }}
      onClick={onClick}
      disabled={disabled || show}
      aria-label={show ? "" : "Hidden cell"}
    >
      <span
        className={`absolute inset-0 rounded-full bg-secondary-900 shadow-xl transition duration-500 group-focus:outline-none group-focus-visible:ring group-focus-visible:ring-secondary-900 group-focus-visible:ring-offset-2 md:hover:bg-secondary-500`}
        style={{
          transform: `rotateY(${show ? "-180" : "0"}deg)`,
          backfaceVisibility: "hidden",
          perspective: "150rem",
        }}
      ></span>
      <span
        className={`absolute inset-0 rounded-full shadow-xl transition duration-500 ${lastMatch ? "bg-primary-500" : "bg-secondary-200"}`}
        style={{
          transform: `rotateY(${show ? "0" : "180"}deg)`,
          backfaceVisibility: "hidden",
          perspective: "150rem",
        }}
      ></span>

      <AnimatePresence>
        {show && (
          <motion.span
            initial={{ x: "-50%", y: "-50%", rotateY: "180deg" }}
            animate={{ x: "-50%", y: "-50%", rotateY: "0deg" }}
            exit={{ x: "-50%", y: "-50%", rotateY: "180deg" }}
            transition={{ duration: 0.5 }}
            className={`absolute left-1/2 top-1/2`}
            style={{
              backfaceVisibility: "hidden",
              perspective: "150rem",
            }}
          >
            {children}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
