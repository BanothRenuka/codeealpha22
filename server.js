const express = require("express");
const app = express();
const PORT = 3000;

// Serve frontend page
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// Sensor simulation API
app.get("/simulate", (req, res) => {
    // Simulated temperature sensor value
    const temperature = Math.floor(Math.random() * (40 - 20 + 1)) + 20;

    // LED logic
    const ledStatus = temperature > 30 ? "ON" : "OFF";

    res.json({
        sensor: "Temperature Sensor",
        temperature: temperature + " °C",
        ledStatus: ledStatus,
        rule: "LED turns ON when temperature > 30°C"
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
