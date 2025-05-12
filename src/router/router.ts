import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

// 使用交叉类型扩展 RouteRecordRaw
export type CustomRouteRecord = RouteRecordRaw & {
  name: string
  meta: {
    title: string
    type?: 'primary' | 'secondary' // 主要路由 | 次要路由
    requiresAuth?: boolean
    keepAlive?: boolean
    [key: string]: any
  }
}

export const constantRoutes: Array<CustomRouteRecord> = [
  {
    path: '/',
    name: 'Layout',
    meta: {
      title: '首页',
      type: 'primary',
      requiresAuth: true,
      keepAlive: true,
    },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        meta: {
          title: '首页',
          type: 'primary',
          requiresAuth: true,
          keepAlive: true,
        },
        component: () => import('@/views/home/index.vue'),
      },
      // 设置
      {
        path: '/setting',
        name: 'Setting',
        meta: {
          title: '设置',
          type: 'primary',
          requiresAuth: true,
          keepAlive: true,
        },
        component: () => import('@/views/setting/index.vue'),
      },
    ],
  },

]

export const routes = [...constantRoutes]

export default createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_PUBLIC_PATH),
  routes,
})
