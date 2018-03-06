import Vue from 'vue'
import Router from 'vue-router'

/* 商品 */
import Detail from '@/components/shop/goods/Detail'
import List from '@/components/shop/goods/List'

/* 订单 */
import Complete from '@/components/shop/order/Complete'
import Pay from '@/components/shop/order/Pay'
import Site from '@/components/shop/order/Site'

/* 购物车 */
import ShopCart from '@/components/shop/shopcart/Shopcart'
/* 头部 */
import subcom from '@/components/shop/subcom/Header'
import Shop from '@/components/shop/Shop'
import Login from '@/components/account/login/Login'


const order=[
  { name: 'Complete', path: 'order/Complete/:id', components: Complete},
  { name: 'Pay', path: 'order/Pay/:id', components: Pay }, 
  { name: 'Site', path: 'order/Site/:id', components: Site}
]


const shopCart=[
  { name: 'ShopCart', path: 'ShopCart', component: ShopCart}
]

const goods=[
  { name: 'Detail', path: 'goods/Detail/:id', component: Detail },
  { name: 'List', path: 'goods/List', component: List }
]




Vue.use(Router)

export default new Router({
  routes: [
    {
      name:'Login',path:'/Login',component:Login
    },
    {
      name:'Shop',path:'/',component:Shop,children:[...goods,...order,...shopCart]
    }
  ]
})

