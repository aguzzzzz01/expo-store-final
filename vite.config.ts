import { defineConfig } from "vite";
import { defineConfig as defineStartConfig } from "@tanstack/start/config";
import tsconfigPaths from "vite-tsconfig-paths";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

export default defineStartConfig({
  vite: {
    plugins: [
      tsconfigPaths(),
      TanStackRouterVite({
        routesDirectory: "./src/routes",
        generatedRouteTree: "./src/routeTree.gen.ts",
      })
    ],
  },
});

