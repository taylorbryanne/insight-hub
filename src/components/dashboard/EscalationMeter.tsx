const EscalationMeter = () => {
  const level = 6.0;
  const maxLevel = 10;
  const percentage = (level / maxLevel) * 100;

  return (
    <div className="glass-card p-6">
      <h2 className="section-title mb-4">Escalation Index</h2>
      <div className="flex items-end gap-4 mb-4">
        <span className="stat-value text-primary">{level.toFixed(1)}</span>
        <span className="text-sm text-muted-foreground mb-1">/ {maxLevel}</span>
      </div>
      <div className="w-full h-3 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000"
          style={{
            width: `${percentage}%`,
            background: `linear-gradient(90deg, hsl(142, 60%, 45%), hsl(38, 92%, 55%), hsl(0, 72%, 55%))`,
          }}
        />
      </div>
      <div className="flex justify-between mt-2">
        <span className="text-[10px] text-success font-medium uppercase tracking-wider">Low</span>
        <span className="text-[10px] text-primary font-medium uppercase tracking-wider">Elevated</span>
        <span className="text-[10px] text-danger font-medium uppercase tracking-wider">Critical</span>
      </div>
    </div>
  );
};

export default EscalationMeter;
