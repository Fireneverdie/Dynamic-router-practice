import { defineStore } from "pinia";
import {ref} from 'vue'
export const useUserStore = defineStore('user', () => {
  const role = ref('')
  const setRole = (r) => {
    role.value = r
  }
  const clearRole = () => {
    role.value = ''
  }
  return { role ,setRole,clearRole}
}, {
  persist: {
    pick: ['role']
  },
})

