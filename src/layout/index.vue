<script lang="ts" setup>
import HeaderComponent from './Header.vue'
import Sidebar from './Sidebar.vue'
</script>

<template>
  <div h-full w-full>
    <HeaderComponent />
    <div class="h-[calc(100%-64px)] flex">
      <Sidebar shirnk-0 h-full w-200 />
      <div class="main-container">
        <RouterView v-slot="{ Component, route }">
          <Transition name="fade" mode="out-in">
            <KeepAlive :include="[]">
              <component :is="Component" :key="route.path" />
            </KeepAlive>
          </Transition>
        </RouterView>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 定义淡入淡出动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.main-container {
  box-sizing: border-box;
  flex: 1;
  height: 100%;
}
</style>
