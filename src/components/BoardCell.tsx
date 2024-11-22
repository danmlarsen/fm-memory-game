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
      className={`grid place-items-center rounded-full text-4xl transition duration-300 ${show ? (lastMatch ? "bg-primary-500" : "bg-secondary-200") : "bg-secondary-900 hover:bg-secondary-500"} `}
      onClick={onClick}
      disabled={disabled || show}
    >
      {show && children}
    </button>
  );
}
