import Vue from 'vue'
import App from './App.vue'

import { YSelector, YButton } from '../packages'

Vue.config.productionTip = false
Vue.use(YSelector)
Vue.use(YButton)

new Vue({
  render: h => h(App),
}).$mount('#app')
