var knex = require('../db/knex');
module.exports ={
  getAllConnections: function(input){
    return knex('connections').where('user_id', input);
  },
  createConnection: function(input, urlin){
    if(input.is_user === true){
      return knex('users').where('email', input.email).first().then(function(data){
        return knex('connections').insert({
          first_name: data.first_name,
          last_name: data.last_name,
          relation: data.relation,
          user_id: urlin.id,
          is_user: true,
          connection_id: data.id,
          phone: input.phone,
          email: data.email
        })
      })
    }else{
      return knex('connections').insert({
        first_name: input.first_name,
        last_name: input.last_name,
        relation: input.relation,
        user_id: urlin.id,
        is_user: false,
        connection_id: null,
        phone: input.phone,
        email: input.email
      })
    }
  },
  getOneConnection: function(id){
    return knex('connections').where('user_id', id).first().then(function(connection){
      return knex('list_users').where('conn_id', connection.id).then(function(lists){
        return knex('lists').whereIn('id', list.list_id).then(function(titles){
          return {
            connection: connection,
            lists: lists,
            titles: titles
          }
        })
      })
    })
  },
  getJustOneConnection: function(id){
    return knex('connections').where('id', id).first().then(function(con){
      return con;
    })
  },

  editConnection: function(input, urlin){
    return knex('connections').where('id', input.id).first().update({
      first_name: input.first_name,
      last_name: input.last_name,
      relation: input.relation,
      user_id: urlin.id,
      is_user: input.is_user,
      connection_id: input.connection_id,
      phone: input.phone,
      email: input.email
    })
  },
  deleteConnection: function(input){
    return knex('list_users').where('conn_id', input.id).first().then(function(listUser){
      knex('list_items').where('list_id',listUser.list_id).del();
      knex('lists').where('list_id',listUser.list_id).del();
      knex('connections').where('id',listUser.conn_id).del();
    });
  }
};
