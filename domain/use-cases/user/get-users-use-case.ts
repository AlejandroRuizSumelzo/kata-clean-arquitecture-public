import { User } from "../../entities/user";
import { UserRepository } from "../../repository/user-repository";

export class GetUsersUserCase {
  constructor(private userRepository: UserRepository) {}

  async execute(): Promise<User[]> {
    return await this.userRepository.getUsers();
  }
}
