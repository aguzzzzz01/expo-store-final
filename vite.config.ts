import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  // Le dice a Vite que todo tu proyecto real está en la carpeta 'versionfinal'
  root: "versionfinal",
  plugins: [
    react(),
    tsconfigPaths()
  ],
  build: {
    // Saca el resultado limpio a la carpeta dist principal que espera Cloudflare
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true
  }
});

