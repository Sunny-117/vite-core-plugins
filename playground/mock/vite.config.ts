import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteMockServe from '@scope/mock'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), viteMockServe({})],
})
