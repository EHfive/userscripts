import '../vendor/gm4-polyfill/gm4-polyfill.js'

(function () {
  if(typeof unsafeWindow === 'object' && unsafeWindow) {
    unsafeWindow.GM = this.GM
  }
}).call(window);
