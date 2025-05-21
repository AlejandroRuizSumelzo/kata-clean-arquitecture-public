/* Tiene que usar la interfaz de la vista para mostrar el mensaje*/

import { User } from "../domain/entities/user";
import { GetUsersUserCase } from "../domain/use-cases/user/get-users-use-case";
import { SaveUserUseCase } from "../domain/use-cases/user/save-user-use-case";
import { Email } from "../domain/value-objects/email";

export interface ViewInterface {
  showMessage(message: string): void;
  showError(error: string): void;
  showUsers(users: User[]): void;
  requestUserEmail(): Promise<string>;
  requestPassword(): Promise<string>;
  requestUsername(): Promise<string>;
}

export class Presenter {
  private view: ViewInterface;
  private getUsersUseCase: GetUsersUserCase;
  private saveUserUseCase: SaveUserUseCase;

  constructor(
    view: ViewInterface,
    getUsersUseCase: GetUsersUserCase,
    saveUserUseCase: SaveUserUseCase
  ) {
    this.view = view;
    this.getUsersUseCase = getUsersUseCase;
    this.saveUserUseCase = saveUserUseCase;
  }

  async getUsers() {
    try {
      const users = await this.getUsersUseCase.execute();
      this.view.showUsers(users);
    } catch (error) {
      this.view.showError("Error fetching users");
    }
  }

  async saveUser() {
    try {
      const username = await this.view.requestUsername();
      const email = await this.view.requestUserEmail();
      const password = await this.view.requestPassword();
      const user = User.create(username, email, password);
      await this.saveUserUseCase.execute(user);
      this.view.showMessage("User saved successfully");
    } catch (error) {
      this.view.showError("Error saving user");
    }
  }
}
