export default{
    name:"home",
    component : () => import(/* webpackChunkName: "home" */ '../layouts/SalesLayout.vue'),
    children : [
        {
            path : '/sales',
            name : 'sales',
            component : ()=> import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
        },
        {
            path : '/cart',
            name : 'cart',
            component : ()=> import(/* webpackChunkName: "home" */ '../views/CartView.vue')
        },
        {
            path: '/favs',
            name: 'favs',
            component: ()=> import(/* webpackChunkName: "home" */ '../views/FavsView.vue')
        }
    ]
}