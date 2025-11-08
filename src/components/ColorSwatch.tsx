import { cn } from "@/lib/utils";

interface ColorSwatchProps {
  name: string;
  hex: string;
  description: string;
  className?: string;
}

const ColorSwatch = ({ name, hex, description, className }: ColorSwatchProps) => {
  return (
    <div className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card">
      <div 
        className={cn("w-20 h-20 rounded-md border-2 border-border flex-shrink-0", className)}
        style={{ backgroundColor: hex }}
      />
      <div className="flex-1">
        <h3 className="font-semibold text-foreground">{name}</h3>
        <p className="text-sm text-muted-foreground font-mono">{hex}</p>
        <p className="text-sm text-foreground mt-1">{description}</p>
      </div>
    </div>
  );
};

export default ColorSwatch;
