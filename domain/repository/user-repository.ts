import { User } from "../entities/user";
import { Email } from "../value-objects/email";

export interface UserRepository {
  getUsers(): Promise<User[]>;
  saveUser(user: User): Promise<void>;
  getUserByEmail(email: Email): Promise<User>;
}
