const BaseError = require("./BaseError")


class ValidationError extends BaseError{
    constructor(specificMessage){
        super("Validation Error",403,specificMessage)
    }
}
module.exports = ValidationError