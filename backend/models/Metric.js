import mongoose from "mongoose";

const MetricSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      enum: ["air", "traffic", "waste", "energy", "water"]
    },
    value: { type: Number, required: true },
    unit: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Metric", MetricSchema);
