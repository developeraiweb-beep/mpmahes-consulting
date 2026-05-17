// routes/leads.js

const express = require("express");
const router = express.Router();
const Lead = require("../models/Lead");
const sendLeadEmail = require("../utils/mailer");

// CREATE LEAD
router.post("/", async (req, res) => {
  try {
    const lead = await Lead.create(req.body);

    // send email notification
    await sendLeadEmail(lead);

    res.json({ success: true, lead });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET ALL LEADS (CRM VIEW)
router.get("/", async (req, res) => {
  const leads = await Lead.find().sort({ createdAt: -1 });
  res.json(leads);
});

module.exports = router;