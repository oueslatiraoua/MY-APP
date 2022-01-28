const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(express.json());
app.use(cors("http://localhost:3000"));
require("dotenv").config();
const connectDB = require("./helpers/connectDB");
connectDB();
app.use("/api/user", require("./routes/userRoute"));
app.use("/api/post", require("./routes/postRoute"));
app.use("/api/comment", require("./routes/commentRoute"));
app.use("/api/pricing", require("./routes/pricingRoute"));
app.use("/uploads", express.static(path.join(__dirname, "../", "uploads")));
app.use(
  "/uploadsForUser",
  express.static(path.join(__dirname, "../", "uploadsForUser"))
);
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
