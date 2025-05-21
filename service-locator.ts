import { UserRepositoryImpl } from "./data/repository/user-repository-impl";
import { GetUsersUserCase } from "./domain/use-cases/user/get-users-use-case";
import { SaveUserUseCase } from "./domain/use-cases/user/save-user-use-case";
import { Presenter, ViewInterface } from "./presentation/presenter";

export function serviceLocator(view: ViewInterface) {
  const userRepository = new UserRepositoryImpl();
  const getUsers = new GetUsersUserCase(userRepository);
  const saveUser = new SaveUserUseCase(userRepository);

  return new Presenter(view, getUsers, saveUser);
}
