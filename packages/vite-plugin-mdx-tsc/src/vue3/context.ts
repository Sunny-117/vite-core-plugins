import {
  PropType,
  Ref,
  VNodeTypes,
  computed,
  defineComponent,
  inject,
  provide,
} from "vue";

export type PropsComponents = Record<string, VNodeTypes>;
export const contextKey = "__MDX_PROVIDER_KEY";

export const MDXProvider = defineComponent({
  name: "MDXProvider",
  props: {
    components: {
      type: Object as PropType<PropsComponents>,
      required: true,
    },
  },
  setup(props, { slots }) {
    const componentsRef = computed(() => props.components); // 响应式，可监听
    provide(contextKey, componentsRef);
    return () => slots.default && slots.default();
  },
});

const defaultComponentsRef = computed(() => ({}));

export const useMDXComponents = (
  getPropsComponents: () => PropsComponents
): Ref<Record<string, VNodeTypes>> => {
  const providedComponentsRef = inject(contextKey, defaultComponentsRef);
  const mergedComponentsRef = computed(() => ({
    ...providedComponentsRef.value,
    ...getPropsComponents(),
  }));
  return mergedComponentsRef;
};
