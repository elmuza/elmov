import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSass } from "@rsbuild/plugin-sass";

export default defineConfig({
  html: { template: "./src/index.html" },
  tools: {
    cssLoader: {
      url: false,
    },
  },
  plugins: [pluginReact(), pluginSass()],
});
