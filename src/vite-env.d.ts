/// <reference types="vite/client" />

declare global {
  interface Window {
    toggleDropdown: (id: string) => void;
  }
}

export {};
