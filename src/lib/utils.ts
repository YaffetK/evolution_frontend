import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function merge<T, U>(objA: T, objB: U) {
  return { ...objA, ...objB };
}
