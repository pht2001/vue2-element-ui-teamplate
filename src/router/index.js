import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    redirect: '/home',
    component: () => import('@/Layout'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home/index.vue'),
        hidden: false, // 左侧导航栏是否隐藏
        meta: {
          title: '一级菜单', // path 跳转参数 面包屑时使用
          iconType: 'element-ui', // 图标类型 default svg element-plus
          icon: 'el-icon-user',
          index: 'Home' // 左侧导航栏高亮显示
        }
      },
      {
        path: '/finance_manage',
        name: 'FinanceManage',
        component: { render: (e) => e('router-view') },
        redirect: '/finance_manage/move_account',
        meta: {
          title: '二级父菜单',
          iconType: 'element-ui',
          icon: 'el-icon-user'
        },
        children: [
          {
            path: 'move_account',
            name: 'MoveAccount',
            component: () => import('@/views/MoveAccount/index.vue'),
            meta: {
              title: '二级子菜单',
              index: 'MoveAccount'
            }
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
