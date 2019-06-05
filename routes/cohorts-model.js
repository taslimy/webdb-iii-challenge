const db = require("../data/dbConfig");

module.exports = {
  find,
  findById,
  insert,
  update,
  remove
};

function find() {
  return db("cohorts");
}

function findById(id) {
  return db("cohorts")
    .where({ id })
    .first();
}

function insert(cohort) {
  return db("cohorts").insert(cohort);
}

function update(id, changes) {
  return db("cohorts")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("cohorts")
    .where({ id })
    .del();
}
