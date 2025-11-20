// server.js
const express = require("express");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.static(__dirname));

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

app.post("/api/generate", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Missing prompt" });
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GOOGLE_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: prompt }] }],
        }),
      }
    );

    const data = await response.json();
    console.log("Gemini API raw response:", data);

    if (data.error) {
      return res.status(400).json({ error: data.error.message });
    }

    const text =
      data.candidates?.[0]?.content?.parts?.[0]?.text || "No response from AI.";
    res.json({ text });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ error: "SERVER:ERROR" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`🚀 Server running at http://localhost:${PORT}`)
);
