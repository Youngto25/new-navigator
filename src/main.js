import Vue from 'vue'
import App from './App.vue'
import { Layout,Menu,Icon,Tabs,Modal,Input,Button } from 'ant-design-vue'
import router from './router/route'
import axios from 'axios'
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
import VueFullPage from 'vue-fullpage.js'

Vue.prototype.$http = axios
Vue.component(Layout.name,Layout)
Vue.component(Menu.name,Menu)
Vue.component(Menu.Item.name,Menu.Item)
Vue.component(Icon.name,Icon)
Vue.component(Layout.Header.name, Layout.Header);
Vue.component(Layout.Content.name, Layout.Content);
Vue.component(Layout.Footer.name, Layout.Footer);
Vue.component(Layout.Sider.name, Layout.Sider);
Vue.component(Tabs.name,Tabs)
Vue.component(Tabs.TabPane.name, Tabs.TabPane)
Vue.component(Modal.name,Modal)
Vue.component(Input.name,Input)
Vue.component(Button.name,Button)
Vue.use(VueFullPage);

new Vue({
  el: '#app',
  render: h => h(App)
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
