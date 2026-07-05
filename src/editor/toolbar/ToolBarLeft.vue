<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useEditorStore } from '@/stores/editor.ts'
defineOptions({
  name: 'ToolBarLeft',
})
const { panelVisible } = useEditorStore()
</script>

<template>
  <div class="editor-toolbar-right-container flex gap-20">
    <span
      :class="{ active: panelVisible.material }"
      @click="panelVisible.material = !panelVisible.material"
    >
      <Icon icon="fluent:panel-left-28-filled"></Icon
    ></span>
    <span :class="{ active: panelVisible.attr }" @click="panelVisible.attr = !panelVisible.attr"
      ><Icon icon="fluent:panel-right-28-filled"></Icon
    ></span>
    <span :class="{ active: panelVisible.layer }" @click="panelVisible.layer = !panelVisible.layer"
      ><Icon icon="fluent:layer-20-filled"></Icon
    ></span>
    <span><Icon icon="boxicons:undo-filled"></Icon></span>
    <span><Icon icon="boxicons:redo-filled"></Icon></span>
  </div>
</template>

<style scoped lang="scss">
.editor-toolbar-right-container {
  span {
    padding: 4px;
    border: 1px solid #3b465b;
    border-radius: 4px;
    cursor: pointer;

    &.active {
      background-color: #445f69;
    }
  }
}
</style>
