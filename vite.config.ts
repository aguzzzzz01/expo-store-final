import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    {
      name: "bypass-async-local-storage",
      enforce: "pre",
      resolveId(id) {
        if (id === "node:async_hooks") {
          return "\0node:async_hooks";
        }
      },
      load(id) {
        if (id === "\0node:async_hooks") {
          return `export class AsyncLocalStorage { disable() {} enable() {} enterWith() {} run() {} getStore() {} };`;
        }
      }
    }
  ]
});
