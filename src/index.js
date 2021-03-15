// vue

import { initMixin } from "./init"


function Vue(options) {
  this._init(options)      //vue初始化方法
}

// Vue.prototype.__init = function(options) {
//   console.log('初始化')
// }

// 写成一个个的插件对Vue进行扩展
initMixin(Vue) // 入口方法做初始化操作

export default Vue