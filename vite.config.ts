import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";
import fs from "fs";

export default defineConfig({
  // Fuerza a Vite a buscar el index.html en src si no lo encuentra en la raíz
  root: fs.existsSync(path.resolve(__dirname, "index.html")) ? "." : "src",
  plugins: [
    react(),
    tsconfigPaths()
  ],
  build: {
    // Garantiza que la salida siempre vaya a parar a la carpeta dist principal
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true
  }
});

