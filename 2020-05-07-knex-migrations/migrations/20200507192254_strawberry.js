
exports.up = function(knex) {
  return knex.schema.createTable('strawberry', function (table) {
    table.increments();
    table.string('name');
    table.timestamps();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('strawberry')
};
