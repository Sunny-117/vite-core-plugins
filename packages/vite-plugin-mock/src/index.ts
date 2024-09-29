import path from 'path'
import { Plugin } from 'vite'

interface Options {
  entry: string
}

interface Request {
  url: string
  method: string
  type: 'get' | 'post'
  response: string
}

let mockRouteMap: any = {}

function matchRoute(request: Request) {
  let url = request.url
  let method = request.method.toLowerCase()
  let routeList = mockRouteMap[method]
  return routeList && routeList.find((it: any) => it.path === url)
}

function createRoute(mockConfList: Request[]) {
  mockConfList.forEach((mockConf) => {
    const method = mockConf.type || 'get'
    const path = mockConf.url
    const handler = mockConf.response
    const route = {
      path,
      method: method.toLowerCase(),
      handler,
    }
    if (!mockRouteMap[method]) {
      mockRouteMap[method] = []
    }
    console.log('create mock api: ', route.method, route.path)
    mockRouteMap[method].push(route)
  })
}
function send(this: any, body: any) {
  let chunk: any = JSON.stringify(body)
  if (chunk) {
    chunk = Buffer.from(chunk, 'utf-8')
    this.setHeader('Content-Length', chunk.length)
  }
  this.setHeader('Content-Type', 'application/json')
  // status
  this.statusCode = 200
  this.end(chunk, 'utf8')
}
export default (options: Options): Plugin => {
  options.entry = options.entry || './mock/index.js'
  if (!path.isAbsolute(options.entry)) {
    options.entry = path.resolve(process.cwd(), options.entry)
  }
  return {
    name: 'vite-plugin-mock',
    async configureServer({ middlewares }) {
      const mockObj = (await import(options.entry)).default
      createRoute(mockObj)
      const middleware = (req: any, res: any, next: any) => {
        const route = matchRoute(req)
        if (route) {
          console.log('mock request', route.method, route.path)
          res.send = send
          route.handler(req, res)
        } else {
          next()
        }
      }
      middlewares.use(middleware)
    },
  }
}
