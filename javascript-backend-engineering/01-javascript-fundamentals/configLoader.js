function getConfig(env, key) {
    const value = env[key];
    if (value === undefined) {
        return null;
    }
    
    return value;
}

const env = {
    PORT: 3000,
    DB_URL: 'mysql://localhost:3306/epidemiologia',
    MODE: 'development'
}

console.log(getConfig(env, "PORT"));
console.log(getConfig(env, "DB_URL"));
console.log(getConfig(env, "MODE"));
console.log(getConfig(env, "HOST"));