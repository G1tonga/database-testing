import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
// import errorHandler from "./middlewares/errorMiddleware.js";
import deliveryRoutes from "./routes/DeliveryRoutes.js";
import env from "dotenv";
import db from "./config/db.js";

env.config();

const app = express();
const PORT = 4000;

const corsOptions = {
  origin: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// app.use("/api/delivery", deliveryRoutes);

app.get("/", async (req, res) => {
  const result = await db.query("SELECT * FROM  average_delivery_time");
  res.json(result.rows);
});

// Error handling middleware (must be after all routes)
// app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`{Server running on http://localhost:${PORT}`);
});
