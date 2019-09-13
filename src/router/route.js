import Router from 'vue-router'
import Vue from 'vue'
import Source from '../components/Source.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'source',
      path: '/',
      components: {
        main: Source
      }
    }
  ]
})