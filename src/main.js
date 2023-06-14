// Vue and Vue Router
import { createApp } from "vue"
import App from "@/App.vue"
import router from "@/router"

// Tailwind and Preline UI style
import "@/style.css"
import("preline")
import "@/config/toggleTheme.js"

createApp(App).use(router).mount("#app")
