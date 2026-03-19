import { motion } from "framer-motion";
import NavBar from "@/components/dashboard/NavBar";
import ImpactStrip from "@/components/dashboard/ImpactStrip";
import AnalysisSummary from "@/components/dashboard/AnalysisSummary";
import ScenarioTable from "@/components/dashboard/ScenarioTable";
import MiniChart from "@/components/dashboard/MiniChart";
import VesselTracker from "@/components/dashboard/VesselTracker";
import EscalationMeter from "@/components/dashboard/EscalationMeter";
import ImpactGrid from "@/components/dashboard/ImpactGrid";
import StraitMap from "@/components/dashboard/StraitMap";
import KeyDevelopments from "@/components/dashboard/KeyDevelopments";
import StatCard from "@/components/dashboard/StatCard";
import { Ship, Anchor, Navigation } from "lucide-react";

const oilData = [
  { label: "D1", value: 82 }, { label: "D4", value: 85 }, { label: "D7", value: 89 },
  { label: "D10", value: 91 }, { label: "D13", value: 88 }, { label: "D16", value: 93 }, { label: "D19", value: 94 },
];

const transitData = [
  { label: "D1", value: 45 }, { label: "D4", value: 28 }, { label: "D7", value: 12 },
  { label: "D10", value: 8 }, { label: "D13", value: 5 }, { label: "D16", value: 3 }, { label: "D19", value: 2 },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <NavBar />
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-5 pb-12">
          {/* HERO: Impact Strip — 5 headline KPIs */}
          <motion.div variants={item}>
            <ImpactStrip />
          </motion.div>

          {/* MAP */}
          <motion.div variants={item}>
            <StraitMap />
          </motion.div>

          {/* OPERATIONAL METRICS — below map where they belong */}
          <motion.div variants={item} className="grid grid-cols-3 gap-4">
            <StatCard label="Ships in Strait" value="0" subtitle="In strait bounds" icon={Ship} />
            <StatCard label="Ships Approaching" value="5" subtitle="Speed > 0.5kt, in corridor" icon={Navigation} />
            <StatCard label="Vessels at Anchor" value="47" subtitle="Speed < 0.5kt" icon={Anchor} />
          </motion.div>

          {/* ANALYSIS + ESCALATION */}
          <motion.div variants={item} className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2">
              <AnalysisSummary />
            </div>
            <EscalationMeter />
          </motion.div>

          {/* MARKET CHARTS */}
          <motion.div variants={item} className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <MiniChart title="Oil Prices — Brent ($/bbl)" data={oilData} color="hsl(38, 92%, 55%)" unit="$" />
            <MiniChart title="Daily Vessel Transits" data={transitData} color="hsl(200, 80%, 55%)" />
          </motion.div>

          {/* IMPACT GRID */}
          <motion.div variants={item}>
            <ImpactGrid />
          </motion.div>

          {/* SCENARIOS + DEVELOPMENTS */}
          <motion.div variants={item} className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2">
              <ScenarioTable />
            </div>
            <KeyDevelopments />
          </motion.div>

          {/* VESSEL TRACKER */}
          <motion.div variants={item}>
            <VesselTracker />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
