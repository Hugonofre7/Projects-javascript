

function createLogger(level) {
    return function(message) {
        console.log(`[${level}] ${message}`);
    };
}

const infoLogger = createLogger('INFO')
const errorLogger = createLogger('ERROR')
const debugLogger = createLogger('DEBUG')




console.log('=== LOGGER OUTPUT ===')

infoLogger('Servidor iniciado')
errorLogger('DB desconectada')
debugLogger('Request recibido en /api/users')