exports.up = (knex) => {
    return knex.schema.createTable('post', (table) => {

        table
        .increments('id')
        .primary();

        table
        .string('user_id')
        .notNullable()
        .references('id')
        .inTable('user');

        table
        .string('title')
        .notNullable();

        table
        .string('body')
        .notNullable();

    })
}

exports.down = (knex) => {
    return knex.schema.dropTable('post');
}