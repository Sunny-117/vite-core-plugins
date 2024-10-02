import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueI18n from '@scope/i18n'
import inspect from 'vite-plugin-inspect'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // vueI18n({
    //   include: path.resolve(__dirname, './src/locales/**'),
    // }),
    vueI18n(),
    inspect(),
  ],
})
