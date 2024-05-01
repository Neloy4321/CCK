import express from "express";
import { getCook } from "../controller/cook.controller.js";

const router = express.Router();

router.get("/", getCook);

export default router;