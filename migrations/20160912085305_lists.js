
exports.up = function(knex, Promise) {
  return knex.schema.createTable('lists', function(table){
    table.increments();
    table.string('name');
    table.integer('user_id').references('users.id');
    table.string('list_type');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('lists');
};
