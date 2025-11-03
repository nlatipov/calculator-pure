import { CalculationResponse } from "../../core/use-cases/CalculateUseCase";

/**
 * CLI PRESENTER - Отображение для терминала
 *
 * Преобразует данные из Use Case в формат для CLI.
 * Использует console, но не знает о бизнес-логике.
 */
export const presentCli = (response: CalculationResponse): void => {
  console.log("\n" + "─".repeat(50));

  if (!response.success || response.error) {
    console.error(`Ошибка: ${response.error || "Неизвестная ошибка"}`);
  } else {
    const calculation = response.calculation!;

    console.log(`Операция: ${calculation.getOperationName()}`);
    console.log(`Выражение: ${calculation.toExpression()}`);
    console.log(`Результат: ${calculation.result}`);
  }

  console.log("─".repeat(50) + "\n");
};

