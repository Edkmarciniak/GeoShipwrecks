import { Router } from "express";
import userController from "./controller.js";

const router = new Router();

router.get("/:id", async (req, res) => {
  const newUser = await controller
    .getUserById(req.params.id)
    .catch((err) => {
      if (err instanceof mongoose.Error.CastError && err.kind === "ObjectId") {
        res.status(400).json({ message: "Invalid ID" });
      } else {
        res.status(500).json({ message: err.message });
      }
    });

router.post("/create", async (req, res) => {
  const { username, password } = req.body;

  const user = await userController.create(username, password);

  res.json(user);
});

router.post("/login", async (req, res) => {
  if (req.user) {
    return res.json({ message: "You are already logged in" });
  }

  const { username, password } = req.body;

  const jwt = await userController.login(username, password);

  if (jwt) {
    res.json({ token: jwt });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

export default router;
