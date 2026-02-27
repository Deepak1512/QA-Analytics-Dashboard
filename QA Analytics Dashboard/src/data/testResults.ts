export const testResults = {
  total: 120,
  passed: 105,
  failed: 15,
  duration: 18, // minutes
  failedTests: [
    { name: "Login Test", reason: "Element not found" },
    { name: "Checkout Test", reason: "Timeout error" },
    { name: "Profile Update Test", reason: "Assertion failed" },
  ],
};

export const executionHistory = [
  { run: "Run 1", passed: 95, failed: 10 },
  { run: "Run 2", passed: 102, failed: 8 },
  { run: "Run 3", passed: 105, failed: 15 },
  { run: "Run 4", passed: 110, failed: 5 },
];