const express = require("express");

const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "online",
    message: "StreamBox backend is running!"
  });
});

app.get("/api/videos", (req, res) => {
  res.json([
    {
      id: 1,
      title: "Test Video",
      views: 0
    }
  ]);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`StreamBox backend running on port ${PORT}`);
});
