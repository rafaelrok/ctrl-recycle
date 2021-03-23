import { Knex } from 'knex';

//Create table
export async function up(Knex: Knex) {
    return Knex.schema.createTable('itens', table => {
        table.increments('id').primary();
        table.string('imagem').notNullable();
        table.string('titulo').notNullable();
    });
}

export async function down(knex: Knex) {
     return knex.schema.dropTable('itens');
}