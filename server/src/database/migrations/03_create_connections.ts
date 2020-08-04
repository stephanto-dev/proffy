import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();

        table.integer('user_id').notNullable().unsigned();
        table.foreign('user_id').references('users.id').onUpdate('CASCADE').onDelete('CASCADE');

        table.timestamp('created_at')
            .defaultTo(knex.fn.now())
            .notNullable();

        table.engine('InnoDB');

    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('connections');
}