import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Joins an array of strings into a single newline-separated string.
 * Used to serialize string[] fields into a textarea value,
 * where each item is displayed on its own line.
 */
export function joinLines(value: string[] | undefined): string | undefined {
    return value?.join('\n')
}

/**
 * Splits a newline-separated string back into an array of strings.
 * Used to deserialize a textarea value into a string[] field,
 * filtering out any empty lines.
 */
export function splitLines(value: string | undefined): string[] | undefined {
    return value ? value.split('\n').filter(Boolean) : undefined
}

export function formatYearMonth(value: string | undefined): string {
    if (!value) return ''
    if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return value.slice(0, 7)
    return value
}
