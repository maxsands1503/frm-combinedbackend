
exports.up = function(knex, Promise) {
  return knex.schema.createTable('list_users', function(table){
    table.increments();
    table.integer('list_id').references('lists.id');
    table.integer('user_id').references('users.id');
    table.integer('conn_id').references('connections.id');
    table.text('user_permission');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('list_users')
};
