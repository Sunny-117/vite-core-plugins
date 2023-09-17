import { type Plugin } from 'vite'
import { createCompiler } from '@mdx-js/mdx'
import { type FilterPattern, createFilter } from '@rollup/pluginutils'

interface Options {
  include?: FilterPattern
  exclude?: FilterPattern
}
// eslint-disable-next-line import/no-default-export
export default function pluginMdx(options: Options = {}): Plugin {
  return {
    name: 'vite-plugin-mdx',
    transform(code, id) {
      const { include = /\.mdx/, exclude } = options
      const filter = createFilter(include, exclude)
      if (filter(id)) {
        const compiler = createCompiler(code)
        const result = compiler.processSync(code)
        return {
          id,
          code: result.contents,
          options,
        }
      }
    },
  }
}
