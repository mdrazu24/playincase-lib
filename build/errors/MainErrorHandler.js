"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainErrorHandler = void 0;
const MainErrorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";
    // console.log("From ErrorHandler Middleware")
    console.log(err);
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
        error: err,
        code: err.code,
        stack: err.stack,
    });
};
exports.MainErrorHandler = MainErrorHandler;
