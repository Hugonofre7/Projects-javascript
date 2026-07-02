const { findUser } = require('./userService');
const { queryDatabase } = require('./dbService');
const { handleError } = require('./errors');

function processRequest(userId, query) {

    try {

        const user = findUser(userId);

        const result = queryDatabase(query, false);

        return {
            user,
            result
        };

    } catch (e) {

        return handleError(e);

    }

}

module.exports = {
    processRequest
};