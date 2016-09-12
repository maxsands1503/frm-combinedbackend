
exports.up = function(knex, Promise) {
  return knex.schema.createTable('list_items', function(table){
    table.increments();
    table.integer('list_id').references('lists.id');
    table.string('item_name');
    table.date('reminder_date');
    table.boolean('do_notify');
    table.integer('notify_int');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('list_items');
};
