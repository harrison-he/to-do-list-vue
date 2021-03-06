import Vue from 'vue'
import VueRouter from 'vue-router'
import ToDoList from './../views/ToDoList'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'toDoList',
    component: ToDoList
  },
  {
    path: '/completed',
    name: 'completed',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './../views/Completed.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
