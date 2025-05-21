import { User } from "../domain/entities/user";
import { ConsoleViewInterface } from "./console-presenter";

export class ConsoleViewInterfaceImpl implements ConsoleViewInterface {
  showUsers(users: User[]): void {
    console.log("Usuarios:");
    users.map((user) => {
      console.log(`El usuario: ${user.name} - ${user.email.value}`);
    });
  }

  showError(error: string): void {
    console.error("Error:", error);
  }

  showMessage(message: string): void {
    console.log(message);
  }

  requestUserEmail(): Promise<string> {
    return new Promise((resolve) => {
      const email = prompt("Ingrese su correo electrónico:");
      if (email) {
        resolve(email);
      } else {
        resolve("");
      }
    });
  }

  requestPassword(): Promise<string> {
    return new Promise((resolve) => {
      const password = prompt("Ingrese su contraseña:");
      if (password) {
        resolve(password);
      } else {
        resolve("");
      }
    });
  }
  requestUsername(): Promise<string> {
    return new Promise((resolve) => {
      const username = prompt("Ingrese su nombre de usuario:");
      if (username) {
        resolve(username);
      } else {
        resolve("");
      }
    });
  }
}
