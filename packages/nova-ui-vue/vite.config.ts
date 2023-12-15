import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import jsx from "@vitejs/plugin-vue-jsx"

export default defineConfig({
    resolve: {
        extensions: [".ts", ".tsx", ".json"],
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    plugins: [vue(), jsx(),]
})