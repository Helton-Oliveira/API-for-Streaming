import IncorrectRequest from "./IncorrectRequest.js";

class ErrorValidations extends IncorrectRequest {
    constructor(error) {
        const errorMessage = Object.values(error.errors)
        .map(errors => errors.message)
        .join("; ");

        super(`The following errors were found: - ${errorMessage}`);
    }
}

export default ErrorValidations;