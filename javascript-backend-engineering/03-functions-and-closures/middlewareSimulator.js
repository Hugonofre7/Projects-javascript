

function createPipeline(middlewares) {

    return function(request) {

        return middlewares.reduce((acc, middleware) => {

            return middleware(acc);

        }, request);

    }

}

function middleware1(req) {
    req.step1 = true;
    return req;
}

function middleware2(req) {
    req.step2 = true;
    return req;
}

function middleware3(req) {
    req.step3 = true;
    return req;
}

const pipeline = createPipeline([
    middleware1,
    middleware2,
    middleware3
]);

const request = {};

console.log(pipeline(request));

