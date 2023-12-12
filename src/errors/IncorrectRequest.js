import BaseError from "./BaseError.js";

class IncorrectRequest extends BaseError {
    constructor(message = "One or more incorrect data."){
        super(message, 400);
    }
}

export default IncorrectRequest;