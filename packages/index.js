import YSelector from "./selector";
import YButton from './button'

const components = [
  YSelector,
  YButton
]

/**
 * 定义 install 方法，接收 Vue 作为参数，如果使用 use 注册组件，则所有的组件都将被注册
 */
const install = function(Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历所有组件
  components.map(component => {
    Vue.component(component.name, component)
  })
}

// 判断是否引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  YSelector,
  YButton
}

export default {
  install
}