import { createRouter, createWebHistory } from "vue-router";
import Home from './components/pages/Home.vue';
import About from './components/pages/About.vue';
import Products from './components/pages/Products.vue';
import Gallery from './components/pages/Gallery.vue';
import Partners from './components/pages/Partners.vue';
import Login from './components/pages/Login.vue';
import Client from './components/pages/Client.vue';

import Admin from './components/pages/Admin.vue';
import Dashboard from './components/admin_panel/Dashboard.vue';
import Gallerys from './components/admin_panel/Gallerys.vue';
import Partner from './components/admin_panel/Partner.vue';
import Product from './components/admin_panel/Product.vue';
import Slider from './components/admin_panel/Slider.vue';
import User from './components/admin_panel/User.vue';
import { fb } from './firebase';


const routes = [
    {
        path: '/',
        component: Client,
        children: [
            { path: 'home', component: Home },
            { path: 'about', component: About },
            { path: 'products', component: Products },
            { path: 'gallery', component: Gallery },
            { path: 'partners', component: Partners },
            { path: 'login', component: Login },
        ]
    },

    {
        path: '/admin',
        component: Admin,
        meta: { requiresAuth: true },
        children: [
            {
                path: 'dashboard',
                name: 'dashboard',
                component: Dashboard
            },
            {
                path: 'user',
                name: 'user',
                component: User
            },
            {
                path: 'gallerys',
                name: 'Gallery',
                component: Gallerys
            },
            {
                path: 'partner',
                name: 'partner',
                component: Partner
            },
            {
                path: 'product',
                name: 'product',
                component: Product
            },
            {
                path: 'slider',
                name: 'slider',
                component: Slider
            },
        ]
    },
];



const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
    const currentUser = fb.auth().currentUser;
    if (requiresAuth && !currentUser) {
        next('/login');
    } else if (requiresAuth && currentUser) {
        next();
    } else {
        next();
    }
});

export default router;