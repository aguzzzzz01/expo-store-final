import { defineConfig } from "vinyl"; // Vite infiere el tipo automáticamente con TanStack Start
import { defineConfig as defineStartConfig } from "@tanstack/start/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineStartConfig({
  vite: {
    plugins: [
      tsconfigPaths(),
    ],
  },
});


