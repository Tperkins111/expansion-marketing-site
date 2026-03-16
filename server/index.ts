import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import nodemailer from "nodemailer";

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

  // Setup email transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

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

      // Send confirmation email to user
      try {
        await transporter.sendMail({
          from: `"Expansion Marketing" <${process.env.GMAIL_USER}>`,
          to: email,
          subject: "Free automation audit request received",
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #1a5f6b;">Hi ${name},</h2>
              <p>Thanks for requesting the free automation audit. We've received your submission for <strong>${company}</strong>.</p>
              <p>We'll review what you told us about your operational challenges and get back to you within 24 hours with some initial thoughts.</p>
              <p style="margin: 30px 0; padding: 20px; background: #f0f9fa; border-left: 4px solid #1a5f6b; border-radius: 4px;">
                <strong>Your submission:</strong><br />
                Company: ${company}<br />
                ${challenge ? `Main challenge: ${challenge}<br />` : ""}
                Submitted: ${new Date(submission.timestamp).toLocaleString()}
              </p>
              <p>If you have any questions in the meantime, just reply to this email.</p>
              <p>Cheers,<br />Thomas Perkins<br />Head of Customer Relationships<br />Expansion Marketing</p>
            </div>
          `,
        });
      } catch (emailError) {
        console.error("Email send error:", emailError);
        // Don't fail the request if email fails - submission is still stored
      }

      // Send notification email to Thomas
      try {
        await transporter.sendMail({
          from: `"Expansion Marketing" <${process.env.GMAIL_USER}>`,
          to: process.env.GMAIL_USER,
          subject: `New audit request: ${company}`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto;">
              <h3 style="color: #1a5f6b;">New Audit Request</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Company:</strong> ${company}</p>
              <p><strong>Challenge:</strong> ${challenge || "(not provided)"}</p>
              <p><strong>Submitted:</strong> ${new Date(submission.timestamp).toLocaleString()}</p>
              <p style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
                <a href="mailto:${email}?subject=Re: Free automation audit for ${company}">Reply to ${name}</a>
              </p>
            </div>
          `,
        });
      } catch (emailError) {
        console.error("Internal email send error:", emailError);
      }
      
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
