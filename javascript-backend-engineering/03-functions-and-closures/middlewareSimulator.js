function createLogger(level) {
    return function(message) {
        console.log(`[${level}] ${message}`);
    };
}

const log = createLogger('INFO');
const errorLogger = createLogger('ERROR')
const debugLogger = createLogger('DEBUG')

function createPipeline(middlewares) {

    return function(request) {

        return middlewares.reduce((acc, middleware) => {
            if (acc.error) return acc;
            return middleware(acc);

        }, request);

    }

}

function createAuthMiddleware(logger) {
    return function(req) {
        logger('authMiddleware ejecutado');

        if (!req.token) {
            return {
                error: 'Unauthorized',
                status: 401
            };
        }

        return {
            ...req,
            authenticated: true
        };
    };
}

function createMiddleware1(logger) {
    return function(req) {
        logger('middleware1 ejecutado');
        return { ...req, step1: true };
    };
}

function createMiddleware2(logger) {
    return function(req) {
        logger('middleware2 ejecutado');
        return { ...req, step2: true };
    };
}

function createMiddleware3(logger) {
    return function(req) {
        logger('middleware3 ejecutado');
        return { ...req, step3: true };
    };
}


const pipeline = createPipeline([
    createAuthMiddleware(log),
    createMiddleware1(log),
    createMiddleware2(log),
    createMiddleware3(log)
]);

const request = {};
const requestConToken = { token: 'abc123' };

console.log(pipeline(request));
console.log(pipeline(requestConToken));



