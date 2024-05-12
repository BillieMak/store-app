import verifyId from '../guards/id-guard'

export default {
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ '../layouts/SalesLayout.vue'),
    children: [
        {
            path: '/sales',
            name: 'sales',
            component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
        },
        {
            path: '/cart',
            name: 'cart',
            component: () => import(/* webpackChunkName: "cart" */ '../views/CartView.vue')
        },
        {
            path: '/favs',
            name: 'favs',
            component: () => import(/* webpackChunkName: "favs" */ '../views/FavsView.vue')
        },
        {
            path: '/product/:id',
            beforeEnter: [verifyId],
            name: 'product',
            component: () => import(/* webpackChunkName: "product" */ '../views/ProductView.vue'),
            props: (route) => {
                return { id: Number(route.params.id)}
            }
        },
        {
            path:'/payment',
            name:'payment',
            component: () => import(/* webpackChunkName: "payment" */ '../views/PaymentView.vue')
        }
    ]
}