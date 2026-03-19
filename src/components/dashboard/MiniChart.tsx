import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

interface MiniChartProps {
  title: string;
  data: { label: string; value: number }[];
  color?: string;
  unit?: string;
}

const MiniChart = ({ title, data, color = "hsl(38, 92%, 55%)", unit = "" }: MiniChartProps) => {
  return (
    <div className="glass-card p-5">
      <h3 className="section-title mb-4">{title}</h3>
      <div className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id={`grad-${title.replace(/\s/g, '')}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={color} stopOpacity={0.3} />
                <stop offset="100%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="label"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: 'hsl(215, 20%, 55%)' }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: 'hsl(215, 20%, 55%)' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(222, 41%, 10%)',
                border: '1px solid hsl(220, 20%, 18%)',
                borderRadius: '8px',
                fontSize: '12px',
                color: 'hsl(210, 40%, 92%)',
              }}
              formatter={(v: number) => [`${unit}${v}`, '']}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke={color}
              strokeWidth={2}
              fill={`url(#grad-${title.replace(/\s/g, '')})`}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MiniChart;
