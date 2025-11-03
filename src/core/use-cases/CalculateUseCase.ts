import { Calculation, Operation } from "../entities/Calculation";
import { execute as executeOperation } from "../services/MathOperations";

/**
 * USE CASE - Сценарий вычисления
 *
 * Оркеструет взаимодействие между:
 * - Entity (Calculation)
 * - Domain Service (функции математических операций)
 *
 * Ответственность:
 * - Валидация входных данных
 * - Выполнение вычисления через сервис
 * - Создание Entity с результатом
 * - Обработка ошибок
 */

export interface CalculationRequest {
  operation: Operation;
  operand1: number;
  operand2: number;
}

export interface CalculationResponse {
  success: boolean;
  calculation?: Calculation;
  error?: string;
}

export const calculate = (request: CalculationRequest): CalculationResponse => {
  try {
    if (isNaN(request.operand1) || isNaN(request.operand2)) {
      return {
        success: false,
        error: "Операнды должны быть числами",
      };
    }

    const result = executeOperation(
      request.operation,
      request.operand1,
      request.operand2
    );

    const calculation = new Calculation(
      request.operand1,
      request.operand2,
      request.operation,
      result
    );

    return {
      success: true,
      calculation,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Неизвестная ошибка",
    };
  }
};

