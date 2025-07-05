/**
 * Utility Functions
 *
 * Provides helper utilities for the app. Includes `cn`, a function to merge Tailwind CSS classes conditionally.
 * Used throughout UI components for className composition.
 */
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
