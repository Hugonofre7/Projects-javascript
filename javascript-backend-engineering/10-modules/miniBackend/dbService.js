const { DatabaseError } = require('./errors');

function queryDatabase(query, shouldFail) {

    let connection = null;

    try {

        connection = 'conectado';

        if (shouldFail) {
            throw new DatabaseError('Fallo en la consulta');
        }

        return {
            result: `Resultado de: ${query}`
        };

    } finally {

        connection = null;
        console.log('Conexión cerrada');

    }

}

module.exports = {
    queryDatabase
};