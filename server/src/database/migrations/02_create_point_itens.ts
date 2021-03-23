import { Knex } from 'knex';

//Create table
export async function up(Knex: Knex) {
    return Knex.schema.createTable('point_itens', table => {
        table.increments('id').primary();

        table.integer('point_id')
            .notNullable()
            .references('id')
            .inTable('points');

        table.integer('iten_id')
            .notNullable()
            .references('id')
            .inTable('itens');

    });
}

export async function down(knex: Knex) {
     return knex.schema.dropTable('point_itens');
}