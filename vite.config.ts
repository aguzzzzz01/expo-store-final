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
      // Engaña a TanStack dándole un objeto vacío nativo en lugar de romper el build
      "node:async_hooks": "path-browserify"
    }
  }
});
