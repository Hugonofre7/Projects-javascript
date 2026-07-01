class ValidationError extends Error {

    constructor(message) {
        super(message);

        this.name = 'ValidationError';
        this.statusCode = 400;
    }

}


class NotFoundError extends Error {

    constructor(message) {
        super(message);

        this.name = 'NotFoundError';
        this.statusCode = 404;
    }

}


class DatabaseError extends Error {

    constructor(message) {
        super(message);

        this.name = 'DatabaseError';
        this.statusCode = 500;
    }

}

function findUser(users, id) {

    if (typeof id !== 'number') {
        throw new ValidationError('El id debe ser un número');
    }

    const user = users.find(user => user.id === id);

    if (!user) {
        throw new NotFoundError('Usuario no encontrado');
    }

    return user;
}

function handleError(e) {

    if (e instanceof ValidationError) {
        return {
            status: 400,
            error: e.message
        };
    }

    if (e instanceof NotFoundError) {
        return {
            status: 404,
            error: e.message
        };
    }

    if (e instanceof DatabaseError) {
        return {
            status: 500,
            error: e.message
        };
    }

    return {
        status: 500,
        error: 'Error interno del servidor'
    };
}

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

    } catch(e) {

        return handleError(e);

    } finally {

        connection = null;
        console.log('Conexión cerrada');

    }

}

function processRequest(users, userId, query) {

    try {

        const user = findUser(users, userId);

        const result = queryDatabase(query, false);

        return {
            user,
            result
        };

    } catch(e) {

        return handleError(e);

    }

}

const users = [
    { id: 1, name: 'Hugo', role: 'admin' },
    { id: 2, name: 'Ana', role: 'user' }
];


const e1 = new ValidationError('El campo email es requerido')
const e2 = new NotFoundError('Usuario no encontrado')
const e3 = new DatabaseError('No se pudo conectar a MySQL')

console.log(e1.name, e1.statusCode, e1.message)
console.log(e2.name, e2.statusCode, e2.message)
console.log(e3.name, e3.statusCode, e3.message)

console.log(e1 instanceof Error)
console.log(e1 instanceof ValidationError)

console.log('=== findUser ===')

try {
    console.log(findUser(users, 1))        // existe
} catch (e) {
    console.log(`${e.name}: ${e.message}`)
}

try {
    console.log(findUser(users, 99))       // no existe
} catch (e) {
    console.log(`${e.name}: ${e.message}`)
}

try {
    console.log(findUser(users, 'abc'))    // id inválido
} catch (e) {
    console.log(`${e.name}: ${e.message}`)
}

console.log('=== handleError ===')

try {
    findUser(users, 'abc')
} catch (e) {
    console.log(handleError(e))
}

try {
    findUser(users, 99)
} catch (e) {
    console.log(handleError(e))
}

try {
    throw new Error('algo inesperado')
} catch (e) {
    console.log(handleError(e))
}

console.log('=== queryDatabase ===')
console.log(queryDatabase('SELECT * FROM users', false))
console.log(queryDatabase('SELECT * FROM users', true))

console.log('=== processRequest ===')
console.log(processRequest(users, 1, 'SELECT * FROM orders'))
console.log(processRequest(users, 99, 'SELECT * FROM orders'))
console.log(processRequest(users, 'abc', 'SELECT * FROM orders'))