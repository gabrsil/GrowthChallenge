exports.up = (knex) => {
 
    return knex.schema.createTable('company', (table) => {

        table
        .increments('id')
        .primary();

        table
        .string('name')
        .notNullable();

        table
        .string('catchPhrase')
        .notNullable();
        
        table
        .string('bs')
        .notNullable();


    })
    
}


exports.down = (knex) => {

    return knex.schema.dropTable('company');

}