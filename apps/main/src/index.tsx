import { createApp } from "vue";
import { App } from "@/App";

async function setupApp() {
    const app = createApp(App);

    app.mount("#app");
}

setupApp();
