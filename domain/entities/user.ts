import { Entity } from "../core/entity";
import { Email } from "../value-objects/email";
import { UserName } from "../value-objects/username";
import { Password } from "../value-objects/password";

interface UserProps {
  name: UserName;
  email: Email;
  password: Password;
}

export class User extends Entity<UserProps> {
  private constructor(props: UserProps, id: string) {
    super(props, id);
  }

  public static create(
    name: string,
    email: string,
    password: string,
    id?: string
  ): User {
    const userName = UserName.create(name);
    const userEmail = Email.create(email);
    const userPassword = Password.create(password);

    return new User(
      {
        name: userName,
        email: userEmail,
        password: userPassword,
      },
      id ? id : new Date().getTime().toString()
    );
  }

  get name(): UserName {
    return this._props.name;
  }

  get email(): Email {
    return this._props.email;
  }

  get password(): Password {
    return this._props.password;
  }
}
