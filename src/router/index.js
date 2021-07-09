import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const Login = () => import("../views/login/login.vue")
const Home = () => import("../views/home/home.vue")

const routes = [
  {
    path:'',
    redirect:'/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router