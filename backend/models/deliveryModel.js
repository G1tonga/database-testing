import db from "../config/db.js";

export const averageDeliveyTime = async () => {
  app.get("/api/kpis", async (req, res) => {
    try {
      const result = await db.query("SELECT * FROM average_delivery_time");
      res.json(result.rows);
    } catch (error) {
      console.error("Database Error:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });
};
