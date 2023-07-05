// Vue and Vue Router
import { createApp, markRaw } from "vue"
import App from "@/App.vue"
import router from "@/router"
const app = createApp(App)

// Pinia
import { createPinia } from "pinia"
const pinia = createPinia()
pinia.use(({ store }) => {
  store.router = markRaw(router)
})

// Tailwind and Preline UI style
import "@/style.css"
import("preline")
import "@/config/toggleTheme.js"

app.use(pinia).use(router).mount("#app")
