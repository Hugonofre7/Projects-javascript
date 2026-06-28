const logs = [
    {
        timestamp: '2024-01-15T10:30:00',
        level: 'INFO',
        message: 'Servidor iniciado correctamente'
    },
    {
        timestamp: '2024-01-15T10:31:12',
        level: 'DEBUG',
        message: 'Conexión a base de datos verificada'
    },
    {
        timestamp: '2024-01-15T10:32:45',
        level: 'ERROR',
        message: 'Error al conectar con la base de datos'
    },
    {
        timestamp: '2024-01-15T10:35:20',
        level: 'INFO',
        message: 'Usuario autenticado'
    },
    {
        timestamp: '2024-01-15T10:40:05',
        level: 'ERROR',
        message: 'Servicio no disponible'
    },
    {
        timestamp: '2024-01-15T10:45:30',
        level: 'INFO',
        message: 'Petición procesada'
    }
];

function filterByLevel(logs, level) {
    return logs.filter(log => log.level === level);
}

console.log('=== filterByLevel ERROR ===')
console.log(filterByLevel(logs, 'ERROR'))

console.log('=== filterByLevel INFO ===')
console.log(filterByLevel(logs, 'INFO'))

