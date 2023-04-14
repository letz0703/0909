import {defineConfig} from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          ShoppingCartContext: ["./src/context/ShoppingCartContext.jsx"]
        }
      }
    }
  },
  server: {
    // firefox에서 hot reload 표시 안되게 하기
    //**https://www.notion.so/vite-hot-updated-afbfbe9a0c484cc293fd5eddee1dd71c?pvs=4
    hmr: {
      overlay: false
    }
  }
})
