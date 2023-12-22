import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import 'mdb-vue-ui-kit/css/mdb.min.css';
import router from './router'; // Import the router configuration

import './styles.scss'
import * as bootstrap from 'bootstrap'
// createApp(App).mount('#app')
createApp(App).use(router).mount('#app');

