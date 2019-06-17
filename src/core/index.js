//vue核心方法
import Vue from './instance/index'
//全局api
import { initGlobalAPI } from './global-api/index'
//判断是否为服务端渲染
import { isServerRendering } from 'core/util/env'
import { FunctionalRenderContext } from 'core/vdom/create-functional-component'
//初始化
initGlobalAPI(Vue)
//vue原型链定义$isServer属性
Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
})
// 为Vue原型定义属性$ssrContext
Object.defineProperty(Vue.prototype, '$ssrContext', {
  get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
})

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
})

Vue.version = '__VERSION__'

export default Vue
