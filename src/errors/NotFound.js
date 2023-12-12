import BaseError from "./BaseError.js";

class NotFound extends BaseError {
    constructor(response = "Page not found") {
        super(response, 404);
    }
}

export default NotFound;