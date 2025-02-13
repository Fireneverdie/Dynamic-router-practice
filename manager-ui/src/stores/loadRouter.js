import { defineStore } from "pinia"
import { ref } from "vue"
export const useisGetterRouterStore = defineStore(
  "router",
  () => {
    const isGetterRouter = ref(false)
    const setGetterRouter = (v) => {
      isGetterRouter.value = v
    }
    return { isGetterRouter, setGetterRouter }
  },
  { persist: false }
)
