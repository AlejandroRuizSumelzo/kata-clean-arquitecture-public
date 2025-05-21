import { UserRepositoryImpl } from "./data/repository/user-repository-impl";
import { GetUsersUserCase } from "./domain/use-cases/user/get-users-use-case";
import { SaveUserUseCase } from "./domain/use-cases/user/save-user-use-case";
import { ConsolePresenter } from "./presentation/console-presenter";
import { ConsoleViewInterfaceImpl } from "./presentation/console-view-interface";

export function serviceLocator() {
  const view = new ConsoleViewInterfaceImpl();
  const userRepository = new UserRepositoryImpl();
  const getUsers = new GetUsersUserCase(userRepository);
  const saveUser = new SaveUserUseCase(userRepository);

  return new ConsolePresenter(view, getUsers, saveUser);
}
