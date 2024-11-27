export default function MenuItem({
  name,
  children,
  gap = "gap-3 md:gap-[1.875rem]",
}: {
  name: string;
  children: React.ReactNode;
  gap?: string;
}) {
  return (
    <div className="space-y-3">
      <label className="text-[0.9375rem] leading-[1.1875rem] md:text-xl">
        {name}
      </label>
      <div className={`grid auto-cols-fr grid-flow-col text-white ${gap}`}>
        {children}
      </div>
    </div>
  );
}
