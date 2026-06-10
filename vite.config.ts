import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths()
  ],
  build: {
    rollupOptions: {
      // Trata el módulo como externo para que no rompa la compilación del navegador
      external: ["node:async_hooks"]
    }
  }
});
