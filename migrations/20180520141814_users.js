
exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('users', table => {
        table.increments('user_id')
        table.string('user_name')
        table.string('user_email')
        table.string('user_country')
        table.string('user_city')
        table.string('user_region')
        table.string('hash')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users')
};
