import { input, select, confirm } from "@inquirer/prompts";
import { createCliController } from "../../adapters/controllers/CliController";
import { presentCli } from "../../adapters/presenters/CliPresenter";

/**
 * CLI ENTRY POINT - Точка входа для терминального интерфейса
 *
 * Использует те же функции из Core, что и веб-версия,
 * но с другими адаптерами для CLI.
 */

async function main() {
  const controller = createCliController(presentCli);

  console.clear();
  console.log("\n" + "═".repeat(50));
  console.log("КАЛЬКУЛЯТОР - CLEAN ARCHITECTURE");
  console.log("═".repeat(50) + "\n");

  console.log("💡 Это CLI версия калькулятора из браузера!");
  console.log("📦 Те же функции из Core, другой UI\n");

  let continueCalculating = true;

  while (continueCalculating) {
    try {
      const operation = await select({
        message: "Выберите операцию:",
        default: "add",
        choices: [
          { value: "add", name: "➕ Сложение" },
          { value: "subtract", name: "➖ Вычитание" },
          { value: "multiply", name: "✖️  Умножение" },
          { value: "divide", name: "➗ Деление" },
        ],
      });

      const operand1Str = await input({
        message: "Введите первое число:",
        validate: (value) => {
          const num = parseFloat(value);
          return !isNaN(num) || "Введите корректное число";
        },
      });

      const operand2Str = await input({
        message: "Введите второе число:",
        validate: (value) => {
          const num = parseFloat(value);
          return !isNaN(num) || "Введите корректное число";
        },
      });

      const operand1 = parseFloat(operand1Str);
      const operand2 = parseFloat(operand2Str);

      controller.handleCalculation(operation, operand1, operand2);

      continueCalculating = await confirm({
        message: "Выполнить еще одно вычисление?",
        default: true,
      });

      if (continueCalculating) {
        console.log("\n");
      }
    } catch (error) {
      if (error instanceof Error && error.name === "ExitPromptError") {
        continueCalculating = false;
      } else {
        console.error("Ошибка:", error);
        continueCalculating = false;
      }
    }
  }

  console.log("\n" + "═".repeat(50));
  console.log("👋 До свидания!");
  console.log("═".repeat(50) + "\n");
}

main().catch(console.error);

