
require('./bootstrap');

window.Vue = require('vue').default;

import router from './router'
import store from './store/index'

import MyHeader from './components/NavBar'


const app = new Vue({
    router,
    store,
    el: '#app',
    components:{MyHeader}
});
