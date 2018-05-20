
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('gooddeeds', table => {
      table.increments('id')
      table.integer('user_id')
      table.timestamp('date')
      table.string('gooddeeds')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('gooddeeds')
};
