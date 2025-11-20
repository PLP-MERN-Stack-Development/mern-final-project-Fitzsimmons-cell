import mongoose from "mongoose";

const CityDataSchema = new mongoose.Schema({
  city: String,
  airQuality: Number,
  traffic: Number,
  waste: Number,
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model("CityData", CityDataSchema);
