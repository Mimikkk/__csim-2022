import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import alias from "@rollup/plugin-alias";
import { resolve } from "path";

export default defineConfig({
  plugins: [solidPlugin(), alias()],
  resolve: {
    alias: {
      "@": resolve(resolve(__dirname), "src"),
      "@icons": resolve(resolve(__dirname), "src/game-icons"),
    },
  },
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
});
