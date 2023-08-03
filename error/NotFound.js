const BaseError = require("./BaseError")


class NotFound extends BaseError{
    constructor(specificMessage){
        super("Not Found",404,specificMessage)
    }
}
module.exports = NotFound