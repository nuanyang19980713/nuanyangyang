import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login.vue'
import Register from '../components/register.vue'
Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/register', component: Register
        },
        {
            path: '/', component: Login
        }
    ]
})
export default router
