import { ConsoleViewInterface } from "./presentation/console-view-interface";
import { Presenter } from "./presentation/presenter";
import { serviceLocator } from "./service-locator";

import readline from "readline";

class CLIApp {
  private presenter: Presenter;
  private rl: readline.Interface;

  constructor() {
    const view = new ConsoleViewInterface();
    this.presenter = serviceLocator(view);

    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  showMenu(): void {
    console.log("\n=== MENU ===");
    console.log("1. Listar usuarios");
    console.log("2. Crear nuevo usuario");
    console.log("0. Salir");

    this.rl.question("Seleccione una opción: ", (option) => {
      switch (option) {
        case "1":
          this.listUsers();
          break;
        case "2":
          this.createUser();
          break;
        case "0":
          this.exit();
          break;
        default:
          console.log("Opción no válida");
          this.showMenu();
      }
    });
  }

  async listUsers(): Promise<void> {
    console.log("\nObteniendo usuarios...");
    await this.presenter.getUsers();
    this.showMenu();
  }

  async createUser(): Promise<void> {
    console.log("\nCreando nuevo usuario:");
    await this.presenter.saveUser();
    this.showMenu();
  }

  exit(): void {
    console.log("Saliendo de la aplicación...");
    this.rl.close();
    process.exit(0);
  }

  processArgs(args: string[]): void {
    const cliArgs = args.slice(2);

    if (cliArgs.length === 0) {
      this.showMenu();
      return;
    }

    switch (cliArgs[0]) {
      case "list":
        this.listUsers().then(() => this.exit());
        break;
      case "create":
        this.createUser().then(() => this.exit());
        break;
      case "--help":
      case "-h":
        this.showHelp();
        this.exit();
        break;
      default:
        console.log(`Comando desconocido: ${cliArgs[0]}`);
        this.showHelp();
        this.exit();
    }
  }

  showHelp(): void {
    console.log("\nUso: node app.js [comando]");
    console.log("\nComandos disponibles:");
    console.log("  list               Lista todos los usuarios");
    console.log("  create             Crea un nuevo usuario");
    console.log("  --help, -h         Muestra esta ayuda");
    console.log(
      "\nSi no se especifica ningún comando, se mostrará un menú interactivo."
    );
  }
}

const app = new CLIApp();
app.processArgs(process.argv);
