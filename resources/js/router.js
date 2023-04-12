import Index from './components/Index';
import VueRouter from 'vue-router';

const routes = [
    { path:'/', component: Index}
]

const router = new VueRouter({
    routes,
    mode: "history"
});

export default router;