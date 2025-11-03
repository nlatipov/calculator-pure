import {
  calculate,
  CalculationRequest,
} from "../../core/use-cases/CalculateUseCase";
import { isValidOperation } from "../../core/entities/Calculation";

/**
 * WEB CONTROLLER - Обработчик событий браузера
 *
 * Получает события от UI (клики, ввод) и:
 * 1. Извлекает данные из формы
 * 2. Преобразует их в CalculationRequest
 * 3. Вызывает Use Case
 * 4. Передает результат Presenter'у
 */

type PresentFunction = (response: any) => void;

interface FormElements {
  form: HTMLFormElement;
  operand1Input: HTMLInputElement;
  operand2Input: HTMLInputElement;
  operationSelect: HTMLSelectElement;
  calculateBtn: HTMLElement;
}

const getFormElements = (): FormElements => {
  return {
    form: document.getElementById("calculator-form") as HTMLFormElement,
    operand1Input: document.getElementById("operand1") as HTMLInputElement,
    operand2Input: document.getElementById("operand2") as HTMLInputElement,
    operationSelect: document.getElementById("operation") as HTMLSelectElement,
    calculateBtn: document.getElementById("calculate") as HTMLElement,
  };
};

const setupCalculationHandlers = (
  elements: FormElements,
  onCalculate: (operation: string, operand1: string, operand2: string) => void
): void => {
  const performCalculation = () => {
    onCalculate(
      elements.operationSelect.value,
      elements.operand1Input.value,
      elements.operand2Input.value
    );
  };

  elements.calculateBtn.addEventListener("click", performCalculation);

  elements.form.addEventListener("submit", (e) => {
    e.preventDefault();
    performCalculation();
  });

  document.querySelectorAll('input[type="number"]').forEach((input) => {
    input.addEventListener("keypress", (e) => {
      if ((e as KeyboardEvent).key === "Enter") {
        performCalculation();
      }
    });
  });
};

export const createWebController = (present: PresentFunction) => {
  const handleCalculation = (
    operation: string,
    operand1: string,
    operand2: string
  ): void => {
    if (!isValidOperation(operation)) {
      present({
        success: false,
        error: `Неизвестная операция: ${operation}`,
      });
      return;
    }

    const request: CalculationRequest = {
      operation,
      operand1: parseFloat(operand1),
      operand2: parseFloat(operand2),
    };

    const response = calculate(request);
    present(response);
  };

  const setupEventListeners = (): void => {
    const elements = getFormElements();
    setupCalculationHandlers(elements, handleCalculation);
  };

  return { handleCalculation, setupEventListeners };
};

