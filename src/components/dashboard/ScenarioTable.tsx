const scenarios = [
  { name: "Managed Crisis", probability: "45%", trend: "stable", impact: "Moderate", color: "text-primary" },
  { name: "Military Escalation", probability: "20%", trend: "rising", impact: "Severe", color: "text-danger" },
  { name: "Diplomatic Resolution", probability: "15%", trend: "stable", impact: "Low", color: "text-success" },
  { name: "Economic Warfare", probability: "12%", trend: "falling", impact: "High", color: "text-accent" },
  { name: "Regional War", probability: "8%", trend: "stable", impact: "Critical", color: "text-danger" },
];

const ScenarioTable = () => {
  return (
    <div className="glass-card p-6">
      <h2 className="section-title mb-4">Scenario Analysis</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border/50">
              <th className="text-left text-[10px] uppercase tracking-wider text-muted-foreground font-medium pb-3 pr-4">Scenario</th>
              <th className="text-right text-[10px] uppercase tracking-wider text-muted-foreground font-medium pb-3 px-4">Probability</th>
              <th className="text-right text-[10px] uppercase tracking-wider text-muted-foreground font-medium pb-3 px-4">Trend</th>
              <th className="text-right text-[10px] uppercase tracking-wider text-muted-foreground font-medium pb-3 pl-4">Impact</th>
            </tr>
          </thead>
          <tbody>
            {scenarios.map((s) => (
              <tr key={s.name} className="border-b border-border/20 last:border-0 hover:bg-secondary/30 transition-colors">
                <td className={`py-3 pr-4 text-sm font-medium ${s.color}`}>{s.name}</td>
                <td className="py-3 px-4 text-right font-mono text-sm text-foreground">{s.probability}</td>
                <td className="py-3 px-4 text-right text-xs text-muted-foreground capitalize">{s.trend}</td>
                <td className="py-3 pl-4 text-right text-xs text-muted-foreground">{s.impact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScenarioTable;
