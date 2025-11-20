import { Router } from "express";
import {
  createMetric,
  getMetrics,
  getMetric,
  updateMetric,
  deleteMetric
} from "../controllers/metricController.js";

const router = Router();

router.post("/", createMetric);
router.get("/", getMetrics);
router.get("/:id", getMetric);
router.put("/:id", updateMetric);
router.delete("/:id", deleteMetric);

export default router;
