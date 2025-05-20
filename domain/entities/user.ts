import { Entity } from "../core/entity";
import { Email } from "../value-objets/email";
import { Password } from "../value-objets/password";
import { UserName } from "../value-objets/username";

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
}
