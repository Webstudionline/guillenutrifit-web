import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import Database from "better-sqlite3";

const db = new Database("nutrifit.db");

// Initialize database
db.exec(`
  CREATE TABLE IF NOT EXISTS survey_results (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    data TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes
  app.post("/api/survey", (req, res) => {
    try {
      const { formData } = req.body;
      const stmt = db.prepare("INSERT INTO survey_results (data) VALUES (?)");
      stmt.run(JSON.stringify(formData));
      res.json({ success: true });
    } catch (error) {
      console.error("Error saving survey:", error);
      res.status(500).json({ error: "Failed to save survey results" });
    }
  });

  app.get("/api/surveys", (req, res) => {
    try {
      const rows = db.prepare("SELECT * FROM survey_results ORDER BY created_at DESC").all();
      res.json(rows.map((row: any) => ({
        ...row,
        data: JSON.parse(row.data)
      })));
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch survey results" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
