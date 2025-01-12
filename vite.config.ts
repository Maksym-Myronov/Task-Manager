import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      core: "/src/core",
      assets: "/src/assets",
      hooks: "/src/hooks",
      pages: "/src/pages",
      styles: "/src/styles",
      config: "/src/config",
      routes: "/src/routes",
      shared: "/src/shared",
      store: "/src/store"
    }
  }
})
