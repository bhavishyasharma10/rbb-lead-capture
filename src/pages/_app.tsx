/**
 * Custom App Component
 *
 * Wraps all pages in the application, allowing for global styles and shared logic.
 * Imports global CSS. Required for Next.js custom app setup.
 */
import type { AppProps } from "next/app";
import "../app/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
} 