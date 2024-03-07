const express = require("express");

const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.json({ message: "welcome to example backend app!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
