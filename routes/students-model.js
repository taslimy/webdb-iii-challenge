const db = require("../data/dbConfig");

module.exports = {
  find,
  findById,
  insert,
  update,
  remove,
  findStudentsByCohort
};

function find() {
  return db("students");
}

function findById(id) {
  return db
    .select("students.name", "students.id", "cohorts.name as cohort")
    .from("students")
    .leftJoin("cohorts", "students.cohort_id", "cohorts.id")
    .where('students.id', id);
  // return db("students")
  //   .where({ id })
  //   .first();
}

function insert(student) {
  return db("students").insert(student);
}

function update(id, changes) {
  return db("students")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("students")
    .where({ id })
    .del();
}

function findStudentsByCohort(cohort_id) {
  return db("students").where({ cohort_id });
}
