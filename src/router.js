import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Category from './components/Category.vue';
import About from './components/About.vue';
import Login from './components/Login.vue';
import Consent from './components/Consent.vue';
import PrsnlInfo from './components/PrsnlInfo.vue';
import PrsnlInfo2 from './components/PrsnlInfo2.vue';
import ListOfDoc from './components/ListOfDoc.vue';
import Shipping from './components/Shipping.vue';
import AsStudent from './components/AsStudent.vue';
import AsAdmin from './components/AsAdmin.vue';
import ReqDoc from './components/ReqDoc.vue';
import Verify from './components/Verification.vue';
import Track from './components/Tracker.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/category', component: Category },
    { path: '/about', component: About },
    { path: '/login', component: Login, name: Login },
    { path: '/consent', component: Consent },
    { path: '/personalInfo', component: PrsnlInfo },
    { path: '/personalInfo2', component: PrsnlInfo2 },
    { path: '/docrequest', component: ListOfDoc },
    { path: '/shipping', component: Shipping },
    { path: '/regStudent', component: AsStudent },
    { path: '/regAdmin', component: AsAdmin },
    { path: '/reqDoc', component: ReqDoc },
    { path: '/verify', component: Verify },
    { path: '/track', component: Track },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    
    scrollBehavior() {
        return { top: 0, left: 0 }
      }
});

export default router;