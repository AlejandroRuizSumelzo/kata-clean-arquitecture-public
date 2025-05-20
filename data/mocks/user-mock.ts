import { User } from "../../domain/entities/user";

export class UserMock {
  public static getUsers(): User[] {
    return [
      User.create("John Doe", "john.doe@example.com", "Password123!", "1"),

      User.create(
        "Alice Smith",
        "alice.smith@example.com",
        "SecurePass456!",
        "2"
      ),

      User.create(
        "Carlos Rodriguez",
        "carlos.rodriguez@example.com",
        "StrongPwd789!",
        "3"
      ),
    ];
  }

  public static getUserByIndex(index: number): User {
    const users = this.getUsers();
    if (index < 0 || index >= users.length) {
      throw new Error(`User index out of bounds: ${index}`);
    }
    return users[index];
  }
}
