import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import jsx from "@vitejs/plugin-vue-jsx";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig(() => {

  const isCustomElement = (tag: string) => tag === "micro-app";

  return {
    resolve: {
      extensions: [".ts", ".tsx", ".json", ".less"],
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    plugins: [
      vue({
        template: {
          compilerOptions: {
            isCustomElement,
          },
        },
      }),
      jsx({
        isCustomElement,
      }),
      vanillaExtractPlugin(),
    ],
  
  };
});
