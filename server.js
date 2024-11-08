import express from "express";
import cors from "cors";
import pfg, { Connection } from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pfg;
const app = express();
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.use(cors())
app.use(express.json());

