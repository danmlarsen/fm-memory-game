type AppProps = {
  children: React.ReactNode;
  show?: boolean;
  disabled?: boolean;
  onClick: () => void;
};

export default function BoardCell({
  children,
  onClick,
  show = false,
  disabled = false,
}: AppProps) {
  return (
    <button
      className={`grid place-items-center rounded-full text-4xl transition duration-300 ${show ? "bg-secondary-200" : "bg-secondary-900 hover:bg-secondary-500"} `}
      onClick={onClick}
      disabled={disabled}
    >
      {show && children}
    </button>
  );
}
