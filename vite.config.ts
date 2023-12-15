import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite"
import Vue from "@vitejs/plugin-vue"
import Jsx from "@vitejs/plugin-vue-jsx"

export default defineConfig({
    resolve: {
        extensions: [".ts", ".tsx", ".json"],
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    plugins: [Vue(), Jsx(),]
})