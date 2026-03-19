import { LucideIcon } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string;
  change?: string;
  changeType?: "up" | "down" | "neutral";
  icon?: LucideIcon;
  subtitle?: string;
  className?: string;
}

const StatCard = ({ label, value, change, changeType = "neutral", icon: Icon, subtitle, className = "" }: StatCardProps) => {
  const changeColor = {
    up: "text-success",
    down: "text-danger",
    neutral: "text-muted-foreground",
  };

  return (
    <div className={`glass-card p-5 flex flex-col justify-between gap-3 ${className}`}>
      <div className="flex items-center justify-between">
        <span className="section-title">{label}</span>
        {Icon && (
          <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
            <Icon className="w-4 h-4 text-muted-foreground" />
          </div>
        )}
      </div>
      <div>
        <span className="stat-value text-foreground">{value}</span>
        <div className="flex items-center gap-2 mt-1">
          {change && (
            <span className={`text-xs font-medium font-mono ${changeColor[changeType]}`}>
              {change}
            </span>
          )}
          {subtitle && (
            <span className="text-xs text-muted-foreground">{subtitle}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
