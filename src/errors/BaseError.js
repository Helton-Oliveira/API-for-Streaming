class BaseError {
    constructor(message = "Internal Server Error.", status) {
        this.message = message,
        this.status = status
    }

    sendReply(res) {
        res.status(this.status).send({
            message: this.message,
            status: this.status
        });
    }
}

export default BaseError;