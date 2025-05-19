import { ValueObject } from "../core/value-object";

interface PasswordProps {
  value: string;
}

export class Password extends ValueObject<PasswordProps> {
  private constructor(props: PasswordProps) {
    super(props);
  }

  public create(password: string): Password {
    if (!password || password.trim().length === 0) {
      throw new Error("Password cannot be empty");
    }

    if (password.length < 8) {
      throw new Error("Password must be at least 8 characters long");
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!passwordRegex.test(password)) {
      throw new Error(
        "Password must contain at least one letter and one number"
      );
    }

    return new Password({ value: password });
  }
}
