import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "bootstrap/dist/css/bootstrap.css" ;  // bootstrap 5 css
import "bootstrap/dist/js/bootstrap.bundle.js" ;  // bootstrap 5 css
import 'bootstrap-icons/font/bootstrap-icons.css' //icon 5 css


createApp(App).use(store).use(router).mount('#app')
