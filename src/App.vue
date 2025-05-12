<script setup lang="ts" name="App">
import { useAppStore } from './stores'
import type { ComponentSize } from 'element-plus'

const appStore = useAppStore()

console.log(appStore)
const size = ref<ComponentSize>('default')
const zIndex = ref(3000)
</script>

<template>
  <ElConfigProvider :size="size" :z-index="zIndex">
    <RouterView v-slot="{ Component, route }">
      <Transition name="fade" mode="out-in">
        <KeepAlive :include="[]">
          <component :is="Component" :key="route.path" />
        </KeepAlive>
      </Transition>
    </RouterView>
  </ElConfigProvider>
</template>

<style scoped>
/* 定义淡入淡出动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
