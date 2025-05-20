import { ValueObject } from "../core/value-object";

interface UserNameProps {
  value: string;
}

export class UserName extends ValueObject<UserNameProps> {
  private constructor(props: UserNameProps) {
    super(props);
  }

  public static create(name: string): UserName {
    return new UserName({ value: name });
  }
}
