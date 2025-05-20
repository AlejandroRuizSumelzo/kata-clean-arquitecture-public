import { User } from "../../entities/user";
import { UserRepository } from "../../repository/user-repository";

export class SaveUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(user: User): Promise<void> {
    const existingUser = await this.userRepository.getUserByEmail(user.email);
    if (existingUser) {
      throw new Error("User already exists");
    }
    await this.userRepository.saveUser(user);
  }
}
