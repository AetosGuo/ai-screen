import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useEditorStore = defineStore('editor', () => {
  const panelVisible = reactive({
    material: true,
    layer: true,
    attr: true,
  })

  return {
    panelVisible,
  }
})
