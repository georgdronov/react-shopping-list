import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await req.app.locals.pool.query("SELECT * FROM items ORDER BY id");
    res.json(result.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/", async (req, res) => {
  const { name, quantity } = req.body;
  try {
    const result = await req.app.locals.pool.query(
      "INSERT INTO items (name, quantity) VALUES ($1, $2) RETURNING *",
      [name, quantity]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await req.app.locals.pool.query("DELETE FROM items WHERE id = $1", [id]);
    res.sendStatus(204);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
