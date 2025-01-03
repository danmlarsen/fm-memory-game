type AppProps = {
  children: string;
  onClick: () => void;
  type?: "primary" | "secondary";
  size?: "normal" | "big" | "huge";
};

export default function Button({
  children,
  onClick,
  type = "primary",
  size = "normal",
}: AppProps) {
  let classes = "";
  if (size === "normal") classes += "rounded-md md:text-xl ";
  if (size === "big")
    classes +=
      "rounded-xl w-full text-lg md:text-[1.25rem] md:leading-[1.5625rem] ";
  if (size === "huge")
    classes += "rounded-xl w-full text-lg md:text-[2rem] md:leading-10 ";

  if (type === "primary")
    classes += "text-gray-50 bg-primary-500 hover:bg-primary-200 ";
  if (type === "secondary")
    classes += "bg-secondary-100 text-secondary-700 hover:bg-secondary-200 ";

  return (
    <button
      className={`px-7 py-3 transition duration-300 focus:outline-none focus-visible:ring focus-visible:ring-secondary-900 focus-visible:ring-offset-2 ${classes}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
