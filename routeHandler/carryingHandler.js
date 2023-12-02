const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const carryingSchema = require("../schemas/carryingSchema");
const Carrying = new mongoose.model("Carrying", carryingSchema);

// POST the Company Name
router.post("/", async (req, res) => {
    const newCarrying = new Carrying(req.body);
    await newCarrying
      .save()
      .then((result) => {
        res.status(200).json({
          data: result,
          message: "Carrying bill was added successfully!",
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
  await Carrying.find(filter).select({__v: 0,})
  .then((result) => {
      res.status(200).json({
        data: result,
        message: "Carrying bill was find successfully!",
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
    await Carrying.find(filter).select({__v: 0,})
    .then((result) => {
        res.status(200).json({
          data: result,
          message: "Carrying bill was find successfully!",
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
    await Carrying.updateOne(id, updateData, option)
      .then((result) => {
        res.status(200).json({
          data: result,
          message: "Carrying bill was Updated successfully!",
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
    await Carrying.deleteOne(id)
      .then((data) => {
        res.status(200).json({
          data: data,
          message: "Carrying bill deleted successfully.",
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
