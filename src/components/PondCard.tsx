import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PondCardProps {
  name: string;
  status: "stable" | "attention";
  doc: number;
  sr: number;
  abw: number;
  fcr?: number;
  phMorning?: number;
  onViewDetail: (pondName: string) => void;
}

const PondCard = ({ name, status, doc, sr, abw, fcr, phMorning, onViewDetail }: PondCardProps) => {
  const isAttention = status === "attention";

  return (
    <div className={`bg-card rounded-lg shadow-md p-6 border-l-4 transition-all duration-300 ${
      isAttention
        ? "border-destructive animate-pulse hover:shadow-lg"
        : "border-success hover:shadow-lg"
    }`}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-foreground">{name}</h3>
        <Badge
          variant={isAttention ? "destructive" : "default"}
          className={isAttention ? "" : "bg-success text-success-foreground"}
        >
          {isAttention ? "Perlu Perhatian!" : "Stabil"}
        </Badge>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center pt-2 border-t border-border">
        <div>
          <p className="text-xs text-muted-foreground">DOC</p>
          <p className="font-semibold text-lg text-foreground">{doc}</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">SR</p>
          <p className="font-semibold text-lg text-foreground">{sr.toFixed(1)} %</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">ABW</p>
          <p className="font-semibold text-lg text-foreground">{abw.toFixed(1)} gr</p>
        </div>
        <div>
          {phMorning ? (
            <>
              <p className="text-xs text-destructive font-bold">pH Pagi</p>
              <p className="font-semibold text-lg text-destructive">{phMorning}</p>
            </>
          ) : (
            <>
              <p className="text-xs text-muted-foreground">FCR</p>
              <p className="font-semibold text-lg text-foreground">{fcr?.toFixed(2)}</p>
            </>
          )}
        </div>
      </div>

      <Button
        onClick={() => onViewDetail(name)}
        className={`mt-4 w-full transition-all duration-300 ${
          isAttention
            ? "bg-destructive/10 hover:bg-destructive/20 text-destructive border-destructive/20"
            : "bg-muted hover:bg-accent text-primary"
        }`}
        variant="outline"
      >
        Lihat Detail →
      </Button>
    </div>
  );
};

export default PondCard;