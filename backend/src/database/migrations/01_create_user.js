exports.up = (knex) => {

    return knex.schema.createTable('user', table => {
        table
        .string('id')
        .primary();
        
        table
        .string('name')
        .notNullable();

        table
        .string('username')
        .notNullable()
        .unique();

        table
        .string('email')
        .notNullable()
        .unique();

        table
        .string('phone')
        .notNullable();

        table
        .string('website')
        .notNullable();

        table
        .integer('address_id')
        .notNullable()
        .references('id')
        .inTable('address');

        table
        .integer('company_id')
        .notNullable()
        .references('id')
        .inTable('company');
     
        
        



    });

}



exports.down = function(knex) {
    return knex.schema.dropTable('user');
}