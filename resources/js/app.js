
require('./bootstrap');

window.Vue = require('vue').default;

import router from './router'


import MyHeader from './components/NavBar'


const app = new Vue({
    router,
    el: '#app',
    components:{MyHeader}
});
