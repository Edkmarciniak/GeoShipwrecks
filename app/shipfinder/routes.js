import { Router } from "express";
import controller from "./controller.js";

const router = new Router();

router.get("/", (_, res) => {
  controller
    .index()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

export default router;
