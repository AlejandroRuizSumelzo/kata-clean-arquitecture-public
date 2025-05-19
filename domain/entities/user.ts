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
  private constructor() {}
}
