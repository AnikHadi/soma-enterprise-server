const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = require("../schemas/userSchema");
const Users =  mongoose.model("Users", userSchema);


// login user
router.post("/", async (req, res) => {
  const filter = { username: req.body.username };

  try {
    // const hashPassword = await bcrypt.hash(req.body.password, 15);
    const user = await Users.find(filter).select({__v: 0,});
    if (user && user.length > 0) {
      const isValidPassword = await bcrypt.compare(req.body.password, user[0].password);

      if (isValidPassword) {
        // Generate token
        const token = jwt.sign({ userId: user[0]._id}, process.env.JWT_TOKEN,);

        res.status(200).json({
          message: "Login Successful",
          accessToken: token,
          user: user,
        });
      } else {
        res.status(401).json({
          error: "Authentication failed!",
        });
      }
    } else {
      res.status(401).json({
        error: "Authentication failed!",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "There was server side error!",
    });
  }
});



// User registration
router.post("/reg", async (req, res) => {
  const filter = { username: req.body.username };
  const user = await Users.find(filter).select({__v: 0, __id: 0, password: 0});
  if(user && user.length > 0) {
    res.status(400).json({
      message: "This user name already exists!",
    });
  } else {
    try {
      const hashPassword = await bcrypt.hash(req.body.password, 15);
      const newUser = new Users({ ...req.body, password: hashPassword, role: "agent" });
     await newUser.save().then((result) => {
          res.status(200).json({
            data: result,
            message: "Agent was created successfully!",
          });
        })
        .catch((error) => {
          res.status(500).json({
            error: error,
            message: "There was a server side error to create Agent!",
          });
        });
    } catch (error) {
      res.status(500).json({
        error: error,
  
        message: "There was a server side error!",
      });
    }
  }
  });

  // Get all the users
router.get("/", async (req, res) => {
  const filter = {};
  await Users.find(filter).select({__v: 0, password: 0,})
  .then((result) => {
      res.status(200).json({
        data: result,
        message: "All user find successfully!",
      });
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
        message: "There was a server side error!",
      });
    });
});

  // Get single the users
  router.get("/:id", async (req, res) => {
    const filter = { _id: req.params.id };
    await Users.find(filter).select({__v: 0, })
    .then((result) => {
        res.status(200).json({
          data: result,
          // message: "All user find successfully!",
        });
      })
      .catch((error) => {
        res.status(500).json({
          error: error,
          message: "There was a server side error!",
        });
      });
  });

// update user
router.put("/:id", async (req, res) => {
  const id = { _id: req.params.id };
  const data = req.body;
  const updateData = { $set: data };
  const option = { new: true, upsert: true, setDefaultsOnInsert: true };
  try {
    await Users.updateOne(id, updateData, option)
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

// DELETE user
router.delete("/:id", async (req, res) => {
  const id = { _id: req.params.id };
  try {
    await Users.deleteOne(id)
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

// Admin registration
router.post("/admin/reg", async (req, res) => {
  const filter = { username: req.body.username };
  const user = await Users.find(filter).select({__v: 0, __id: 0, password: 0});
  if(user && user.length > 0) {
    res.status(201).json({
      message: "This user name already exists!",
    });
  } else {
    const hashPassword = await bcrypt.hash(req.body.password, 15);
    const newUser = new Users({ ...req.body, password: hashPassword, role: "admin" });
    try {
    await newUser.save().then((result) => {
        res.status(200).json({
          data: result,
          message: "Admin was created successfully!",
        });
      })
      .catch((error) => {
        res.status(500).json({
          error: error,
          message: "There was a server side error to create Admin!",
        });
      });
  } catch (error) {
    res.status(500).json({
      error: error,
      message: "There was a server side error!",
    });
  }
}
});

module.exports = router;
