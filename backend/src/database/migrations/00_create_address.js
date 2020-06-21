exports.up = (knex) => {

    return knex.schema.createTable('address', (table) => {
        
        table
        .increments('id')
        .primary();

        table
        .string('street')
        .notNullable();

        table
        .string('suite')
        .notNullable();

        table
        .string('city')
        .notNullable();

        table
        .string('zipcode')
        .notNullable();

        table
        .decimal('latitude')
        .notNullable();

        table
        .decimal('longitude')
        .notNullable();


    })


}

exports.down = (knex) => {
    return knex.schema.dropTable('address')
}