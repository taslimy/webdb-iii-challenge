const express = require("express");

const Cohorts = require("./cohorts-model");
const Students = require("./students-model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const cohorts = await Cohorts.find();
    res.status(200).json(cohorts);
  } catch (error) {
    res.status(500).json({
      msg: "cannot find cohorts"
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const cohorts = await Cohorts.findById(req.params.id);
    res.status(200).json(cohorts);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "cannot get the id"
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const cohorts = await Cohorts.insert(req.body);
    res.status(200).json(cohorts);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "cannot add a cohort sorry"
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const cohorts = await Cohorts.update(req.params.id, req.body);
    res.status(200).json(cohorts);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "cannot edit this cohort"
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const cohorts = await Cohorts.remove(req.params.id);
    res.status(200).json(cohorts);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "cannot edit this cohort"
    });
  }
});

router.get("/:id/students", async (req, res) => {
  try {
    const students = await Students.findStudentsByCohort(req.params.id);
    res.status(200).json(students);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "cannot get the id"
    });
  }
});

module.exports = router;
