const express = require("express");
const router = express.Router();


// Get all the users
router.get("/",  (req, res) => {
    try {
         res.status(200).json({
            user: {post: ["/user", "/user/reg", "/user/admin/reg"]},
            company: {get:"/company" ,post: "/company",put: "/company/:id"},
          });
    } catch (error) {
        res.status(500).json({
            error: error,
            message: "There was a server side error!",
          });
    }
});





module.exports = router;
