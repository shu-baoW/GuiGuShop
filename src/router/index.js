//引入vue核心库
import Vue from "vue";
//引入vue-router
import VueRouter from "vue-router";
//声明使用VueRouter
Vue.use(VueRouter);
//引入路由组件
import routes from './routes'
//初始化路由组件  并暴露出去
export default new VueRouter({
    mode:'history',
    routes,
})