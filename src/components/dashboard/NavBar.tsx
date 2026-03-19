import { BarChart3, Bell, Settings, Menu } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const tabs = ["Dashboard", "Vessel Intel", "Energy Markets", "Analysis", "News"];

const NavBar = () => {
  const [active, setActive] = useState("Dashboard");

  return (
    <nav className="flex items-center justify-between py-3 px-1">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
          <BarChart3 className="w-4 h-4 text-primary-foreground" />
        </div>
        <span className="font-bold text-sm tracking-tight text-foreground hidden sm:block">
          STRAIT OF HORMUZ LIVE
        </span>
      </div>
      <div className="hidden md:flex items-center gap-1 bg-secondary/50 rounded-lg p-1">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`px-4 py-1.5 rounded-md text-xs font-medium transition-all ${
              active === t
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-danger/20 border border-danger/40">
            <span className="w-2 h-2 rounded-full bg-danger animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-danger">Strait Closed</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-success/20 border border-success/40">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-success">Live</span>
          </span>
        </div>
        <span className="text-[10px] text-muted-foreground font-mono hidden lg:block">
          {new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}
          {" "}
          {new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
        </span>
        <ThemeToggle />
        <button className="w-8 h-8 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors md:hidden">
          <Menu className="w-4 h-4" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
