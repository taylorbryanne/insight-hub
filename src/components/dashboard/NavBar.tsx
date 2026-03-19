import { BarChart3, Bell, Settings, Menu } from "lucide-react";
import { useState } from "react";

const tabs = ["Dashboard", "Intelligence", "Scenarios", "Markets"];

const NavBar = () => {
  const [active, setActive] = useState("Dashboard");
  
  return (
    <nav className="flex items-center justify-between py-4">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
          <BarChart3 className="w-4 h-4 text-primary-foreground" />
        </div>
        <span className="font-bold text-sm tracking-tight text-foreground hidden sm:block">HORMUZ WATCH</span>
      </div>
      <div className="hidden md:flex items-center gap-1 bg-secondary/50 rounded-lg p-1">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`px-4 py-1.5 rounded-md text-xs font-medium transition-all ${
              active === t
                ? "bg-card text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <button className="w-8 h-8 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
          <Bell className="w-4 h-4" />
        </button>
        <button className="w-8 h-8 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
          <Settings className="w-4 h-4" />
        </button>
        <button className="w-8 h-8 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-foreground md:hidden">
          <Menu className="w-4 h-4" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
