import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";
import itemsRoutes from "./routes/itemsRoute.js";

dotenv.config();

const { Pool } = pg;
const app = express();
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.use(cors());
app.use(express.json());

app.locals.pool = pool;

app.use("/api/items", itemsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
