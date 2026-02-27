import { useEffect, useState } from "react";
import KpiCard from "../components/KpiCard";
import PassFailChart from "../components/PassFailChart";
import FailedTestsTable from "../components/FailedTestsTable";
import ExecutionTrendChart from "../components/ExecutionTrendChart";
import ThemeSelector from "../components/ThemeSelector";

export default function Dashboard() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/allure-summary")
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.error("Failed to fetch data", err));
  }, []);

  if (!data) {
    return <div className="p-10 text-center">Loading dashboard...</div>;
  }

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-8 py-8">

        <div className="flex justify-end mb-4">
          <ThemeSelector />
        </div>

        <h1 className="text-3xl font-bold mb-8 text-center">
          QA Analytics Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <KpiCard title="Total Tests" value={data.total} />
          <KpiCard title="Passed" value={data.passed} />
          <KpiCard title="Failed" value={data.failed} />
          <KpiCard title="Duration (min)" value={data.duration} />
        </div>

        <PassFailChart
          passed={data.passed}
          failed={data.failed}
        />

        <FailedTestsTable failedTests={data.failedTests} />

        <ExecutionTrendChart
          data={[
            { run: "Latest", passed: data.passed, failed: data.failed }
          ]}
        />

      </div>
    </div>
  );
}