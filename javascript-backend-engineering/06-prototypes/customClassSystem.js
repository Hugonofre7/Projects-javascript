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

const user1 = new User(1, 'Hugo', 'admin')
console.log(user1.describe())
console.log(user1)

console.log(Object.getPrototypeOf(user1) === User.prototype)
console.log(user1.hasOwnProperty('describe'))
console.log(User.prototype.hasOwnProperty('describe'))