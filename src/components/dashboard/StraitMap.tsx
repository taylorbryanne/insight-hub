import { MapContainer, TileLayer, Marker, Popup, Circle, Polygon, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Ship, Anchor, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Fix leaflet default icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

const createIcon = (color: string, size: number = 10) =>
  L.divIcon({
    className: "",
    html: `<div style="width:${size}px;height:${size}px;border-radius:50%;background:${color};border:2px solid rgba(255,255,255,0.8);box-shadow:0 0 8px ${color}80;"></div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });

const vessels = [
  { name: "ALLIANZ INTERSPRAY", owner: "DMC", lat: 26.2, lng: 56.1, speed: "17.9kt", dir: "SW", type: "OTHER", typeColor: "hsl(215,20%,55%)" },
  { name: "XIN QI MENG", owner: "CHINESE VSL/CREW", lat: 25.1, lng: 56.8, speed: "3.6kt", dir: "N", type: "CARGO", typeColor: "hsl(200,80%,55%)" },
  { name: "UNIDENTIFIED", owner: "", lat: 26.0, lng: 57.2, speed: "8.1kt", dir: "NE", type: "DARK", typeColor: "hsl(0,72%,55%)" },
  { name: "GAZ IMPERIAL", owner: "SHARJAH OPL", lat: 25.6, lng: 56.4, speed: "16.3kt", dir: "E", type: "TANKER", typeColor: "hsl(38,92%,55%)" },
  { name: "AL WASL", owner: "", lat: 26.4, lng: 56.6, speed: "2.6kt", dir: "N", type: "OTHER", typeColor: "hsl(215,20%,55%)" },
  { name: "BLUESHARK 14", owner: "", lat: 26.1, lng: 57.0, speed: "14.1kt", dir: "E", type: "OTHER", typeColor: "hsl(215,20%,55%)" },
  { name: "UNIDENTIFIED", owner: "", lat: 25.8, lng: 57.5, speed: "23.8kt", dir: "SE", type: "DARK", typeColor: "hsl(0,72%,55%)" },
];

const darkShips = [
  { lat: 26.3, lng: 56.9, speed: "0.0kt", dir: "N" },
  { lat: 25.9, lng: 56.7, speed: "8.1kt", dir: "NE" },
  { lat: 26.05, lng: 57.4, speed: "0.0kt", dir: "N" },
  { lat: 25.7, lng: 57.1, speed: "0.4kt", dir: "N" },
  { lat: 26.5, lng: 56.3, speed: "0.7kt", dir: "N" },
  { lat: 25.4, lng: 57.6, speed: "48.9kt", dir: "SW" },
  { lat: 26.15, lng: 56.5, speed: "0.8kt", dir: "N" },
  { lat: 25.5, lng: 56.9, speed: "0.0kt", dir: "S" },
  { lat: 26.6, lng: 57.2, speed: "1.2kt", dir: "NW" },
];

const strandedPosition = { lat: 25.3, lng: 56.2 };
const blockadeZone: [number, number][] = [
  [26.6, 56.0], [26.6, 57.0], [26.0, 57.2], [25.8, 56.8], [26.0, 56.0],
];

const iranBases: [number, number][] = [[27.2, 56.3], [26.8, 55.9]];
const alliedBases: [number, number][] = [[25.2, 55.3], [26.0, 50.6]];
const carrierPosition: [number, number] = [25.9, 51.8];

const typeBadgeStyles: Record<string, string> = {
  CARGO: "bg-accent/20 text-accent border-accent/30",
  TANKER: "bg-primary/20 text-primary border-primary/30",
  DARK: "bg-danger/20 text-danger border-danger/30",
  OTHER: "bg-muted text-muted-foreground border-border",
};

const StraitMap = () => {
  return (
    <div className="glass-card overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-border/50">
        <div className="flex items-center gap-3">
          <h2 className="text-sm font-semibold text-foreground">STRAIT OF HORMUZ</h2>
          <Badge className="bg-danger/20 text-danger border-danger/30 text-[10px] font-bold uppercase">
            Blockade Active
          </Badge>
        </div>
        <div className="hidden md:flex items-center gap-3">
          {[
            { color: "hsl(38,92%,55%)", label: "Tanker" },
            { color: "hsl(200,80%,55%)", label: "Cargo" },
            { color: "hsl(0,72%,55%)", label: "Dark ship" },
            { color: "hsl(142,60%,45%)", label: "Carrier" },
            { color: "hsl(0,72%,55%)", label: "Iran Base" },
            { color: "hsl(200,80%,55%)", label: "Allied Base" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
              <span className="text-[10px] text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px]">
        {/* Map */}
        <div className="h-[500px] relative">
          <MapContainer
            center={[25.8, 56.0]}
            zoom={7}
            className="h-full w-full"
            style={{ background: "hsl(222, 47%, 6%)" }}
            zoomControl={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>'
              url="https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}{r}.jpg"
            />

            {/* Blockade zone */}
            <Polygon
              positions={blockadeZone}
              pathOptions={{
                color: "hsl(0,72%,55%)",
                fillColor: "hsl(0,72%,55%)",
                fillOpacity: 0.1,
                weight: 2,
                dashArray: "8 4",
              }}
            />

            {/* Stranded cluster */}
            <Circle
              center={strandedPosition}
              radius={30000}
              pathOptions={{
                color: "hsl(38,92%,55%)",
                fillColor: "hsl(38,92%,55%)",
                fillOpacity: 0.1,
                weight: 1,
              }}
            />
            <Marker position={strandedPosition} icon={createIcon("hsl(38,92%,55%)", 20)}>
              <Popup>
                <strong>46 Stranded</strong><br />Vessels at anchor
              </Popup>
            </Marker>

            {/* Iran bases */}
            {iranBases.map((pos, i) => (
              <Marker key={`iran-${i}`} position={pos} icon={createIcon("hsl(0,72%,55%)", 12)}>
                <Popup>Iran Military Base</Popup>
              </Marker>
            ))}

            {/* Allied bases */}
            {alliedBases.map((pos, i) => (
              <Marker key={`allied-${i}`} position={pos} icon={createIcon("hsl(200,80%,55%)", 12)}>
                <Popup>Allied Base</Popup>
              </Marker>
            ))}

            {/* Carrier */}
            <Marker position={carrierPosition} icon={createIcon("hsl(142,60%,45%)", 14)}>
              <Popup>CVN-78 USS Gerald R. Ford</Popup>
            </Marker>

            {/* Tracked vessels */}
            {vessels.map((v, i) => (
              <Marker key={`v-${i}`} position={[v.lat, v.lng]} icon={createIcon(v.typeColor, 10)}>
                <Popup>
                  <strong>{v.name}</strong><br />
                  {v.owner && <>{v.owner}<br /></>}
                  {v.speed} {v.dir} — {v.type}
                </Popup>
              </Marker>
            ))}

            {/* Dark ships */}
            {darkShips.map((d, i) => (
              <Marker key={`dark-${i}`} position={[d.lat, d.lng]} icon={createIcon("hsl(0,72%,55%)", 8)}>
                <Popup>UNIDENTIFIED — {d.speed} {d.dir}</Popup>
              </Marker>
            ))}
          </MapContainer>

          {/* Overlay badge */}
          <div className="absolute bottom-4 right-4 z-[1000] bg-card/90 backdrop-blur-sm border border-border/50 rounded-lg px-3 py-1.5 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="text-xs text-muted-foreground font-mono">61 tracked</span>
          </div>
        </div>

        {/* Vessel Tracker Sidebar */}
        <div className="border-l border-border/50 overflow-y-auto max-h-[500px]">
          <div className="p-4 border-b border-border/50 flex items-center justify-between sticky top-0 bg-card/95 backdrop-blur-sm z-10">
            <h3 className="text-sm font-semibold text-foreground">VESSEL TRACKER</h3>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-success" />
              <span className="text-[10px] text-muted-foreground font-mono">61 tracked</span>
            </div>
          </div>

          {/* Transiting */}
          <TrackerSection title="TRANSITING" count={0}>
            <p className="text-xs text-muted-foreground italic px-4 py-2">No vessels currently transiting the strait</p>
          </TrackerSection>

          {/* Approaching */}
          <TrackerSection title="APPROACHING" count={7}>
            {vessels.map((v, i) => (
              <VesselRow key={i} name={v.name} owner={v.owner} speed={v.speed} dir={v.dir} type={v.type} />
            ))}
          </TrackerSection>

          {/* Anchored */}
          <TrackerSection title="ANCHORED / STRANDED" count={38}>
            <div className="px-4 py-2">
              <p className="text-xs text-muted-foreground">
                38 at anchor — <span className="text-primary">3 tankers (~Est. 3M bbl at risk)</span>
              </p>
            </div>
          </TrackerSection>

          {/* Dark ships */}
          <TrackerSection title="DARK SHIPS" count={9}>
            {darkShips.map((d, i) => (
              <VesselRow key={i} name="UNIDENTIFIED" speed={d.speed} dir={d.dir} type="DARK" />
            ))}
          </TrackerSection>
        </div>
      </div>
    </div>
  );
};

const TrackerSection = ({ title, count, children }: { title: string; count: number; children: React.ReactNode }) => (
  <div className="border-b border-border/30">
    <div className="px-4 py-2.5 flex items-center gap-2">
      <span className="text-[11px] font-semibold text-foreground tracking-wide">{title}</span>
      <span className="text-[10px] font-mono bg-secondary rounded px-1.5 py-0.5 text-muted-foreground">{count}</span>
    </div>
    {children}
  </div>
);

const VesselRow = ({ name, owner, speed, dir, type }: { name: string; owner?: string; speed: string; dir: string; type: string }) => (
  <div className="flex items-center justify-between px-4 py-2 hover:bg-secondary/30 transition-colors">
    <div>
      <span className={`text-xs font-semibold ${type === "DARK" ? "text-danger" : "text-foreground/90"}`}>{name}</span>
      {owner && <span className="block text-[10px] text-muted-foreground">{owner}</span>}
    </div>
    <div className="flex items-center gap-2">
      <span className="text-[10px] font-mono text-muted-foreground">{speed}</span>
      <span className="text-[10px] text-muted-foreground">{dir}</span>
      <Badge variant="outline" className={`text-[9px] px-1.5 py-0 h-4 ${typeBadgeStyles[type] || typeBadgeStyles.OTHER}`}>
        {type}
      </Badge>
    </div>
  </div>
);

export default StraitMap;
