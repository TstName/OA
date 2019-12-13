// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import back from '@/components/public/back'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts'
Vue.use(ElementUI);
Vue.component('Back', back)
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.prototype.setCookie = function (name, value,day) {
  var Days = day || 365;
  var exp = new Date();
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
  document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

Vue.prototype.getCookie = function (name) {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg)) {
    return unescape(arr[2]);
  } else {
    return null;
  }
}
new Vue({
  el: '#app',
  router,
  components: { App},
  template: '<App/>'
})
