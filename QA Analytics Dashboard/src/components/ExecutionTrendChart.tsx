import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface HistoryItem {
  run: string;
  passed: number;
  failed: number;
}

interface Props {
  data: HistoryItem[];
}

export default function ExecutionTrendChart({ data }: Props) {
  return (
    <div className="bg-[var(--card)] rounded-2xl shadow-md p-6 mt-10 transition-colors duration-300">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Execution Trend
      </h2>

      <div className="w-full h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="run" stroke="currentColor" />
            <YAxis stroke="currentColor" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="passed" stroke="#16a34a" strokeWidth={3} />
            <Line type="monotone" dataKey="failed" stroke="#dc2626" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}