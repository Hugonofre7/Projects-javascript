class User {
    constructor(id, name, role) {
        this.id = id;
        this.name = name;
        this.role = role;
    }

    describe() {
        return `User #${this.id}: ${this.name} (${this.role})`;
    }
}

class Service {
    constructor(name, port, status) {
        this.name = name;
        this.port = port;
        this.status = status;
    }

    isHealthy() {
        return this.status === 'active';
    }
}

class Connection {
    constructor(host) {
        this.host = host;
    }

    connect() {
        return `Conectando a ${this.host}`;
    }
}


class DatabaseConnection extends Connection {

    constructor(host, dbName) {
        super(host);
        this.dbName = dbName;
    }

    connect() {
        return `Conectando a ${this.host}, base de datos: ${this.dbName}`;
    }
}


const user1 = new User(1, 'Hugo', 'admin')
console.log(user1.describe())
console.log(user1)

console.log(Object.getPrototypeOf(user1) === User.prototype)
console.log(user1.hasOwnProperty('describe'))
console.log(User.prototype.hasOwnProperty('describe'))

const service1 = new Service('auth-service', 3000, 'active')
const service2 = new Service('payment-service', 3009, 'inactive')

console.log(service1.isHealthy())
console.log(service2.isHealthy())

const db1 = new DatabaseConnection('localhost:3306', 'epidemiologia')

console.log(db1.connect())
console.log(db1 instanceof Connection)
console.log(db1 instanceof DatabaseConnection)