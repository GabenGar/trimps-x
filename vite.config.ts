import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    remix({
      basename: "/trimps-x/",
      appDirectory: "src",
      buildDirectory: "dist",
      ignoredRouteFiles: ["**/*.scss"],
      ssr: false,
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    // tsconfigPaths(),
  ],
  base: "/trimps-x/",
});
