import { Badge } from "@/components/ui/badge";
import { Ship } from "lucide-react";

const vessels = [
  { name: "ALLIANZ INTERSPRAY", owner: "DMC", speed: "17.9kt", dir: "SW", type: "OTHER" },
  { name: "XIN QI MENG", owner: "CHINESE VSL/CREW", speed: "3.6kt", dir: "N", type: "CARGO" },
  { name: "UNIDENTIFIED", owner: "", speed: "8.1kt", dir: "NE", type: "DARK" },
  { name: "GAZ IMPERIAL", owner: "SHARJAH OPL", speed: "16.3kt", dir: "E", type: "TANKER" },
  { name: "AL WASL", owner: "", speed: "2.6kt", dir: "N", type: "OTHER" },
  { name: "BLUESHARK 14", owner: "", speed: "14.1kt", dir: "E", type: "OTHER" },
  { name: "UNIDENTIFIED", owner: "", speed: "23.8kt", dir: "SE", type: "DARK" },
];

const darkShips = [
  { speed: "0.0kt", dir: "N" },
  { speed: "8.1kt", dir: "NE" },
  { speed: "0.0kt", dir: "N" },
  { speed: "0.4kt", dir: "N" },
  { speed: "0.7kt", dir: "N" },
  { speed: "48.9kt", dir: "SW" },
  { speed: "0.8kt", dir: "N" },
  { speed: "0.0kt", dir: "S" },
  { speed: "1.2kt", dir: "NW" },
];

const typeBadgeStyles: Record<string, string> = {
  CARGO: "bg-accent/20 text-accent border-accent/30",
  TANKER: "bg-primary/20 text-primary border-primary/30",
  DARK: "bg-danger/20 text-danger border-danger/30",
  OTHER: "bg-muted text-muted-foreground border-border",
};

const StraitMap = () => {
  return (
    <div className="glass-card overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-border/50">
        <div className="flex items-center gap-3">
          <h2 className="text-sm font-semibold text-foreground">STRAIT OF HORMUZ</h2>
          <Badge className="bg-danger/20 text-danger border-danger/30 text-[10px] font-bold uppercase">
            Blockade Active
          </Badge>
        </div>
        <div className="hidden md:flex items-center gap-3">
          {[
            { color: "hsl(38,92%,55%)", label: "Tanker" },
            { color: "hsl(200,80%,55%)", label: "Cargo" },
            { color: "hsl(0,72%,55%)", label: "Dark ship" },
            { color: "hsl(142,60%,45%)", label: "Carrier" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
              <span className="text-[10px] text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px]">
        {/* Map embed */}
        <div className="h-[500px] relative">
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=49.0%2C24.0%2C60.0%2C28.0&layer=mapnik"
            className="w-full h-full border-0"
            title="Strait of Hormuz Map"
            loading="lazy"
          />
          {/* Overlay info */}
          <div className="absolute top-4 left-4 z-10 bg-card/90 backdrop-blur-sm border border-border/50 rounded-lg px-3 py-2">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-5 h-5 rounded bg-danger/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-danger animate-pulse" />
              </div>
              <span className="text-xs font-semibold text-foreground">BLOCKADE ZONE</span>
            </div>
            <span className="text-[10px] text-muted-foreground">Strait restricted — 2 transits today</span>
          </div>
          <div className="absolute top-4 right-4 z-10 bg-card/90 backdrop-blur-sm border border-primary/30 rounded-lg px-3 py-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-mono font-bold text-primary">46</span>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground block">Stranded</span>
                <span className="text-[10px] text-muted-foreground">vessels at anchor</span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 right-4 z-10 bg-card/90 backdrop-blur-sm border border-border/50 rounded-lg px-3 py-1.5 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="text-xs text-muted-foreground font-mono">61 tracked</span>
          </div>
          <div className="absolute bottom-4 left-4 z-10 bg-card/90 backdrop-blur-sm border border-border/50 rounded-lg px-3 py-1.5">
            <span className="text-[10px] text-muted-foreground">CVN-78 USS Gerald R. Ford on station</span>
          </div>
        </div>

        {/* Vessel Tracker Sidebar */}
        <div className="border-l border-border/50 overflow-y-auto max-h-[500px]">
          <div className="p-4 border-b border-border/50 flex items-center justify-between sticky top-0 bg-card/95 backdrop-blur-sm z-10">
            <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
              <Ship className="w-4 h-4 text-muted-foreground" />
              VESSEL TRACKER
            </h3>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-success" />
              <span className="text-[10px] text-muted-foreground font-mono">61 tracked</span>
            </div>
          </div>

          <TrackerSection title="TRANSITING" count={0}>
            <p className="text-xs text-muted-foreground italic px-4 py-2">No vessels currently transiting the strait</p>
          </TrackerSection>

          <TrackerSection title="APPROACHING" count={7}>
            {vessels.map((v, i) => (
              <VesselRow key={i} name={v.name} owner={v.owner} speed={v.speed} dir={v.dir} type={v.type} />
            ))}
          </TrackerSection>

          <TrackerSection title="ANCHORED / STRANDED" count={38}>
            <div className="px-4 py-2">
              <p className="text-xs text-muted-foreground">
                38 at anchor — <span className="text-primary">3 tankers (~Est. 3M bbl at risk)</span>
              </p>
            </div>
          </TrackerSection>

          <TrackerSection title="DARK SHIPS" count={9}>
            {darkShips.map((d, i) => (
              <VesselRow key={i} name="UNIDENTIFIED" speed={d.speed} dir={d.dir} type="DARK" />
            ))}
          </TrackerSection>
        </div>
      </div>
    </div>
  );
};

const TrackerSection = ({ title, count, children }: { title: string; count: number; children: React.ReactNode }) => (
  <div className="border-b border-border/30">
    <div className="px-4 py-2.5 flex items-center gap-2">
      <span className="text-[11px] font-semibold text-foreground tracking-wide">{title}</span>
      <span className="text-[10px] font-mono bg-secondary rounded px-1.5 py-0.5 text-muted-foreground">{count}</span>
    </div>
    {children}
  </div>
);

const VesselRow = ({ name, owner, speed, dir, type }: { name: string; owner?: string; speed: string; dir: string; type: string }) => (
  <div className="flex items-center justify-between px-4 py-2 hover:bg-secondary/30 transition-colors">
    <div>
      <span className={`text-xs font-semibold ${type === "DARK" ? "text-danger" : "text-foreground/90"}`}>{name}</span>
      {owner && <span className="block text-[10px] text-muted-foreground">{owner}</span>}
    </div>
    <div className="flex items-center gap-2">
      <span className="text-[10px] font-mono text-muted-foreground">{speed}</span>
      <span className="text-[10px] text-muted-foreground">{dir}</span>
      <Badge variant="outline" className={`text-[9px] px-1.5 py-0 h-4 ${typeBadgeStyles[type] || typeBadgeStyles.OTHER}`}>
        {type}
      </Badge>
    </div>
  </div>
);

export default StraitMap;
