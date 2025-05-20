import { User } from "../../entities/user";
import { UserRepository } from "../../repository/user-repository";

export class GetUsersUserCase {
  constructor(private userRepository: UserRepository) {}

  execute(): Promise<User[]> {
    return this.userRepository.getUsers();
  }
}
