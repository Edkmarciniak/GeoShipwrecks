import { Router } from "express";
import mongoose from "mongoose";
import userController from "./controller.js";

const router = new Router();

router.get("/me", async (req, res) => {
  if (req.user) {
    res.json(req.user);
  } else {
    res.status(401).json({ message: "You are not logged in" });
  }
});

export default router;
