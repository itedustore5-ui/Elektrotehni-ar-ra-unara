import express from "express";
import path from "path";

const app = express();
const port = process.env.PORT || 3000;

// serve static build
app.use(express.static("dist"));

// SPA fallback
app.get("*", (req, res) => {
  res.sendFile(path.resolve("dist/index.html"));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
