import { createRouter, createWebHashHistory, Router } from 'vue-router'

export const constantRoutes = [


 
]

const router: Router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: constantRoutes
})



export default router
