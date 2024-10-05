# vite hmr

```ts
interface ImportMeta {
  url: string

  readonly hot?: import('./hot').ViteHotContext

  readonly env: ImportMetaEnv

  glob: import('./importGlob').ImportGlobFunction

  globEager: import('./importGlob').ImportGlobEagerFunction
}
```
