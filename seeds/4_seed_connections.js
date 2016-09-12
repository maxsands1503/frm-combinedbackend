
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('connections').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('connections').insert({id: 701, first_name: 'Max', last_name: 'Sands', relation: 'friend', user_id: 1003 ,is_user: true , connection_id: 1001, phone: 7203340540, email: 'maxsands1503@icloud.com'}),
        knex('connections').insert({id: 702, first_name: 'Kendra', last_name: 'Lyndon', relation: 'friend', user_id: 1002, is_user: true , connection_id: 1003, phone: 3608208000, email: 'kendralyndon@gmail.com'}),
        knex('connections').insert({id: 703, first_name: 'Ryan', last_name: 'Garofalo', relation: 'friend', user_id: 1001,is_user: true , connection_id: 1002, phone: 5183076826, email: 'ryangarofalo100@gmail.com'})
      ]);
    });
};
