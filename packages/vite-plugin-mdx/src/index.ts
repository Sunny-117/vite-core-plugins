import { type Plugin } from 'vite'
export default function pluginMdx(): Plugin {
  return {
    name: 'vite-plugin-mdx',
    transform(code, id, options) {
      console.log(code, 'code')
      return {
        id,
        code,
        options,
      }
    },
  }
}
