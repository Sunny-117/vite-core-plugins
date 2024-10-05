import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pluginMdx, { Framework } from './src/plugin/plugin'
import inspect from 'vite-plugin-inspect'

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
      framework: Framework.React,
      // 自定义pargma
      // pargma: `
      // /** @jsx aaa **/
      // `,
    }),
    react({
      include: /\.(mdx|jsx|tsx)/,
    }),
    inspect(),
  ],
})
