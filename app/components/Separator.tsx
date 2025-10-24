interface SeparatorProps {
  gap?: string;
  width?: string;
  position?: "start" | "center" | "end";
}

export default function Separator({
  gap = "h-36",
  width = "w-full",
  position = "center",
}: SeparatorProps) {
  return (
    <div className={`${gap} ${width} flex items-${position} justify-center`}>
      <div className="border border-white w-full h-[1px]" />
    </div>
  );
}
