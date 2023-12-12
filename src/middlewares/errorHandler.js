import mongoose  from "mongoose";
import IncorrectRequest from "../errors/IncorrectRequest.js";
import ErrorValidations from "../errors/ErrorValitation.js";
import BaseError from "../errors/BaseError.js";
import NotFound from "../errors/NotFound.js";

function errorHandler(error, req, res, next) {
    console.log(error)

    if(error instanceof mongoose.Error.CastError) {
        new IncorrectRequest().sendReply(res);

    } else if(error instanceof mongoose.Error.ValidationError) {
        new ErrorValidations(error).sendReply(res);

    } else if( error instanceof NotFound) {
        error.sendReply(res);

    } else {
        new BaseError().sendReply(res);
    }
}

export default errorHandler;