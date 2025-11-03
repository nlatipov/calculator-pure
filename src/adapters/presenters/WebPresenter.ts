import { CalculationResponse } from "../../core/use-cases/CalculateUseCase";

/**
 * WEB PRESENTER - Отображение для браузера
 *
 * Преобразует данные из Use Case в формат для веб-интерфейса.
 * Знает о DOM, но не знает о бизнес-логике.
 */
export const presentWeb = (response: CalculationResponse): void => {
  const resultElement = document.getElementById("result");

  if (!resultElement) return;

  if (!response.success || response.error) {
    resultElement.innerHTML = `
      <div class="error">
        <span class="message">${response.error || "Неизвестная ошибка"}</span>
      </div>
    `;
    return;
  }

  const calculation = response.calculation!;

  resultElement.innerHTML = `
    <div class="success">
      <div class="calculation">
        ${calculation.toExpression()}
      </div>
      <div class="meta">
        <small>${calculation.getOperationName()}</small>
      </div>
    </div>
  `;
};

