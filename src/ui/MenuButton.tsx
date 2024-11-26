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
      className={`rounded-md px-4 py-3 transition duration-300 md:text-[26px] md:leading-8 ${isActive ? "bg-secondary-900" : "bg-secondary-200 md:hover:bg-secondary-500"} `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
