import { Badge } from "@/components/ui/badge";
import { Shield, Activity, Clock } from "lucide-react";

const DashboardHeader = () => {
  return (
    <header className="glass-card p-6 glow-amber">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
            <Shield className="w-5 h-5 text-primary" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-xl font-bold text-foreground tracking-tight">
                STRAIT OF HORMUZ LIVE
              </h1>
              <Badge variant="outline" className="border-primary/40 text-primary text-[10px] font-semibold uppercase">
                Live
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground max-w-2xl">
              Elevated blockade persists — The Strait remains heavily restricted on day 19, with only 2 vessel transits versus a pre-crisis average of 67.1.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-6 shrink-0">
          <StatusPill icon={<Clock className="w-3.5 h-3.5" />} label="Day" value="19" />
          <StatusPill icon={<Activity className="w-3.5 h-3.5" />} label="Risk" value="7.5 / 10" variant="warning" />
          <StatusPill label="Oil Price" value="$94.40" variant="danger" />
        </div>
      </div>
    </header>
  );
};

const StatusPill = ({ icon, label, value, variant = "default" }: {
  icon?: React.ReactNode;
  label: string;
  value: string;
  variant?: "default" | "warning" | "danger";
}) => {
  const colorMap = {
    default: "text-foreground",
    warning: "text-primary",
    danger: "text-danger",
  };

  return (
    <div className="text-center">
      <div className="flex items-center gap-1.5 justify-center mb-0.5">
        {icon && <span className="text-muted-foreground">{icon}</span>}
        <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">{label}</span>
      </div>
      <span className={`font-mono text-lg font-bold ${colorMap[variant]}`}>{value}</span>
    </div>
  );
};

export default DashboardHeader;
