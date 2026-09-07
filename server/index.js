import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import nodemailer from "nodemailer";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure Multer for in-memory file uploads with 10MB strict limit
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: MAX_FILE_SIZE },
});

// Helper for basic string sanitization
function sanitize(input) {
  if (typeof input !== "string") return "";
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .trim();
}

// Nodemailer Transporter factory
function createTransporter() {
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587", 10),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }
  return null;
}

// ============================================================================
// 1. CAREERS FORM ENDPOINT -> Routing to careers@pragmatto.com
// ============================================================================
app.post("/api/careers", upload.single("resume"), async (req, res) => {
  try {
    const name = sanitize(req.body.name);
    const email = sanitize(req.body.email);
    const role = sanitize(req.body.role);
    const message = sanitize(req.body.message);
    const file = req.file;

    // Validate Required Fields
    if (!name || !email) {
      return res.status(400).json({
        success: false,
        error: "Full Name and Email Address are required fields.",
      });
    }

    // Validate Email Format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: "Please provide a valid email address.",
      });
    }

    // Validate File Type (Allowed: PDF, DOC, DOCX, TXT)
    if (file) {
      const ext = path.extname(file.originalname).toLowerCase();
      const allowedExts = [".pdf", ".doc", ".docx", ".txt"];
      if (!allowedExts.includes(ext)) {
        return res.status(400).json({
          success: false,
          error: `Invalid file type "${ext}". Allowed resume formats are: PDF, DOC, DOCX, TXT.`,
        });
      }
      if (file.size > MAX_FILE_SIZE) {
        return res.status(400).json({
          success: false,
          error: "File size exceeds the 10MB maximum limit.",
        });
      }
    }

    const destinationEmail =
      process.env.CAREERS_EMAIL || "careers@pragmatto.com";

    // Build Email HTML
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
        <div style="background-color: #0C1E38; color: #ffffff; padding: 24px; text-align: center;">
          <h2 style="margin: 0; font-size: 22px;">Pragmatto Solutions — Candidate Application</h2>
          <p style="margin: 6px 0 0 0; color: #38bdf8; font-size: 14px;">Submitted via Pragmatto Careers Portal</p>
        </div>
        <div style="padding: 24px; background-color: #ffffff; color: #1e293b;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 180px; color: #0C1E38;">Full Name:</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #0C1E38;">Email Address:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #165BB5;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #0C1E38;">Target Primary Expertise:</td>
              <td style="padding: 8px 0;"><span style="background-color: #e0f2fe; color: #0369a1; padding: 4px 10px; border-radius: 99px; font-size: 12px; font-weight: bold;">${role || "Not Specified"}</span></td>
            </tr>
          </table>
          ${
            message
              ? `
            <div style="margin-top: 20px; padding: 16px; background-color: #f8fafc; border-left: 4px solid #165BB5; border-radius: 4px;">
              <h4 style="margin: 0 0 8px 0; color: #0C1E38;">Summary / Portfolio / GitHub Link:</h4>
              <p style="margin: 0; white-space: pre-wrap; color: #475569;">${message}</p>
            </div>
          `
              : ""
          }
          <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #f1f5f9; font-size: 12px; color: #64748b;">
            <p style="margin: 0;">Resume Attachment: ${file ? `<strong>${file.originalname}</strong> (${(file.size / 1024).toFixed(1)} KB)` : "No file attached"}</p>
          </div>
        </div>
      </div>
    `;

    const mailOptions = {
      from: `"${name} (Pragmatto Careers)" <${process.env.SMTP_USER || "no-reply@pragmatto.com"}>`,
      replyTo: email,
      to: destinationEmail,
      subject: `New Candidate Profile: ${name} - ${role}`,
      html: emailHtml,
      attachments: file
        ? [
            {
              filename: file.originalname,
              content: file.buffer,
              contentType: file.mimetype,
            },
          ]
        : [],
    };

    const transporter = createTransporter();

    if (transporter) {
      await transporter.sendMail(mailOptions);
      console.log(
        `[CAREERS FORM] Email successfully routed to ${destinationEmail} for candidate: ${name}`,
      );
    } else {
      console.log(
        `[CAREERS FORM - SIMULATION / LOG] Form processed for ${name} (${email}). Destination: ${destinationEmail}. Attached: ${file ? file.originalname : "None"}`,
      );
    }

    return res.status(200).json({
      success: true,
      message: "Candidate application submitted successfully.",
    });
  } catch (error) {
    console.error("[CAREERS SUBMISSION ERROR]", error);
    return res.status(500).json({
      success: false,
      error:
        error.message ||
        "An error occurred while submitting your candidate profile. Please try again.",
    });
  }
});

// ============================================================================
// 2. CONTACT FORM ENDPOINT -> Routing to info@pragmatto.com
// ============================================================================
app.post("/api/contact", upload.single("file"), async (req, res) => {
  try {
    const name = sanitize(req.body.name);
    const email = sanitize(req.body.email);
    const companyName = sanitize(req.body.companyName);
    const serviceNeeded = sanitize(req.body.serviceNeeded);
    const message = sanitize(req.body.message);
    const file = req.file;

    // Validate Required Fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error:
          "Full Name, Business Email Address, and Message are required fields.",
      });
    }

    // Validate Email Format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: "Please provide a valid business email address.",
      });
    }

    // Validate File Type (Allowed: PDF, DOCX, TXT, ZIP, PNG, JPG, JPEG)
    if (file) {
      const ext = path.extname(file.originalname).toLowerCase();
      const allowedExts = [
        ".pdf",
        ".docx",
        ".txt",
        ".zip",
        ".png",
        ".jpg",
        ".jpeg",
      ];
      if (!allowedExts.includes(ext)) {
        return res.status(400).json({
          success: false,
          error: `Invalid file type "${ext}". Allowed attachment formats are: PDF, DOCX, TXT, ZIP, PNG, JPG.`,
        });
      }
      if (file.size > MAX_FILE_SIZE) {
        return res.status(400).json({
          success: false,
          error: "File size exceeds the 10MB maximum limit.",
        });
      }
    }

    const destinationEmail = process.env.CONTACT_EMAIL || "info@pragmatto.com";

    // Build Email HTML
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
        <div style="background-color: #0C1E38; color: #ffffff; padding: 24px; text-align: center;">
          <h2 style="margin: 0; font-size: 22px;">Pragmatto Solutions — Client Inquiry</h2>
          <p style="margin: 6px 0 0 0; color: #38bdf8; font-size: 14px;">Submitted via Pragmatto Contact Form</p>
        </div>
        <div style="padding: 24px; background-color: #ffffff; color: #1e293b;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 180px; color: #0C1E38;">Full Name:</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #0C1E38;">Business Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #165BB5;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #0C1E38;">Company Name:</td>
              <td style="padding: 8px 0;">${companyName || "Not Provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #0C1E38;">Area of Interest:</td>
              <td style="padding: 8px 0;"><span style="background-color: #f0f9ff; color: #0284c7; padding: 4px 10px; border-radius: 99px; font-size: 12px; font-weight: bold;">${serviceNeeded || "General Inquiry"}</span></td>
            </tr>
          </table>

          <div style="margin-top: 20px; padding: 16px; background-color: #f8fafc; border-left: 4px solid #165BB5; border-radius: 4px;">
            <h4 style="margin: 0 0 8px 0; color: #0C1E38;">Message / Staffing Requirements:</h4>
            <p style="margin: 0; white-space: pre-wrap; color: #475569;">${message}</p>
          </div>

          <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #f1f5f9; font-size: 12px; color: #64748b;">
            <p style="margin: 0;">File Attachment: ${file ? `<strong>${file.originalname}</strong> (${(file.size / 1024).toFixed(1)} KB)` : "No file attached"}</p>
          </div>
        </div>
      </div>
    `;

    const mailOptions = {
      from: `"${name} (${companyName || "Client Inquiry"})" <${process.env.SMTP_USER || "no-reply@pragmatto.com"}>`,
      replyTo: email,
      to: destinationEmail,
      subject: `New Client Inquiry: ${name} ${companyName ? `- ${companyName}` : ""}`,
      html: emailHtml,
      attachments: file
        ? [
            {
              filename: file.originalname,
              content: file.buffer,
              contentType: file.mimetype,
            },
          ]
        : [],
    };

    const transporter = createTransporter();

    if (transporter) {
      await transporter.sendMail(mailOptions);
      console.log(
        `[CONTACT FORM] Email successfully routed to ${destinationEmail} for inquiry from: ${name}`,
      );
    } else {
      console.log(
        `[CONTACT FORM - SIMULATION / LOG] Form processed for ${name} (${email}). Destination: ${destinationEmail}. Attached: ${file ? file.originalname : "None"}`,
      );
    }

    return res.status(200).json({
      success: true,
      message: "Client inquiry submitted successfully.",
    });
  } catch (error) {
    console.error("[CONTACT SUBMISSION ERROR]", error);
    return res.status(500).json({
      success: false,
      error:
        error.message ||
        "An error occurred while submitting your inquiry. Please try again.",
    });
  }
});

// Multer error handling middleware
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({
        success: false,
        error: "File size exceeds the 10MB maximum allowed limit.",
      });
    }
    return res.status(400).json({ success: false, error: err.message });
  } else if (err) {
    return res.status(500).json({
      success: false,
      error: err.message || "Server processing error.",
    });
  }
  next();
});

// 1. Serve actual files from dist (JS, CSS, images, etc.)
app.use(express.static(path.join(process.cwd(), "dist")));

// 2. Handle React routes such as /careers and /contact
app.get("*", (req, res) => {
  res.sendFile(path.join(process.cwd(), "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Pragmatto Backend Form Server running on port ${PORT}`);
  console.log(
    `- Careers Route: POST /api/careers -> Destination: ${process.env.CAREERS_EMAIL || "careers@pragmatto.com"}`,
  );
  console.log(
    `- Contact Route: POST /api/contact -> Destination: ${process.env.CONTACT_EMAIL || "info@pragmatto.com"}`,
  );
});
