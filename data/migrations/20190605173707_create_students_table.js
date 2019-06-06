// Create
exports.up = function(knex, Promise) {
  return knex.schema.createTable("students", tbl => {
    // Auto increment
    tbl.increments("id");

    // name,
    tbl
      .string("name", 128)
      .notNullable()
      .unique();

    tbl
      .integer("cohort_id")
      .unsigned()
      .references("id")
      .inTable("cohorts")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

// Drop
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("students");
};

// npx knex migrate:make create_cohorts_table
// npx knex migrate:latest to run the migrations
// npx knex migrate:rollback to undo the migrations
