// Create
exports.up = function(knex, Promise) {
  return knex.schema.createTable("cohorts", tbl => {
    // Auto increment
    tbl.increments("id");

    // name,
    tbl
      .string("name", 128)
      .notNullable()
      .unique();
  });
};
// Drop
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("cohorts");
};

// npx knex migrate:make create_cohorts_table
// npx knex migrate:latest to run the migrations
// npx knex migrate:rollback to undo the migrations