import { Circle } from "lucide-react";

const events = [
  { time: "2h ago", text: "US Navy convoy escorted 3 tankers through the strait", type: "military" },
  { time: "5h ago", text: "Iran IRGC conducted naval exercises near Bandar Abbas", type: "threat" },
  { time: "8h ago", text: "Saudi Arabia released 2M barrels from strategic reserves", type: "economic" },
  { time: "12h ago", text: "EU foreign ministers issued joint statement calling for de-escalation", type: "diplomatic" },
  { time: "18h ago", text: "Lloyd's increased war risk premium to 2.5% for Gulf transit", type: "economic" },
];

const typeColor: Record<string, string> = {
  military: "text-accent",
  threat: "text-danger",
  economic: "text-primary",
  diplomatic: "text-success",
};

const KeyDevelopments = () => {
  return (
    <div className="glass-card p-6">
      <h2 className="section-title mb-4">Key Developments</h2>
      <div className="space-y-4">
        {events.map((e, i) => (
          <div key={i} className="flex gap-3">
            <div className="flex flex-col items-center">
              <Circle className={`w-2.5 h-2.5 fill-current ${typeColor[e.type]}`} />
              {i < events.length - 1 && <div className="w-px flex-1 bg-border/50 mt-1" />}
            </div>
            <div className="pb-4">
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">{e.time}</span>
              <p className="text-sm text-foreground/85 mt-0.5 leading-relaxed">{e.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyDevelopments;
