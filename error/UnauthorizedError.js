const BaseError = require("./BaseError")


class UnathorizedError extends BaseError{
    constructor(specificMessage){
        super("Unathorized Access",401,specificMessage)
    }
}

module.exports = UnathorizedError