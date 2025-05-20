import { ValueObject } from "../core/value-object";

interface UserNameProps {
  value: string;
}

export class UserName extends ValueObject<UserNameProps> {
  private constructor(props: UserNameProps) {
    super(props);
  }

  public static create(name: string): UserName {
    if (!name || name.trim().length === 0) {
      throw new Error("User name cannot be empty");
    }

    return new UserName({ value: name });
  }

  get value(): string {
    return this._props.value;
  }
}
