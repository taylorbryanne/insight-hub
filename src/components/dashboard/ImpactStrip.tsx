import { AlertTriangle, Clock, Gauge, Fuel, Banknote } from "lucide-react";

const ImpactStrip = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
      {/* STATUS */}
      <div className="glass-card p-4 border-b-2 border-danger">
        <div className="flex items-center gap-2 mb-2">
          <AlertTriangle className="w-4 h-4 text-danger" />
          <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Status</span>
        </div>
        <span className="font-mono text-2xl font-bold text-danger tracking-tight">BLOCKED</span>
        <p className="text-[10px] text-muted-foreground mt-1">Full naval blockade active</p>
      </div>

      {/* DAY */}
      <div className="glass-card p-4 border-b-2 border-primary">
        <div className="flex items-center gap-2 mb-2">
          <Clock className="w-4 h-4 text-primary" />
          <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Crisis Day</span>
        </div>
        <span className="font-mono text-2xl font-bold text-foreground tracking-tight">DAY 19</span>
        <p className="text-[10px] text-muted-foreground mt-1">Since Feb 28, 2026</p>
      </div>

      {/* ESCALATION */}
      <div className="glass-card p-4 border-b-2 border-primary">
        <div className="flex items-center gap-2 mb-2">
          <Gauge className="w-4 h-4 text-primary" />
          <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Escalation</span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="font-mono text-2xl font-bold text-primary tracking-tight">7.5</span>
          <span className="text-sm text-muted-foreground font-mono">/ 10</span>
        </div>
        <p className="text-[10px] text-muted-foreground mt-1">Worsening trend</p>
      </div>

      {/* BRENT */}
      <div className="glass-card p-4 border-b-2 border-success">
        <div className="flex items-center gap-2 mb-2">
          <Fuel className="w-4 h-4 text-success" />
          <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Brent Crude</span>
        </div>
        <span className="font-mono text-2xl font-bold text-success tracking-tight">$94.40</span>
        <p className="text-[10px] text-danger mt-1 font-medium">+32.4% vs pre-crisis</p>
      </div>

      {/* ECONOMIC DAMAGE */}
      <div className="glass-card p-4 border-b-2 border-accent col-span-2 sm:col-span-1">
        <div className="flex items-center gap-2 mb-2">
          <Banknote className="w-4 h-4 text-accent" />
          <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Global Impact</span>
        </div>
        <span className="font-mono text-2xl font-bold text-accent tracking-tight">$76B</span>
        <p className="text-[10px] text-muted-foreground mt-1">$4B / day × 19 days</p>
      </div>
    </div>
  );
};

export default ImpactStrip;
