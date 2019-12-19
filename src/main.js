// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  // do something;
  let url = window.location.href
  console.log('router',router)
  if(/\/j\/[0-9]+#/.test(url)){
   let url2 = url.replace(/\/j\/[0-9]+#/,'#')
   console.log('url2',url2)
    window.location.href = url2 + '2/d'
  }
  console.log(window.location.href)
  /* must call `next` */
  next();
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
