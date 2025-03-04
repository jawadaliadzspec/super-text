/// <reference types="vite/client" />

declare global {
  interface Window {
    toggleDropdown: (id: string) => void;
    toggleFAQ: (id: number) => void;
  }
}

export {};
