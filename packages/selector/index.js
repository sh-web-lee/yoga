// 引入组件
import YSelector from './yoga-selector.vue';

// 为组件提供install方法，供按需引入
YSelector.install = (Vue) => {
  Vue.component(YSelector.name, YSelector)
}

export default YSelector