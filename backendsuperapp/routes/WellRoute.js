import express from "express";
import {
  getWells,
  getWellById,
  saveWell,
  updateWell,
  deleteWell,
} from "../controllers/WellController.js";

const router = express.Router();

router.get("/wells", getWells);
router.get("/wells/:id", getWellById);
router.post("/wells", saveWell);
router.patch("/wells/:id", updateWell);
router.delete("/wells/:id", deleteWell);

export default router;
