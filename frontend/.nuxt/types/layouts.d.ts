import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "D:/zm/again/United-community/my-sidebase-experiment/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}