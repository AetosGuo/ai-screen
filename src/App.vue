<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="app-container">
    <div class="package-icon">
      <Icon icon="line-md:account"></Icon>
    </div>
    <div class="package-style w-100 h-100 bg-green-300"></div>
    <div class="package-component">
      <el-button type="primary">Button</el-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-container {
  width: 500px;
  height: 500px;
  background-color: skyblue;
}
</style>
