import express from "express";

const app = express();

app.use(express.json());

// TODO: Add middleware for all of the user authentication routes

app.listen(3000, () => {
  console.info("Server is running on port 3000");
});
