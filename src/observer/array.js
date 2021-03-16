// 1、拿到数组原来的方法
let oldArrayMethods = Array.prototype

// 2、继承一下,es5实现继承的方法
export let arrayMethods = Object.create(oldArrayMethods)

// 3、要重写的方法
let methods = [
  'push',
  'pop',
  'shift',
  'unshift',
  'sort',
  'reverse',
  'splice'
]

//4、遍历重写
methods.forEach(method => {
  arrayMethods[method] = function (...args) {
    //5、自己的逻辑
    console.log('数组方法劫持')

    //6、调用原来的方法
    const result = oldArrayMethods[method].apply(this, ...args)
    //7、有可能用户给数组新增的数据是对象格式 也要进行拦截
    let inserted;
    let ob = this.__ob__
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break;
      case 'splice':  // splice(0,1,xxx)
        inserted = args.slice(2)
      default:
        break
    }
    if(inserted) ob.observerArray(inserted)
    return result
  }
});