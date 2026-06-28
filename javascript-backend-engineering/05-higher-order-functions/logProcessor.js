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

function formatLogs(logs) {
    return logs.map(log => `[${log.level}] ${log.timestamp} - ${log.message}`); 
}

function countByLevel(logs) {
    return logs.reduce((acc, log) => {
        acc[log.level] = (acc[log.level] || 0) + 1;
        return acc;
    }, {});

}

function processLogs(logs) {
    return logs
        .filter(log => log.level === 'ERROR')
        .map(log => `[${log.level}] ${log.timestamp} - ${log.message}`);
}


console.log('=== filterByLevel ERROR ===')
console.log(filterByLevel(logs, 'ERROR'))

console.log('=== filterByLevel INFO ===')
console.log(filterByLevel(logs, 'INFO'))

console.log('=== formatLogs ERROR ===')
console.log(formatLogs(filterByLevel(logs, 'ERROR')))

console.log('=== countByLevel ===')
console.log(countByLevel(logs))

console.log('=== processLogs ===')
console.log(processLogs(logs))
