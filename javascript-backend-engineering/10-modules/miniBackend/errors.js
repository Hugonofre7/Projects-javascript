class ValidationError extends Error {

    constructor(message) {
        super(message);

        this.name = 'ValidationError';
        this.statusCode = 400;
    }

}


class NotFoundError extends Error {

    constructor(message) {
        super(message);

        this.name = 'NotFoundError';
        this.statusCode = 404;
    }

}


class DatabaseError extends Error {

    constructor(message) {
        super(message);

        this.name = 'DatabaseError';
        this.statusCode = 500;
    }

}

function handleError(e) {

    if (e instanceof ValidationError) {
        return {
            status: 400,
            error: e.message
        };
    }

    if (e instanceof NotFoundError) {
        return {
            status: 404,
            error: e.message
        };
    }

    if (e instanceof DatabaseError) {
        return {
            status: 500,
            error: e.message
        };
    }

    return {
        status: 500,
        error: 'Error interno del servidor'
    };

}

module.exports = {
    ValidationError,
    NotFoundError,
    DatabaseError,
    handleError
};
