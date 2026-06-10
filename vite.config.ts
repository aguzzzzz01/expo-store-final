import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths()
  ],
  resolve: {
    alias: {
      // Reemplaza el módulo problemático por un objeto vacío nativo
      "node:async_hooks": "{}",
    }
  }
});

