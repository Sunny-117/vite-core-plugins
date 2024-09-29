import { Plugin } from 'vite'

interface Options {}
export const virtualModuleSignal = 'virtual-module'

export default (options: Options): Plugin => {
  return {
    name: 'foo',
    resolveId(source) {
      if (source === virtualModuleSignal) {
        return source
      }
      return null
    },
    load(id) {
      if (id === virtualModuleSignal) {
        return `export default 'This is virtual!'`
      }
      return null
    },
  }
}
