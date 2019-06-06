exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("cohorts")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("cohorts").insert([
        { name: "Web19" },
        { name: "UX3" },
        { name: "IOS4" },
        { name: "AND2" }
      ]);
    });
};
