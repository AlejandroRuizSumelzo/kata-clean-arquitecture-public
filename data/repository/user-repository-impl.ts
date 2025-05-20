import { User } from "../../domain/entities/user";
import { UserRepository } from "../../domain/repository/user-repository";
import { Email } from "../../domain/value-objects/email";
import { UserMock } from "../mocks/user-mock";

export class UserRepositoryImpl implements UserRepository {
  private users: User[] = [];

  constructor() {
    this.users = UserMock.getUsers();
  }

  async getUsers(): Promise<User[]> {
    return this.users;
  }

  async saveUser(user: User): Promise<void> {
    this.users.push(user);
  }

  async getUserByEmail(email: Email): Promise<User> {
    const user = this.users.find((user) => user.email.equals(email));
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }
}
