import {
  calculate,
  CalculationRequest,
} from "../../core/use-cases/CalculateUseCase";
import { isValidOperation } from "../../core/entities/Calculation";

/**
 * CLI CONTROLLER - Обработчик команд терминала
 *
 * Получает данные из CLI и:
 * 1. Формирует CalculationRequest
 * 2. Вызывает Use Case
 * 3. Передает результат Presenter'у
 */

type PresentFunction = (response: any) => void;

export const createCliController = (present: PresentFunction) => {
  const handleCalculation = (
    operation: string,
    operand1: number,
    operand2: number
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
      operand1,
      operand2,
    };

    const response = calculate(request);
    present(response);
  };

  return { handleCalculation };
};

