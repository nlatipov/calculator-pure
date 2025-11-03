/**
 * ENTITY - Вычисление
 *
 * Это Entity в терминах Clean Architecture:
 * - Имеет состояние (данные)
 * - Содержит бизнес-правила о том, что такое "вычисление"
 * - Представляет концепцию из предметной области
 */

export type Operation = "add" | "subtract" | "multiply" | "divide";

export const isValidOperation = (value: string): value is Operation => {
  return ["add", "subtract", "multiply", "divide"].includes(value);
};

export class Calculation {
  constructor(
    public readonly operand1: number,
    public readonly operand2: number,
    public readonly operation: Operation,
    public readonly result: number
  ) {
    this.validate();
  }

  private validate(): void {
    if (isNaN(this.operand1) || isNaN(this.operand2)) {
      throw new Error("Операнды должны быть числами");
    }
    if (isNaN(this.result)) {
      throw new Error("Результат должен быть числом");
    }
  }

  toExpression(): string {
    const symbols: Record<Operation, string> = {
      add: "+",
      subtract: "−",
      multiply: "×",
      divide: "÷",
    };

    return `${this.operand1} ${symbols[this.operation]} ${this.operand2} = ${
      this.result
    }`;
  }

  getOperationName(): string {
    const names: Record<Operation, string> = {
      add: "Сложение",
      subtract: "Вычитание",
      multiply: "Умножение",
      divide: "Деление",
    };

    return names[this.operation];
  }
}

