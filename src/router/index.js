import Vue from 'vue'
import VueRouter from 'vue-router'
const home = () =>
    import ('views/home/Home.vue')
const profile = () =>
    import ('views/profile/ProFile')
const cart = () =>
    import ('views/cart/Cart')
const category = () =>
    import ('views/category/Category')
Vue.use(VueRouter)

const routes = [{
    path: '',
    redirect: '/home'
}, {
    path: '/home',
    name: 'home',
    component: home
}, {
    path: '/profile',
    name: 'profile',
    component: profile
}, {
    path: '/cart',
    name: 'cart',
    component: cart
}, {
    path: '/category',
    name: 'category',
    component: category
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router