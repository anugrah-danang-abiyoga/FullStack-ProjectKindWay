
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {user_id: 55, 
          user_name: 'test', 
          user_email:'test@user.com', 
          Country:'',
          City:'',
          Region:'',
          hash:'$2b$12$W8Odil.jesWW9kfvamaw6OGbF6qHV8u782PvvfFxDZcejCePQykc2'}
      ]);
    });
};
