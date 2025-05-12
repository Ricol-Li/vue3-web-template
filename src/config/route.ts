/**
 * 可以显示TabBar的路由Name 白名单
 * * 可以显示TabBar的路由Name 白名单
 * ! 注意：路由Name必须配置的
 */
import type { CustomRouteRecord } from '@/router/router'

export const routeWhiteList: string[] = [
  'ActivitySquare',
  'MyActivity',
  'Home',
  'Works',
  'Ranking',
  'Statistics',
]

type TabBarRouteList = Omit<CustomRouteRecord, 'component'> & {
  iconPath: string
  selectedIconPath: string
}

export const tabBarPrimaryRouteList: TabBarRouteList[] = [

]

export const tabBarSecondaryRouteList: TabBarRouteList[] = [

]
