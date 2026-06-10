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
      // Usa un truco nativo de Vite para simular un módulo vacío sin errores
      "node:async_hooks": "\0browser-external"
    }
  }
});
