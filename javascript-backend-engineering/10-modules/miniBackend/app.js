const { processRequest } = require('./router');

console.log('=== Usuario válido ===');
console.log(
    processRequest(
        1,
        'SELECT * FROM users'
    )
);

console.log('=== Usuario no encontrado ===');
console.log(
    processRequest(
        99,
        'SELECT * FROM users'
    )
);

console.log('=== Id inválido ===');
console.log(
    processRequest(
        'abc',
        'SELECT * FROM users'
    )
);

