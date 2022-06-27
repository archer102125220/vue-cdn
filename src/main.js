// import { createApp } from 'vue'
// import App from './App.vue'

// https://medium.com/codememo/http-vue-loader-%E7%84%A1%E9%9C%80%E6%89%93%E5%8C%85-%E4%B9%9F%E8%83%BD%E6%8B%86%E5%88%86-vue-component-69923cbfcbe8
const { Vue } = window;
const App = window.httpVueLoader('./src/App.vue');

new Vue({
  el: '#app',
  components: {
    App
  }
})
