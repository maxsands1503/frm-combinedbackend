
exports.up = function(knex, Promise) {
  return knex.schema.createTable('connections', function(table){
    table.increments();
    table.string('first_name')
    table.string('last_name')
    table.string('relation')
    table.integer('user_id').references('users.id')
    table.boolean('is_user')
    table.integer('connection_id').references('users.id')
    table.varchar('phone');
    table.string('email');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('connections');
};
