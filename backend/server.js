// server.js
import express from "express";
import http from "http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import "express-async-errors";

dotenv.config();
const app = express();
const server = http.createServer(app);

// --- ENV ---
const FRONTEND = process.env.FRONTEND_URL || "http://localhost:5173";
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;

if (!MONGO_URI) {
  console.error("❌ ERROR: MONGO_URI missing in .env");
  process.exit(1);
}

// --- MIDDLEWARE ---
app.use(cors({ origin: FRONTEND, credentials: true }));
app.use(express.json({ limit: "10mb" }));
app.use(morgan("dev"));

// --- SOCKET.IO ---
const io = new Server(server, {
  cors: {
    origin: [FRONTEND],
    methods: ["GET", "POST", "PUT", "DELETE"],
  },
});

app.set("io", io);

// --- DATABASE ---
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => {
    console.error("❌ MongoDB Error:", err);
    process.exit(1);
  });

// --- ROUTES ---
import authRoutes from "./routes/authRoutes.js";
import cityRoutes from "./routes/cityRoutes.js";
import metricRoutes from "./routes/metricRoutes.js";

app.use("/api/auth", authRoutes);
app.use("/api/cities", cityRoutes);
app.use("/api/metrics", metricRoutes);

// --- DEFAULT TEST ROUTE ---
app.get("/api/health", (req, res) => res.json({ status: "ok" }));

// --- SOCKET.IO EVENT ---
io.on("connection", (socket) => {
  console.log("🟢 New client connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("🔴 Client disconnected:", socket.id);
  });
});

// --- START SERVER ---
server.listen(PORT, () =>
  console.log(`🚀 Server running at http://localhost:${PORT}`)
);
