import { motion } from "framer-motion";
import NavBar from "@/components/dashboard/NavBar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatCard from "@/components/dashboard/StatCard";
import AnalysisSummary from "@/components/dashboard/AnalysisSummary";
import ScenarioTable from "@/components/dashboard/ScenarioTable";
import MiniChart from "@/components/dashboard/MiniChart";
import VesselTracker from "@/components/dashboard/VesselTracker";
import EscalationMeter from "@/components/dashboard/EscalationMeter";
import ImpactGrid from "@/components/dashboard/ImpactGrid";
import KeyDevelopments from "@/components/dashboard/KeyDevelopments";
import { Calendar, Ship, TrendingUp, Fuel } from "lucide-react";

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
          <motion.div variants={item}>
            <DashboardHeader />
          </motion.div>

          <motion.div variants={item} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard label="Crisis Duration" value="DAY 19" subtitle="Since Feb 28, 2026" icon={Calendar} />
            <StatCard label="Vessel Transits" value="2" change="-97%" changeType="down" subtitle="vs 67.1 avg" icon={Ship} />
            <StatCard label="Oil Price (Brent)" value="$94.40" change="+$12.20" changeType="up" icon={Fuel} />
            <StatCard label="Insurance Premium" value="2.5%" change="+180bps" changeType="up" icon={TrendingUp} />
          </motion.div>

          <motion.div variants={item} className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2">
              <AnalysisSummary />
            </div>
            <EscalationMeter />
          </motion.div>

          <motion.div variants={item}>
            <ImpactGrid />
          </motion.div>

          <motion.div variants={item} className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <MiniChart title="Oil Prices — Brent ($/bbl)" data={oilData} color="hsl(38, 92%, 55%)" unit="$" />
            <MiniChart title="Daily Vessel Transits" data={transitData} color="hsl(200, 80%, 55%)" />
          </motion.div>

          <motion.div variants={item} className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2">
              <ScenarioTable />
            </div>
            <KeyDevelopments />
          </motion.div>

          <motion.div variants={item}>
            <VesselTracker />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
