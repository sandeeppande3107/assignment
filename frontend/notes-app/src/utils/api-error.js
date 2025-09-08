class ApiError extends Error {
    constructor(message, error) {
        super(message)
        this.name = "ApiError";
        this.error = error;
    }
}

export default ApiError