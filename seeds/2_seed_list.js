
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('lists').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('lists').insert({id: 501, name: 'Grocery List', user_id: 1001 , list_type:'prv'}),
        knex('lists').insert({id: 502, name: 'List for Hike', user_id: 1002 , list_type:'pub'}),
        knex('lists').insert({id: 503, name: 'Pay Patrick Back', user_id: 1003 , list_type:'noti'})
      ]);
    });
};
