import { Response, Request, NextFunction } from "express"

export interface Errors extends Error {
  statusCode?: number
  status?: string
  code? : number
}


module.exports = (
  err: Errors,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode || 500
  err.status = err.status || "error"

  // console.log("From ErrorHandler Middleware")
  console.log(err)
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    error: err,
    code: err.code,
    stack: err.stack,
  })
}
