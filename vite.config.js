import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    devSourcemap: true,
  },
  plugins: [react()],
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          ShoppingCartContext: ["./src/context/ShoppingCartContext.jsx"],
        },
      },
    },
  },
  server: {
    // firefox에서 hot reload 표시 안되게 하기
    //**https://www.notion.so/vite-hot-updated-afbfbe9a0c484cc293fd5eddee1dd71c?pvs=4
    hmr: {
      overlay: false,
    },
  },
})
