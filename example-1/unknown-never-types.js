var generateError = function (message, code) {
    throw { message: message, code: code };
};
generateError("internal server error", 500);
