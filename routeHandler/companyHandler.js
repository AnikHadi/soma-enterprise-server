const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const companySchema = mongoose.Schema({
    company: {
      type: String,
      required: true,
    },
  });

const Company = new mongoose.model("Company", companySchema);

// POST the Company Name
router.post("/", async (req, res) => {
    const filter = { company: req.body.company };
  const company = await Company.find(filter).select({__v: 0, __id: 0});
  if(company && company.length > 0) {
    res.status(400).json({
      message: "This company name already exists!",
    });
  } else {
    const newCompany = new Company(req.body);
    await newCompany
      .save()
      .then((result) => {
        res.status(200).json({
          data: result,
          message: "Company name was added successfully!",
        });
      })
      .catch((error) => {
        res.status(500).json({
          error: error,
          message: "There was a server side error!",
        });
      });
    }
  });

  
// Get all the users
router.get("/", async (req, res) => {
  const filter = {};
  await Company.find(filter).select({__v: 0,})
  .then((result) => {
      res.status(200).json({
        data: result,
        message: "Company name was find successfully!",
      });
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
        message: "There was a server side error!",
      });
    });
});

// Get all the users
router.get("/:id", async (req, res) => {
  const id = { _id: req.params.id };
  await Company.find(id).select({__v: 0,})
  .then((result) => {
      res.status(200).json({
        data: result,
        message: "Company name was find successfully!",
      });
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
        message: "There was a server side error!",
      });
    });
});


// PUT  the Assignment Mark
router.put("/:id", async (req, res) => {
  console.log(req.body)
  const id = { _id: req.params.id };
  const data = req.body;
  const updateData = { $set: data };
  const option = { new: true, upsert: true, setDefaultsOnInsert: true };
  try {
    await Company.updateOne(id, updateData, option)
      .then((result) => {
        res.status(200).json({
          data: result,
          message: "Company name was Updated successfully!",
        });
      })
      .catch((error) => {
        res.status(500).json({
          error: error,
          message: "There was a server side error!",
        });
      });
  } catch (error) {}
});

// DELETE the Assignment Mark
router.delete("/:id", async (req, res) => {
  const id = { _id: req.params.id };
  try {
    await Company.deleteOne(id)
      .then((data) => {
        res.status(200).json({
          data: data,
          message: "Company name deleted successfully.",
        });
      })
      .catch((err) => {
        res.status(500).json({
          error: err,
          message: "There was a server side error!",
        });
      });
  } catch (error) {
    res.status(500).json({
      error: `error: ${error}`,
      message: "There was a server side error!",
    });
  }
});

module.exports = router;
