import Metric from "../models/Metric.js";

// CREATE metric
export const createMetric = async (req, res) => {
  const metric = await Metric.create(req.body);
  res.status(201).json(metric);
};

// READ all metrics
export const getMetrics = async (req, res) => {
  const metrics = await Metric.find().sort({ createdAt: -1 });
  res.json(metrics);
};

// READ single metric by ID
export const getMetric = async (req, res) => {
  const metric = await Metric.findById(req.params.id);
  if (!metric) return res.status(404).json({ msg: "Metric not found" });
  res.json(metric);
};

// UPDATE metric
export const updateMetric = async (req, res) => {
  const metric = await Metric.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!metric) return res.status(404).json({ msg: "Metric not found" });
  res.json(metric);
};

// DELETE metric
export const deleteMetric = async (req, res) => {
  const metric = await Metric.findByIdAndDelete(req.params.id);
  if (!metric) return res.status(404).json({ msg: "Metric not found" });
  res.json({ msg: "Metric deleted" });
};
