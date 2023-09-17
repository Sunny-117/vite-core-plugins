import { defineComponent } from 'vue'
import Hello from './test.mdx'
export const Foo = defineComponent({
  setup() {
    return () => {
      return (
        <div>
          <p>123</p>
          <Hello />
        </div>
      )
    }
  },
})
