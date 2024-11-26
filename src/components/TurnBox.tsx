import { AnimatePresence, motion } from "motion/react";

type AppProps = {
  playerNum: number;
  moves: number;
  isActive?: boolean;
};

export default function TurnBox({
  playerNum,
  moves,
  isActive = false,
}: AppProps) {
  return (
    <div className="space-y-4">
      <div
        className={`relative flex flex-col items-center gap-[2px] rounded-sm p-2 py-[10px] transition duration-300 md:items-start md:gap-[5px] md:p-4 lg:min-h-[72px] lg:flex-row lg:items-center lg:justify-between ${isActive ? "bg-primary-500" : "bg-secondary-100"}`}
      >
        <div
          className={`text-[15px] lg:text-lg ${isActive ? "text-white" : "text-secondary-400"}`}
        >
          <span className="md:hidden">P{playerNum}</span>
          <span className="hidden md:inline">Player {playerNum}</span>
        </div>
        <div
          className={`text-2xl lg:text-[32px] ${isActive ? "text-white" : "text-secondary-900"}`}
        >
          {moves}
        </div>
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ rotateZ: 45, x: "-50%", y: "50%" }}
              animate={{ rotateZ: 45, x: "-50%", y: "-50%" }}
              exit={{ rotateZ: 45, x: "-50%", y: "50%" }}
              transition={{ duration: 0.1, ease: "linear" }}
              className="absolute left-1/2 top-0 -z-10 size-5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-primary-500"
            ></motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="hidden text-center lg:block">
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-[13px] uppercase tracking-[5px] text-secondary-900"
            >
              Current turn
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
