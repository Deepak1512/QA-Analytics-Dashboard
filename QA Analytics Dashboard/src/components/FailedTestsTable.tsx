interface FailedTest {
  name: string;
  reason: string;
}

interface Props {
  failedTests: FailedTest[];
}

export default function FailedTestsTable({ failedTests }: Props) {
  if (failedTests.length === 0) return null;

  return (
    <div className="bg-[var(--card)] rounded-2xl shadow-md p-6 mt-10 transition-colors duration-300">
      <h2 className="text-xl font-semibold mb-4">
        Failed Test Details
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-[var(--bg)] text-left text-sm uppercase opacity-70">
              <th className="px-4 py-2">Test Name</th>
              <th className="px-4 py-2">Failure Reason</th>
            </tr>
          </thead>
          <tbody>
            {failedTests.map((test, index) => (
              <tr key={index} className="border-t hover:opacity-80 transition">
                <td className="px-4 py-3 font-medium">{test.name}</td>
                <td className="px-4 py-3 text-red-600">{test.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}