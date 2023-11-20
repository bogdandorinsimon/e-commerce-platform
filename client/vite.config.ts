import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import type { UserConfig } from "vite";
import checker from "vite-plugin-checker";
import tsconfigPaths from "vite-tsconfig-paths";
import type { InlineConfig } from "vitest";

type ViteConfig = UserConfig & { test: InlineConfig };
const config: ViteConfig = {
  plugins: [
    react(),
    tsconfigPaths(),
    checker({
      typescript: true
    })
  ],
  server: {
    port: 8080
  },
  define: {
    global: "globalThis"
  },
  test: {
    environment: "jsdom",
    setupFiles: "./src/tests/setup.ts"
  }
};

export default defineConfig(config);
