type AppProps = {
  children: React.ReactNode;
  show?: boolean;
  lastMatch?: boolean;
  disabled?: boolean;
  onClick: () => void;
};

export default function BoardCell({
  children,
  onClick,
  show = false,
  lastMatch = false,
  disabled = false,
}: AppProps) {
  return (
    <button
      className={`relative rounded-full text-2xl`}
      style={{
        paddingBottom: "100%",
      }}
      onClick={onClick}
      disabled={disabled || show}
    >
      <span
        style={{
          transform: `rotateY(${show ? "-180" : "0"}deg)`,
          backfaceVisibility: "hidden",
          perspective: "150rem",
        }}
        className={`absolute inset-0 rounded-full bg-secondary-900 transition duration-500 hover:bg-secondary-500`}
      ></span>
      <span
        className={`absolute inset-0 rounded-full transition duration-500 ${lastMatch ? "bg-primary-500" : "bg-secondary-200"}`}
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
    </button>
  );
}
