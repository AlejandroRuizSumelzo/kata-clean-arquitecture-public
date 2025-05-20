import { ValueObject } from "../core/value-object";

interface EmailProps {
  value: string;
}

export class Email extends ValueObject<EmailProps> {
  private constructor(props: EmailProps) {
    super(props);
  }

  public static create(email: string): Email {
    if (!email || email.trim().length === 0) {
      throw new Error("Email cannot be empty");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      throw new Error("Invalid email format");
    }

    return new Email({ value: email.toLowerCase() });
  }
}
