import { motion } from "motion/react";

type AppProps = {
  children: React.ReactNode;
  show?: boolean;
  lastMatch?: boolean;
  disabled?: boolean;
  onClick: () => void;
};

const cellVariants = {
  hide: { opacity: 0, y: "-25px", scale: 1.05 },
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
      className={`relative rounded-full`}
      style={{
        paddingBottom: "100%",
      }}
      onClick={onClick}
      disabled={disabled || show}
    >
      <span
        className={`absolute inset-0 rounded-full bg-secondary-900 shadow-xl transition duration-500 md:hover:bg-secondary-500`}
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
      <span
        className={`absolute left-1/2 top-1/2 transition duration-500`}
        style={{
          transform: `translate(-50%, -50%) rotateY(${show ? "0" : "180"}deg)`,
          backfaceVisibility: "hidden",
          perspective: "150rem",
        }}
      >
        {children}
      </span>
    </motion.button>
  );
}
