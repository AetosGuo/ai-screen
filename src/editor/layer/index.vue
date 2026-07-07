<script setup lang="ts">
defineOptions({
  name: 'LayerPanel',
})
</script>

<template>
  <div class="layer-scroll-container h-full">
    <div class="layer-panel-container overflow-auto h-full">
      <div class="info mt-5 active" v-for="item in 50" :key="item">
        <span>柱状图</span>
        <span><Icon icon="mingcute:layer-fill"></Icon></span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.layer-panel-container {
  padding: 10px;
  background-color: app-bg-mix(50);

  .info {
    cursor: pointer;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 30px;
    font-size: 12px;
    border: 1px solid var(--app-border-color);
    background-color: app-bg-mix(70);
    border-radius: 4px;

    &.active {
      background-color: #0e8da7;
    }
  }
}
</style>
