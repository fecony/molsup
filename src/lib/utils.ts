import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

const parseNumber = (value: unknown) => {
  if (typeof value === "number") return value;
  if (typeof value === "string") {
    return parseFloat(value.replace(",", "."));
  }

  return NaN;
};

export const validatePositiveNumber = (value: unknown, fieldName: string) => {
  const num = parseNumber(value);

  if (isNaN(num) || num < 0) {
    throw new Error(
      `Invalid ${fieldName}: ${value}. Expected a positive number.`,
    );
  }
  return num;
};
