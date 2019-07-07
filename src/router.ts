import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from './store'
import { ActionsEnum } from "@/constants/ActionsEnum";
import { RoutesEnum } from "@/constants/RoutesEnum";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: RoutesEnum.home,
      component: Home
    },
    {
      path: '/login',
      name: RoutesEnum.login,
      component: () => import('./views/Login.vue')
    },
    {
      path: '/news',
      name: RoutesEnum.news,
      component: () => import('./views/News.vue')
    },
    {
      path: '/profile',
      name: RoutesEnum.profile,
      component: () => import('./views/Profile.vue'),
      beforeEnter(to, from, next) {
        store.dispatch(ActionsEnum.loadIsLogin).then(isLogin => {
          if ( isLogin ) {
            next()
          } else {
            next({ name: RoutesEnum.login })
          }
        })

      }
    }
  ]
})
