


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('list_users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('list_users').insert({id: 801, list_id: 501, user_id:1001 , conn_id: 701,user_permission: 'edit'}),
        knex('list_users').insert({id: 802, list_id: 502, user_id: 1002, conn_id: 702,user_permission: 'edit'}),
        knex('list_users').insert({id: 803, list_id: 502, user_id: 1003, conn_id: 702,user_permission: 'edit'}),
        knex('list_users').insert({id: 804, list_id: 503, user_id: 1003, conn_id: 703,user_permission: 'edit'})
      ]);
    });
};
