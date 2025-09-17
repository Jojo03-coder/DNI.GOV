// server.js
import express from "express";
import twilio from "twilio";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const app = express();

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.json());

// Serve index.html (frontend)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Twilio client
const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH);

// Endpoint to send SMS
app.post("/send-sms", async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).send("⚠️ Message is required");
    }

    const sms = await client.messages.create({
      body: message,
      from: process.env.TWILIO_NUMBER,
      to: process.env.MY_PHONE,
    });

    // Respond with a plain text confirmation
    res.send(`✅ Message sent! SID: ${sms.sid}`);
  } catch (err) {
    res.status(500).send("❌ Error: " + err.message);
  }
});

app.listen(3000, () =>
  console.log("✅ Server running at http://localhost:3000")
);
