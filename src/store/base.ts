import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useBaseStore = defineStore('base', () => {
    const count = ref(0)

    const doubleCount = computed(() => count.value + count.value)

    return {
        count,
        doubleCount,
    }
})