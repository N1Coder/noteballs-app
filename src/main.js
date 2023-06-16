// Vue and Vue Router
import { createApp } from "vue"
import App from "@/App.vue"
import router from "@/router"
const app = createApp(App)

// Pinia
import { createPinia } from "pinia"
const pinia = createPinia()

// Tailwind and Preline UI style
import "@/style.css"
import("preline")
import "@/config/toggleTheme.js"

app.use(pinia).use(router).mount("#app")
