type AppProps = {
  children: string;
  type?: "primary" | "secondary";
  size?: "normal" | "big";
};

export default function Button({
  children,
  type = "primary",
  size = "normal",
}: AppProps) {
  let classes = "";
  if (size === "normal") classes += "rounded-md ";
  if (size === "big") classes += "rounded-xl w-full ";

  if (type === "primary") classes += "bg-primary-500 hover:bg-primary-200 ";
  if (type === "secondary")
    classes += "bg-secondary-200 text-secondary-900 hover:bg-secondary-200 ";

  return (
    <button className={`max-w-lg px-7 py-3 ${classes}`}>{children}</button>
  );
}
