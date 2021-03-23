import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true,
});


//conexão com mysql
/*
const connection = knex({
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '@123456@',
        database: 'ctrl-recycle',
        filename: path.resolve(__dirname, 'database.mysql')
    }
});

module.exports = knex;
*/