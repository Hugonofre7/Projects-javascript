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
