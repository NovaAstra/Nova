import { defineComponent } from "vue";
import { Layout } from '@nova/vue'

export const App = defineComponent({
    name: "App",
    setup() {
        return () => (
            <Layout></Layout>
        );
    },
});
