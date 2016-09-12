
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({id: 1001, first_name: 'Max', last_name: 'Sands', email: 'maxsands1503@icloud.com', password: '$2a$04$2WWZjlyWcUAqfVGJAiACB.eY2V/q3wxcXIxkkjQAFB4JU2WXhXXjq', city: 'Denver'}),
        knex('users').insert({id: 1002, first_name: 'Ryan', last_name: 'Garofalo', email: 'ryangarofalo100@gmail.com', password: '$2a$04$2WWZjlyWcUAqfVGJAiACB.eY2V/q3wxcXIxkkjQAFB4JU2WXhXXjq', city: 'Denver'}),
        knex('users').insert({id: 1003, first_name: 'Kendra', last_name: 'Lyndon', email: 'kendralyndon@gmail.com', password: '$2a$04$2WWZjlyWcUAqfVGJAiACB.eY2V/q3wxcXIxkkjQAFB4JU2WXhXXjq', city: 'Denver'})
      ]);
    });
};
