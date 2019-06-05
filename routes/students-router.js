const express = require("express");

const Students = require("./students-model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const students = await Students.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({
      msg: "cannot find cohorts"
    });
  }
});

module.exports = router;
