const express = require("express");

const Students = require("./students-model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const students = await Students.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({
      msg: "cannot find Students"
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const students = await Students.findById(req.params.id);
    res.status(200).json(students);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "cannot get the id"
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const students = await Students.insert(req.body);
    res.status(200).json(students);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "cannot add a cohort sorry"
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const students = await Students.update(req.params.id, req.body);
    res.status(200).json(students);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "cannot edit this cohort"
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const students = await Students.remove(req.params.id);
    res.status(200).json(students);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "cannot edit this cohort"
    });
  }
});

module.exports = router;
