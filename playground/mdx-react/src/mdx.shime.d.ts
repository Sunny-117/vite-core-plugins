declare module '*.mdx' {
  import React from 'react'
  type MDX = () => React.ReactElement
  const mdx: MDX
  export default mdx
}
