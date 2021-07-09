import { createRouter, createWebHistory } from "vue-router";
import Home from './components/pages/Home.vue';
import About from './components/pages/About.vue';
import Products from './components/pages/Products.vue';
import Gallery from './components/pages/Gallery.vue';
import Partners from './components/pages/Partners.vue';
import Login from './components/pages/Login.vue';
import Admin from './components/admin_panel/Admin.vue';


const routes = [
    { path:'/', component:Home},
    { path:'/about', component:About},
    { path:'/products', component:Products},
    { path:'/gallery', component:Gallery},
    { path:'/partners', component:Partners},
    { path:'/login', component:Login},
    { path:'/admin' , component:Admin },
];

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router;