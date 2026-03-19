import { Ship, ArrowRight } from "lucide-react";

const vessels = [
  { name: "MT Pacific Dawn", flag: "🇸🇬", status: "Transiting", eta: "2h 15m" },
  { name: "MT Arabian Gulf", flag: "🇦🇪", status: "Anchored", eta: "Waiting" },
  { name: "MT Nordic Spirit", flag: "🇳🇴", status: "Approaching", eta: "4h 30m" },
  { name: "MT Eastern Star", flag: "🇯🇵", status: "Diverted", eta: "N/A" },
  { name: "MT Coral Sea", flag: "🇰🇷", status: "Queued", eta: "8h 00m" },
];

const statusColor: Record<string, string> = {
  Transiting: "text-success",
  Anchored: "text-primary",
  Approaching: "text-accent",
  Diverted: "text-danger",
  Queued: "text-muted-foreground",
};

const VesselTracker = () => {
  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="section-title">Vessel Tracker</h2>
        <Ship className="w-4 h-4 text-muted-foreground" />
      </div>
      <div className="space-y-2">
        {vessels.map((v) => (
          <div key={v.name} className="flex items-center justify-between p-3 rounded-lg bg-secondary/40 hover:bg-secondary/60 transition-colors">
            <div className="flex items-center gap-3">
              <span className="text-base">{v.flag}</span>
              <div>
                <span className="text-sm font-medium text-foreground/90">{v.name}</span>
                <span className={`block text-[10px] font-medium uppercase tracking-wider ${statusColor[v.status]}`}>{v.status}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="font-mono">{v.eta}</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VesselTracker;
