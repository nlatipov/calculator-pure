import { Operation } from "../entities/Calculation";

/**
 * DOMAIN SERVICE - Математические операции
 */

export const add = (a: number, b: number): number => {
  return a + b;
};

export const subtract = (a: number, b: number): number => {
  return a - b;
};

export const multiply = (a: number, b: number): number => {
  return a * b;
};

export const divide = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error("Деление на ноль невозможно");
  }
  return a / b;
};

export const execute = (operation: Operation, a: number, b: number): number => {
  switch (operation) {
    case "add":
      return add(a, b);
    case "subtract":
      return subtract(a, b);
    case "multiply":
      return multiply(a, b);
    case "divide":
      return divide(a, b);
    default:
      throw new Error(`Неизвестная операция: ${operation}`);
  }
};

