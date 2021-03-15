// 
class Observer {
  constructor(value) {
    // 3、进行劫持，使用Object.definedProperty重新定义属性
    this.walk(value)
  }

  walk(data) {
    // 4、循环遍历data，先遍历第一层
    let keys = Object.keys(data)
    keys.forEach(key => {
      let value = data[key]
      // 5、把劫持下来的数据变成响应式后重新设置到data里
      defineReactive(data, key, value)    //defineReactive这个方法在vue中可以直接用的，Vue.util.defineReactive,这个方法的作用是把数据变成响应式的数据
    })
  }

}


function defineReactive(data, key, value) {
  // 7、递归进行劫持
  observe(value)
  //6、Object.definedProperty
  Object.defineProperty(data,key,{
    get() {
      console.log('用户获取值了')
      return value
    },
    set(newvalue) {
      console.log('用户设置值了')
      // 如果跟原来的值那就无事发生
      if(newvalue === value) return 
      observe(newvalue)   // 如果用户将值改为对象继续监控
      value = newvalue
      
    }
  })
}

export function observe(data) {
  // 1、我们规定data只能传函数或者对象，但是别人可能会乱传，所以先data可能先判断data是否是对象
  if (typeof data !== 'object' || data === null) return

  // 2、观测对象或者数组等，这些方法耦合在一起，这时候就得用类了
  return new Observer(data)
}

