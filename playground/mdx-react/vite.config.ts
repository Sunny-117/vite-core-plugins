import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pluginMdx from '../../packages/vite-plugin-mdx/dist/index.mjs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), pluginMdx({})],
})
