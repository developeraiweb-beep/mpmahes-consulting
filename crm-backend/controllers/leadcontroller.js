const Lead = require("../models/Lead");

exports.createLead = async (req, res) => {
  try {
    const lead = await Lead.create(req.body);

    res.status(201).json({
      success: true,
      data: lead
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

exports.getLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort({
      createdAt: -1
    });

    res.json(leads);
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
};