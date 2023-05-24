import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./custom-api-error.js";

class UnAuthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    // UNAUTHORIZED means - 401
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

export default UnAuthenticatedError;
