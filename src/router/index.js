import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '*',
      name: '404',
      component: () => import('views/notfound')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('views/login')
    },
    {
      path: '/home',
      component: () => import('views/home'),
      children: [
        {
          path: '/home/index',
          name: 'index',
          component: () => import('components/pages/index')
        },
        {
          path: '/home/page1-1-1',
          name: 'page1-1-1',
          component: () => import('components/pages/page1/box1/page1')
        },
        {
          path: '/home/page1-1-2',
          name: 'page1-1-2',
          component: () => import('components/pages/page1/box1/page2')
        },
        {
          path: '/home/page1-1-3',
          name: 'page1-1-3',
          component: () => import('components/pages/page1/box1/page3')
        },
        {
          path: '/home/page1-1-4',
          name: 'page1-1-4',
          component: () => import('components/pages/page1/box1/page4')
        },
        {
          path: '/home/page1-1-5',
          name: 'page1-1-5',
          component: () => import('components/pages/page1/box1/page5')
        },
        {
          path: '/home/page1-2-1',
          name: 'page1-2-1',
          component: () => import('components/pages/page1/box2/page1')
        },
        {
          path: '/home/page1-2-2',
          name: 'page1-2-2',
          component: () => import('components/pages/page1/box2/page2')
        },
        {
          path: '/home/page1-2-3',
          name: 'page1-2-3',
          component: () => import('components/pages/page1/box2/page3')
        },
        {
          path: '/home/page1-2-4',
          name: 'page1-2-4',
          component: () => import('components/pages/page1/box2/page4')
        },
        {
          path: '/home/page2-1-1',
          name: 'page2-1-1',
          component: () => import('components/pages/page2/box1/page1')
        },
        {
          path: '/home/page2-1-2',
          name: 'page2-1-2',
          component: () => import('components/pages/page2/box1/page2')
        },
        {
          path: '/home/page2-1-3',
          name: 'page2-1-3',
          component: () => import('components/pages/page2/box1/page3')
        },
        {
          path: '/home/page2-2-1',
          name: 'page2-2-1',
          component: () => import('components/pages/page2/box2/page1')
        },
        {
          path: '/home/page2-2-2',
          name: 'page2-2-2',
          component: () => import('components/pages/page2/box2/page2')
        },
        {
          path: '/home/page2-2-3',
          name: 'page2-2-3',
          component: () => import('components/pages/page2/box2/page3')
        },
        {
          path: '/home/page2-2-4',
          name: 'page2-2-4',
          component: () => import('components/pages/page2/box2/page4')
        },
        {
          path: '/home/page2-2-5',
          name: 'page2-2-5',
          component: () => import('components/pages/page2/box2/page5')
        }
      ]
    }
  ]
})
