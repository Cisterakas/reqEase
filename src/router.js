import { createRouter, createWebHistory } from 'vue-router';
import axios from 'axios';
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
import AdminHome from './components/AdminHome.vue';
import AdminPayment from './components/AdminPayment.vue';
import AdminConfirm from './components/AdminConfirm.vue';
import AdminAcc from './components/AdminAccount.vue';
import AdminHistory from './components/AdminHistory.vue';
import AdminFeed from './components/AdminFeedback.vue';

import ReqDocS from './components/ReqDocS.vue';
import LoginC from './components/Logincopy.vue';
import NewAccounts from './components/aanewaccount.vue';
import NewStudent from './components/aaaddaccount.vue';
import NewAdmin from './components/aaaddadmin.vue';
// const routes = [
//     { path: '/', component: Home },
//     { path: '/category', component: Category },
//     { path: '/about', component: About },
//     { path: '/login', component: Login, name: Login },
//     { path: '/consent', component: Consent },
//     { path: '/personalInfo', component: PrsnlInfo },
//     { path: '/personalInfo2', component: PrsnlInfo2 },
//     { path: '/docrequest', component: ListOfDoc },
//     { path: '/shipping', component: Shipping },
//     { path: '/regStudent', component: AsStudent },
//     { path: '/regAdmin', component: AsAdmin },
//     { path: '/reqDoc', component: ReqDoc },
//     { path: '/verify', component: Verify },
//     { path: '/track', component: Track },
//     { path: '/adminH', component: AdminHome },
//     { path: '/adminP', component: AdminPayment },
//     { path: '/adminC', component: AdminConfirm },
//     { path: '/adminA', component: AdminAcc },
//     { path: '/adminHy', component: AdminHistory },
//     { path: '/adminF', component: AdminFeed },
//     { path: '/requestdocs', component: ReqDocS},
//     { path: '/loginC', component: LoginC},
//     { path: '/aanewAcc', component: NewAccounts},
//     { path: '/aaaddAcc', component: NewStudent},
//     { path: '/aaaddAdmin', component: NewAdmin}
// ];

// const router = createRouter({
//     history: createWebHistory(),
//     routes,
    
//     scrollBehavior() {
//         return { top: 0, left: 0 }
//       }
// });
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'homepage',
        component: () => import('./components/Home.vue')
        
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('./components/Login.vue')
        
      },
      {
        path: '/home',
        name: 'welcome',
        component: () => import('./components/UserDashboard.vue'),
        meta: { requiresAuth: true }, 
      },
      {
        path: '/ship2',
        name: 'ship2',
        component: () => import('./components/shippment.vue'), 
      },
        { path: '/category', component: Category },
    { path: '/about', component: About },
    { path: '/consent', component: Consent },
    { path: '/personalInfo', component: PrsnlInfo },
    { path: '/personalInfo2', component: PrsnlInfo2 },
    { path: '/docrequest', component: ListOfDoc },
    { path: '/shipping', 
    component: () => import('./components/Shipping.vue'),
     },
    { path: '/regStudent', component: AsStudent },
    { path: '/regAdmin', component: AsAdmin },
    {
      path: '/reqDoc',
      name: 'request-docs',
      component: () => import('./components/ReqDoc.vue'),
      meta: { requiresAuth: true }, 
    },
    { path: '/verify', component: Verify },
    {
      path: '/track',
      name: 'track-docs',
      component: () => import('./components/Tracker.vue'),
      meta: { requiresAuth: true }, 
    },
    { path: '/adminH', component: AdminHome },
    { path: '/adminP', component: AdminPayment },
    { path: '/adminC', component: AdminConfirm },
    { path: '/adminA', component: AdminAcc },
    { path: '/adminHy', component: AdminHistory },
    { path: '/adminF', component: AdminFeed },
    {
      path: '/requestdocs',
      name: 'ReqDocS',
      component: () => import('./components/ReqDocS.vue'),
      meta: { requiresAuth: true }, 
    },
    // { path: '', component: ReqDocS},
    { path: '/loginC', component: LoginC},
    { path: '/aanewAcc', component: NewAccounts},
    { path: '/aaaddAcc', component: NewStudent},
    { path: '/aaaddAdmin', component: NewAdmin}
    ],
    scrollBehavior() {
        return { top: 0, left: 0 }
      }
    
  })

router.beforeEach(async (to, from, next) => {
    if (to.meta.requiresAuth) {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/authenticate', {
          withCredentials: true,
        });
        const data = await response.data;
        if (data) {
          next(); 
        } else {
          next('/'); 
        }
      } catch (error) {
        next('/login'); 
      }
    } else {
      next(); 
    }
  });
  
export default router;