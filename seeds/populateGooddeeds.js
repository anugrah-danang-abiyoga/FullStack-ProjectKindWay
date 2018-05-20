
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('gooddeeds').del()
    .then(function () {
      // Inserts seed entries
      return knex('gooddeeds').insert([
        {user_id: 55, date: new Date(), gooddeeds: JSON.stringify([
          {id: 0, deed: 'I am donating $2 for charity'},
          {id: 1, deed: 'I am helping my friend for her exhibition'},
          {id: 2, deed: 'I am volunteering for red cross shop'}
        ])},
        {user_id: 55, date: new Date(), gooddeeds: JSON.stringify([
          {id: 0, deed: 'I am borrowing my laptop to my friend because he needs it'},
          {id: 1, deed: 'I am taking a bike today to work to reduce pollution'},
          {id: 2, deed: 'I am participating on teaching people in West Papua rural area'},
          {id: 3, deed: 'Throwing more than 10 rubbishes into rubbish bin'}
        ])},
        {user_id: 55, date: new Date(), gooddeeds: JSON.stringify([
          {id: 0, deed: 'I am teaching my friend about css'},
          {id: 1, deed: 'I am sharing my lunch with my friends'}
        ])}
      ]);
    });
};
