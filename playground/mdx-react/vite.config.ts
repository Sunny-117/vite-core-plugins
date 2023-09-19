import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pluginMdx from './src/plugin/plugin'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      'vite-mdx': './plugin',
    },
  },
  plugins: [
    // 注意执行顺序
    pluginMdx({
      framework: 'react',
    }),
    react({
      include: /\.(mdx|jsx|tsx)/,
    }),
  ],
})
