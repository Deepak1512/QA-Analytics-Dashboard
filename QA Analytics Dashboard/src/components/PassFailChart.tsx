import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

interface Props {
  passed: number;
  failed: number;
}

export default function PassFailChart({ passed, failed }: Props) {
  const data = [
    { name: "Passed", value: passed },
    { name: "Failed", value: failed },
  ];

  const COLORS = ["#16a34a", "#dc2626"];

  return (
    <div className="bg-[var(--card)] rounded-2xl shadow-md p-6 mt-10 flex justify-center transition-colors duration-300">
      <div>
        <h2 className="text-xl font-semibold mb-4 text-center">
          Pass vs Fail Distribution
        </h2>

        <PieChart width={400} height={300}>
          <Pie data={data} dataKey="value" outerRadius={100} label>
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
}