import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import demoPlugin from './src/demo-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), demoPlugin('post'), demoPlugin(), demoPlugin('pre')],
  resolve: {
    alias: {
      '@foo': './src/main.tsx',
    },
  },
})

// buildStart pre
// buildStart undefined
// buildStart post
