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

export default { InvalidPayloadSchema, UserAlreadyExists };
