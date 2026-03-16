import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // JSON body parser for form submissions
  app.use(express.json());

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // API endpoint for audit request form submissions
  app.post("/api/audit-request", async (req, res) => {
    try {
      const { name, email, company, challenge } = req.body;

      // Validate input
      if (!name || !email || !company) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      // Store submission (in production, this would be a database)
      const submission = {
        id: Date.now(),
        timestamp: new Date().toISOString(),
        name,
        email,
        company,
        challenge: challenge || "",
      };

      // Append to JSON file
      const submissionsPath = path.join(__dirname, "data", "audit-submissions.json");
      const dataDir = path.dirname(submissionsPath);
      
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }

      let submissions: typeof submission[] = [];
      if (fs.existsSync(submissionsPath)) {
        const data = fs.readFileSync(submissionsPath, "utf-8");
        submissions = JSON.parse(data);
      }

      submissions.push(submission);
      fs.writeFileSync(submissionsPath, JSON.stringify(submissions, null, 2));

      // TODO: Send email notification via nodemailer (add in next phase)
      
      res.json({
        success: true,
        message: "Audit request received! We'll be in touch within 24 hours.",
        id: submission.id,
      });
    } catch (error) {
      console.error("Audit request error:", error);
      res.status(500).json({ error: "Failed to process request" });
    }
  });

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
