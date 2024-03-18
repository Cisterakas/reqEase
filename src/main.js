import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import 'mdb-vue-ui-kit/css/mdb.min.css';
import router from './router'; // Import the router configuration

import PrimeVue from 'primevue/config';

const app = createApp(App);
app.use(PrimeVue);

// createApp(App).mount('#app')
createApp(App).use(router).mount('#app');

