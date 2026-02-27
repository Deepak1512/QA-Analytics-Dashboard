const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

const DATA_FILE = "./latest-result.json";

/* API 1 — CI sends summary */
app.post("/api/allure-update", (req, res) => {
  try {
    const data = req.body;
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
    res.json({ message: "Allure data stored successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to store data" });
  }
});

/* API 2 — Frontend fetches summary */
app.get("/api/allure-summary", (req, res) => {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      return res.json({
        total: 0,
        passed: 0,
        failed: 0,
        duration: 0,
        failedTests: [],
      });
    }

    const data = JSON.parse(fs.readFileSync(DATA_FILE));
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

/* TEST ROUTE */
app.get("/test-route", (req, res) => {
  res.json({ message: "Test route works" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
