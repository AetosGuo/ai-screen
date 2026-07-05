<script setup lang="ts">
import { Icon } from '@iconify/vue'
defineOptions({
  name: 'ToolBarRight',
})
</script>

<template>
  <div class="editor-toolbar-right-container flex gap-20 justify-end">
    <span><Icon icon="mage:preview-fill"></Icon></span>
    <span><Icon icon="si:json-fill"></Icon></span>
    <span><Icon icon="entypo:publish"></Icon></span>
    <span><Icon icon="ri:import-fill"></Icon></span>
    <span><Icon icon="ri:export-fill"></Icon></span>
  </div>
</template>

<style scoped lang="scss">
.editor-toolbar-right-container {
  span {
    padding: 4px;
    border: 1px solid #3b465b;
    border-radius: 4px;
    cursor: pointer;
  }
}
</style>
