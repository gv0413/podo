import { sveltekit } from "@sveltejs/kit/vite";
import { adorableCSS } from "adorable-css/vite";
import type { UserConfig } from "vite";
import { resolve } from "path";

const config: UserConfig = {
  base: "",
  resolve: {
    alias: {
      src: resolve("src"),
    },
  },
  plugins: [adorableCSS(), sveltekit()],
};

export default config;
