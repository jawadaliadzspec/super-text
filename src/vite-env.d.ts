/// <reference types="vite/client" />

declare global {
  interface Window {
    toggleElement: (id: string) => void;
    toggleFAQ: (id: number) => void;
  }
}

export {};
