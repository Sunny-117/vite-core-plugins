import { type Plugin } from 'vite'
// 插件执行顺序 pre post normal
export default function demoPlugin(enforce?: 'pre' | 'post'): Plugin {
  return {
    name: 'demo-plugin',
    enforce,
    buildStart() {
      console.log('buildStart', enforce)
    },
    resolveId() {
      console.log('解析某个文件的时候才会调用', enforce)
    },
    load() {
      console.log('load', enforce)
    },
  }
}
