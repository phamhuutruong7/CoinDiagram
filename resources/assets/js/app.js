require('./bootstrap');

window.Vue = require('vue');

Vue.component('coin-add-component', require('./components/AddCoin.vue'));

const app = new Vue({
    el: '#app'
});