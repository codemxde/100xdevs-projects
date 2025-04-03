class CustomErrors extends Error {
  statusCode;
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

class InvalidPayloadSchema extends CustomErrors {
  constructor(message = "Invalid payload schema", statusCode = 403) {
    super(message, statusCode);
    this.name = "InvalidPayloadSchema";
  }
}

class UserAlreadyExists extends CustomErrors {
  constructor(message: string = "user already exists", statusCode: number = 409) {
    super(message, statusCode);
    this.name = "UserAlreadyExists";
  }
}

class UserNotFound extends CustomErrors {
  constructor(
    message: string = "user not found in existing records",
    statusCode: number = 404
  ) {
    super(message, statusCode);
    this.name = "UserNotFound";
  }
}

class AuthenticationError extends CustomErrors {
  constructor(message: string = "failed to authneticate user", statusCode: number = 403) {
    super(message, statusCode);
    this.name = "AuthenticationError";
  }
}

export default {
  InvalidPayloadSchema,
  UserAlreadyExists,
  UserNotFound,
  AuthenticationError,
};
