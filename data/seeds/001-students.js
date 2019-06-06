exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("students")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("students").insert([
        { name: "Angel", cohort_id: 1 },
        { name: "Andy", cohort_id: 2 },
        { name: "Taslim", cohort_id: 3 }
      ]);
    });
};
