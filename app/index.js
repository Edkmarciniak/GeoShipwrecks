import express from "express";
import shipRouter from "./shipfinder/routes.js";

const app = express();

app.use(express.json());

app.get("/", (_, res) => {
  res.send("<h1>Hello World</h1>");
});

// http://localhost:3000/shipfinder
app.use("/shipfinder", shipRouter);

app.listen(3000, () => {
  console.info("Shipwreck Server is running on port 3000");
});
