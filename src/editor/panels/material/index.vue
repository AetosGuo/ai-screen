<script setup lang="ts">
import MaterialItem from '@/editor/panels/material/components/MaterialItem.vue'

defineOptions({
  name: 'MaterialPanel',
})
</script>

<template>
  <div class="panel-material-container flex">
    <div class="classify w-50">
      <div class="active">
        <span><Icon icon="tdesign:chart-filled" width="17"></Icon></span>
        <span>charts</span>
      </div>
      <div>
        <span><Icon icon="boxicons:form-filled" width="17"></Icon></span>
        <span>form</span>
      </div>
    </div>
    <div class="materials flex-1 p-10 overflow-x-auto">
      <MaterialItem class="mt-10" v-for="item in 20" :key="item"></MaterialItem>
    </div>
  </div>
</template>

<style scoped lang="scss">
.panel-material-container {
  background: app-bg-mix(19);

  .classify {
    border-right: 1px solid var(--app-border-color);
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      height: 50px;
      font-size: 12px;
      cursor: pointer;

      &.active {
        background-color: app-bg-mix(91);
      }
    }
  }

  .materials {
    //scrollbar-color: #446b6b transparent;
    //scrollbar-width: thin;
  }
}
</style>
