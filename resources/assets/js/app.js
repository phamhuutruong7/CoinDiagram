require('./bootstrap');
import Vue from 'vue'
import App from './App.vue'
import AddCoin from './components/AddCoin.vue'

window.Vue = require('vue');

Vue.component('coin-add-component', require('./components/AddCoin.vue'));

Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
    el: '#app',
    render:h=>h(App)
});