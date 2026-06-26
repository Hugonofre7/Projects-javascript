

function createPipeline(middlewares) {

    return function(request) {

        return middlewares.reduce((acc, middleware) => {
            if (acc.error) return acc;
            return middleware(acc);

        }, request);

    }

}

function authMiddleware(req) {
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
}

function middleware1(req) {
    return { ...req, step1: true };
}

function middleware2(req) {
    return { ...req, step2: true };
}

function middleware3(req) {
    return { ...req, step3: true };
}


const pipeline = createPipeline([
    authMiddleware,
    middleware1,
    middleware2,
    middleware3
]);

const request = {};
const requestConToken = { token: 'abc123' };

console.log(pipeline(request));
console.log(pipeline(requestConToken));


