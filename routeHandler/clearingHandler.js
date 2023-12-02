const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const clearingSchema = require("../schemas/clearingSchema");
const Clearing = new mongoose.model("Clearing", clearingSchema);

// POST the Company Name
router.post("/", async (req, res) => {
    const newClearing = new Clearing(req.body);
    await newClearing
      .save()
      .then((result) => {
        res.status(200).json({
          data: result,
          message: "Clearing bill was added successfully!",
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
router.get("/", async (req, res) => {
  const filter = {};
  await Clearing.find(filter).select({__v: 0,})
  .then((result) => {
      res.status(200).json({
        data: result,
        message: "Clearing bill was find successfully!",
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
    const filter = {_id: req.params.id};
    await Clearing.find(filter).select({__v: 0,})
    .then((result) => {
        res.status(200).json({
          data: result,
          message: "Clearing bill was find successfully!",
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
  const id = { _id: req.params.id };
  const data = req.body;
  const updateData = { $set: data };
  const option = { new: true, upsert: true, setDefaultsOnInsert: true };
  try {
    await Clearing.updateOne(id, updateData, option)
      .then((result) => {
        res.status(200).json({
          data: result,
          message: "Clearing bill was Updated successfully!",
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
    await Clearing.deleteOne(id)
      .then((data) => {
        res.status(200).json({
          data: data,
          message: "Clearing bill deleted successfully.",
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
