import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { fileURLToPath } from "url"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@views": fileURLToPath(new URL("./src/views", import.meta.url)),
      "@components": fileURLToPath(
        new URL("./src/components", import.meta.url)
      ),
      "@stores": fileURLToPath(new URL("./src/stores", import.meta.url)),
      "@directives": fileURLToPath(
        new URL("./src/directives", import.meta.url)
      ),
      "@use": fileURLToPath(new URL("./src/use", import.meta.url)),
      "@config": fileURLToPath(new URL("./src/config", import.meta.url)),
    },
  },
  server: {
    port: 3000,
    host: true,
  },
})
