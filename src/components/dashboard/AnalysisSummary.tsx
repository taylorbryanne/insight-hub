import { AlertTriangle, TrendingUp, Globe, Crosshair } from "lucide-react";

const AnalysisSummary = () => {
  return (
    <div className="glass-card p-6">
      <h2 className="section-title mb-4">AI Analysis Summary</h2>
      <p className="text-sm text-foreground/80 leading-relaxed mb-5">
        The Strait of Hormuz remains heavily restricted on day 19, with only 2 vessel transits versus a pre-crisis average of 67.1. Oil prices remain elevated but below extreme thresholds, reflecting ongoing supply disruption and strategic reserve releases. The most likely outcome is a protracted managed crisis with intermittent US-led convoys and continued market volatility over the next 2–4 weeks.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <InsightChip icon={AlertTriangle} label="Managed Crisis" confidence={78} />
        <InsightChip icon={TrendingUp} label="Oil at $94+ range" confidence={82} />
        <InsightChip icon={Globe} label="Diplomatic channels active" confidence={65} />
        <InsightChip icon={Crosshair} label="US convoy operations" confidence={71} />
      </div>
    </div>
  );
};

const InsightChip = ({ icon: Icon, label, confidence }: { icon: any; label: string; confidence: number }) => (
  <div className="flex items-center gap-3 bg-secondary/60 rounded-lg p-3">
    <Icon className="w-4 h-4 text-primary shrink-0" />
    <div className="flex-1 min-w-0">
      <span className="text-xs text-foreground/90 font-medium truncate block">{label}</span>
    </div>
    <span className="text-[10px] font-mono text-muted-foreground shrink-0">{confidence}%</span>
  </div>
);

export default AnalysisSummary;
