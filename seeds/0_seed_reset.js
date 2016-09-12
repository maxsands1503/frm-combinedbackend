
exports.seed = function(knex, Promise) {
  return knex.raw("TRUNCATE users , lists, list_items, list_users, connections RESTART IDENTITY CASCADE")
  .then(function(){
    			return knex('users').del()
   		 .then(function(){
      		return knex('lists').del()
        .then(function(){
          return knex('list_items').del()
          .then(function(){
            return knex('connections').del()
            .then(function(){
              return knex('list_users').del()
            })
          })
        })
  	 	 });
 	 	});
};
