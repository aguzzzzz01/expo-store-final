import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    // Esto resuelve el error de "node:async_hooks" dándole soporte en el navegador
    nodePolyfills({
      include: ["async_hooks"],
    }),
  ],
});
