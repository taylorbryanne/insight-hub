import { DollarSign, Truck, BarChart3, Globe2 } from "lucide-react";

const impacts = [
  { icon: DollarSign, label: "Economic Impact", value: "$113M", sublabel: "Daily losses est.", variant: "primary" as const },
  { icon: Truck, label: "Supply Disruption", value: "87%", sublabel: "Route utilization drop", variant: "danger" as const },
  { icon: BarChart3, label: "Market Volatility", value: "+32.4%", sublabel: "VIX increase", variant: "warning" as const },
  { icon: Globe2, label: "Affected Nations", value: "49", sublabel: "Import-dependent countries", variant: "accent" as const },
];

const variantMap = {
  primary: "text-primary",
  danger: "text-danger",
  warning: "text-primary",
  accent: "text-accent",
};

const ImpactGrid = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {impacts.map((item) => (
        <div key={item.label} className="glass-card p-5 text-center">
          <item.icon className={`w-5 h-5 mx-auto mb-3 ${variantMap[item.variant]}`} />
          <span className={`stat-value block ${variantMap[item.variant]}`}>{item.value}</span>
          <span className="text-xs text-muted-foreground mt-1 block">{item.sublabel}</span>
          <span className="section-title mt-2 block">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default ImpactGrid;
