import { Router } from "express";
import userController from "./controller.js";

const router = new Router();

// /api/student
// * DON'T REPEAT '/api/students' - it's already in app/index.js
router.get("/", (_, res) => {
  userController
    .getUsers()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

export default router;
