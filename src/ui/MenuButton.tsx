type AppProps = {
  children: string;
  onClick: () => void;
  isActive?: boolean;
};

export default function MenuButton({
  children,
  onClick,
  isActive = false,
}: AppProps) {
  return (
    <button
      className={`rounded-md px-4 py-3 md:text-2xl ${isActive ? "bg-secondary-900" : "bg-secondary-200 hover:bg-secondary-500"} `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
