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
      className={`relative grid place-items-center overflow-hidden rounded-full text-2xl transition duration-300 ${show ? (lastMatch ? "bg-primary-500" : "bg-secondary-200") : "bg-secondary-900 hover:bg-secondary-500"} `}
      style={{ paddingBottom: "100%" }}
      onClick={onClick}
      disabled={disabled || show}
    >
      <span className="absolute inset-0 grid place-items-center">
        {show && children}
      </span>
    </button>
  );
}
