import express from "express";
import { getAllButterflies } from "../controllers/butterflyController.js";
const butterflyRouter = express.Router();

butterflyRouter.get("/", getAllButterflies);
//butterflyRouter.post("/", createButterfly);
//butterflyRouter.delete("/:id", deleteButterfly);
//butterflyRouter.get("/:id", getButterflyById);
//butterflyRouter.put("/:id", updateButterfly);

export default butterflyRouter;
