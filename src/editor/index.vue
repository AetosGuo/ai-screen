<script setup lang="ts">
import ToolBarLeft from '@/editor/toolbar/ToolBarLeft.vue'
import ToolBarRight from '@/editor/toolbar/ToolBarRight.vue'
import { useEditorStore } from '@/stores/editor.ts'
import { computed } from 'vue'

defineOptions({
  name: 'ScreenEditor',
})

const editorStore = useEditorStore()
const materialWidth = computed(() => (editorStore.panelVisible.material ? '248px' : '0'))
const layerWidth = computed(() => (editorStore.panelVisible.layer ? '124px' : '0'))
const attrWidth = computed(() => (editorStore.panelVisible.attr ? '248px' : '0'))
</script>

<template>
  <div class="editor-container h-screen">
    <header class="editor-header h-56 flex items-center px-20">
      <ToolBarLeft class="w-300"></ToolBarLeft>
      <div class="header-center flex-1 text-center">center</div>
      <ToolBarRight class="w-300"></ToolBarRight>
    </header>
    <main class="editor-main flex">
      <!--      物料-->
      <aside
        class="editor-material w-248 overflow-hidden transition-all"
        :style="{ width: materialWidth }"
      >
        物料
      </aside>
      <!--      图层-->
      <aside
        class="editor-layer w-124 overflow-hidden transition-all"
        :style="{ width: layerWidth }"
      >
        图层
      </aside>
      <!--      画布-->
      <div class="editor-canvas flex-1">画布</div>
      <!--      属性-->
      <aside class="editor-attr w-248 overflow-hidden transition-all" :style="{ width: attrWidth }">
        属性
      </aside>
    </main>
  </div>
</template>

<style scoped lang="scss">
.editor-container {
  --border-color: #334151;
  background: #1b2346;

  .editor-header {
    border: 1px solid var(--border-color);
  }

  .editor-main {
    height: calc(100% - 56px);
  }

  .editor-material,
  .editor-layer {
    border-right: 1px solid var(--border-color);
  }

  .editor-attr {
    border-left: 1px solid var(--border-color);
  }
}
</style>
