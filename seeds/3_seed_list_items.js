

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('list_items').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('list_items').insert({id: 601, list_id:501 , item_name: 'Apples', reminder_date: null , do_notify: false , notify_int: null }),
        knex('list_items').insert({id: 602, list_id:502 , item_name: 'Rope', reminder_date: null, do_notify: false , notify_int: null }),
        knex('list_items').insert({id: 603, list_id:503 , item_name: 'Give Patrick 200 for plane ticket', reminder_date: new Date() , do_notify: true , notify_int: 1000 })
      ]);
    });
};
