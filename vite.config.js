import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig(({ command }) => {
  const isDev = command === "serve";
  return {
    plugins: [sveltekit()],
    build: !isDev
      ? {
          lib: {
            entry: "src/lib/AlphabetList.svelte",
            name: "AlphabetList",
            fileName: (format) => `index.${format}.js`,
          },
          rollupOptions: {
            external: ["svelte"],
            output: {
              globals: {
                svelte: "Svelte",
              },
            },
          },
        }
      : {},
  };
});
