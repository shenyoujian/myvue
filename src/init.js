import { initState } from "./state"

export function initMixin(Vue) {
  Vue.prototype._init = function (options) {
    const vm = this
    vm.$options = options


    // 初始化状态(初始化状态(将数据做一个初始化的劫持 当我改变数据时应该更新视图
    // vue组件中有很多状态 data props watch computed
    // 所以我们先做一件事 状态的初始化 对不同状态的数据做不同的处理)
    initState(vm)
    
  }
}