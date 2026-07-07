<script setup lang="ts">
defineOptions({
  name: 'MaterialItem',
})
</script>

<template>
  <div class="panel-material-item-container">
    <div class="title">柱状图</div>
    <div class="icon">
      <Icon icon="fluent-color:list-bar-16" width="80"></Icon>
    </div>
  </div>
</template>

<style scoped lang="scss">
.panel-material-item-container {
  height: 140px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--app-border-color);
  border-radius: 4px;
  background-color: app-bg-mix(40);
  cursor: pointer;
  transition: all 300ms ease-in-out;
  &:hover {
    transform: scale(1.05);
    --border-color: #5e8382;
  }
  .title {
    font-size: 12px;
    height: 26px;
    font-weight: 700;
  }
  .icon {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--app-border-color);
    border-radius: 4px;
  }
}
</style>
