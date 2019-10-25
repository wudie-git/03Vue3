import Vue from 'vue'
import VueRouter from 'vue-router'
import One from '../views/One.vue'
import Two from '../views/Two.vue'
import Three from '../views/Three.vue'
import Four from '../views/Four.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'one',
    component: One
  },
    {
        path: '/two',
        name: 'two',
        component: Two
    },
    {
        path: '/three',
        name: 'three',
        component: Three
    },
    {
        path: '/four',
        name: 'four',
        component: Four
    },

]

const router = new VueRouter({
  routes
})

export default router
