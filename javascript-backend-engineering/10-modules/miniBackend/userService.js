const {
    ValidationError,
    NotFoundError
} = require('./errors');

const users = [
    { id: 1, name: 'Hugo', role: 'admin' },
    { id: 2, name: 'Ana', role: 'user' }
];

function findUser(id) {

    if (typeof id !== 'number') {
        throw new ValidationError('El id debe ser un número');
    }

    const user = users.find(user => user.id === id);

    if (!user) {
        throw new NotFoundError('Usuario no encontrado');
    }

    return user;

}

module.exports = {
    findUser
};