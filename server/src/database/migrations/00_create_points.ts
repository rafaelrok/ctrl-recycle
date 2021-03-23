import { Knex } from 'knex';

//Create table
export async function up(Knex: Knex) {
    return Knex.schema.createTable('points', table => {
        table.increments('id').primary();
        table.string('imagem').notNullable();
        table.string('nome').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.string('vidade').notNullable();
        table.string('uf', 2).notNullable();
    });
}

export async function down(knex: Knex) {
     return knex.schema.dropTable('points');
}