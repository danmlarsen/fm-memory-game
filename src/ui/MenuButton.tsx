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
      className={`flex min-h-10 items-center justify-center rounded-md px-4 transition duration-300 focus:outline-none focus-visible:ring focus-visible:ring-secondary-900 focus-visible:ring-offset-2 md:min-h-[52px] md:text-[26px] md:leading-8 ${isActive ? "bg-secondary-900" : "bg-secondary-200 md:hover:bg-secondary-500"} `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
