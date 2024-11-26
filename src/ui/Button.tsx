type AppProps = {
  children: string;
  onClick: () => void;
  type?: "primary" | "secondary";
  size?: "normal" | "big";
};

export default function Button({
  children,
  onClick,
  type = "primary",
  size = "normal",
}: AppProps) {
  let classes = "";
  if (size === "normal") classes += "rounded-md ";
  if (size === "big") classes += "rounded-xl w-full md:text-xl ";

  if (type === "primary")
    classes += "text-gray-50 bg-primary-500 hover:bg-primary-200 ";
  if (type === "secondary")
    classes += "bg-secondary-100 text-secondary-700 hover:bg-secondary-200 ";

  return (
    <button
      className={`px-7 py-3 transition duration-300 ${classes}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
