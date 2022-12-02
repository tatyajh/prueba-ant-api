const mysql = require('mysql2/promise');
const config = require('../config');
const dbConfig = config.dbConfig;

const query = async (sql, params) => {
    const connection =  await mysql.createConnection({
        host: dbConfig.server,
        database: dbConfig.database,
        user: dbConfig.user,
        password: dbConfig.password,
        port: dbConfig.port
    });

    const [results, ] = await connection.execute(sql, params);

    return results;
}

module.exports = {
    query
}