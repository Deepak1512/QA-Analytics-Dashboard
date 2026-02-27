interface KpiCardProps {
  title: string;
  value: number;
}

export default function KpiCard({ title, value }: KpiCardProps) {
  const getColor = () => {
    switch (title) {
      case "Passed":
        return "text-green-600";
      case "Failed":
        return "text-red-600";
      case "Total Tests":
        return "text-blue-600";
      case "Duration (min)":
        return "text-purple-600";
      default:
        return "";
    }
  };

  return (
    <div className="bg-[var(--card)] rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition-all duration-300">
      <h3 className="text-sm uppercase tracking-wide opacity-70">
        {title}
      </h3>
      <p className={`text-3xl font-bold mt-2 ${getColor()}`}>
        {value}
      </p>
    </div>
  );
}