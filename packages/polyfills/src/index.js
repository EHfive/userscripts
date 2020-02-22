import rawScript from '../vendor/gm4-polyfill/gm4-polyfill.js'

(function f() {
  eval(rawScript)
  if(typeof unsafeWindow === 'object' && unsafeWindow) {
    unsafeWindow.GM = this.GM
  }
}).call(window)
