import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloHasura from '@/components/HelloHasura'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hasura',
      name: 'HelloHasura',
      component: HelloHasura
    }
  ]
})
