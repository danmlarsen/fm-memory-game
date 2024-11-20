type AppProps = {
  children: string;
  isActive?: boolean;
};

export default function MenuButton({ children, isActive = false }: AppProps) {
  return (
    <button
      className={`rounded-md px-4 py-3 ${isActive ? "bg-secondary-900" : "bg-secondary-200 hover:bg-secondary-500"} `}
    >
      {children}
    </button>
  );
}
