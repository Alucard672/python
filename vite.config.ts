import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // GitHub Pages 项目页需要以仓库名作为前缀
  base: '/python/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    target: 'es2020'
  },
  esbuild: {
    target: 'es2020'
  }
})