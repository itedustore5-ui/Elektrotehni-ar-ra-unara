import express from "express";
import path from "path";

const app = express();

// 🔥 VAŽNO: Render PORT
const port = process.env.PORT;

app.use(express.static("dist"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve("dist/index.html"));
});

app.listen(port, () => {
  console.log("Server running on port", port);
});
