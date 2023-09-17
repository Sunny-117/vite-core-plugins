import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import pluginMdx from 'vite-plugin-mdx'
import pluginMdx from './plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    pluginMdx({}),
    vueJsx({
      include: /\.(jsx|tsx|mdx)/,
    }),
  ],
})