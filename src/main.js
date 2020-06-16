import Vue from "vue";
import App from "./App.vue";

// import router from './router'
import createRouter from "./router";

import createStore from './store'

Vue.config.productionTip = false;

Vue.mixin({
  beforeMount () {
    const {asyncData} = this.$options
    if (asyncData) {
      asyncData({
        store: this.$store,
        route: this.$route
      })
    }
  }
})

// 每个请求一个实例
// 调用者是entry-server
export function createApp(context) {
  const router = createRouter()
  const store = createStore()
  const app = new Vue({
    router,
    context,
    store,
    render: h => h(App)
  }).$mount("#app");
  return {app, router, store}
}

