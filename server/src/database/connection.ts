import knex from 'knex';

//Migrations: Controle de versão do banco de dados

const db = knex({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'proffy'
    }
});

export default db;