export function proxy(target, source, key) {
  Object.defineProperty(target, key, {
    get() {
      return target[source][key]
    },
    set(newValue) {
      target[source][key] = newValue
    }
  })
}

export function definedProperty(target, key, value) {

  Object.defineProperty(target, key, {
    value,
    enumerable: false,   // 不能被枚举，不能被循环
    configurable: false  // 不能被删除
  })
}