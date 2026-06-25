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

function getConfigWithDefault(env, key, defaultValue) {
    const value = getConfig(env, key);
    if (value === null) {
        return defaultValue;
    }
    return value;
}


function validateConfig(env, requiredKeys) {
    const missingKeys = requiredKeys.filter(
        key => getConfig(env, key) === null
    );

    return {
        valid: missingKeys.length === 0,
        missing: missingKeys
    };
}

const requiredKeys = ['PORT', 'DB_URL', 'MODE', 'HOST'];

const result = validateConfig(env, requiredKeys);

console.log('=== getConfig ===')
console.log(getConfig(env, "PORT"));
console.log(getConfig(env, "DB_URL"));
console.log(getConfig(env, "MODE"));
console.log(getConfig(env, "HOST"));

console.log('=== getConfigWithDefault ===')
console.log(getConfigWithDefault(env, 'HOST', 'localhost'))
console.log(getConfigWithDefault(env, 'PORT', 8080))

console.log('=== validateConfig ===')
console.log(validateConfig(env, ['PORT', 'DB_URL', 'MODE']))
console.log(validateConfig(env, ['PORT', 'DB_URL', 'HOST', 'SECRET'])) 
