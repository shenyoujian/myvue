import { observe } from "./observer/index";

export function initState(vm) {
  //初始化各种数据
  const opts = vm.$options;

  // 这些状态有顺序，先props再methods...
  if (opts.props) {
    initProps(vm)
  }
  if (opts.methods) {
    initMethods(vm);
  }
  if (opts.data) {
    initData(vm)
  }
  if (opts.computed) {
    initComputed(vm)
  }
  if (opts.watch) {
    initWatch(vm)
  }
}

function initProps(vm) { }
function initMethods(vm) { }
function initData(vm) {    // 数据的初始化操作
  let data = vm.$options.data
  // data可能是对象也可能是一个函数，当它是函数获取它的返回值，因为我们要对对象进行劫持
  // call vm.data()  
  // 为了能在index.html里的vue实例可以操作data里的数据，把data的引用赋值给vue实例上
  vm._data = data = typeof data == "function" ? data.call(vm) : data

  // 数据劫持的方案 对象Object.defineProperty
  // 数组单独处理
  observe(data)

}
function initComputed(vm) { }
function initWatch(vm) { }