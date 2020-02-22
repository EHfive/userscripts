!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1)}([function(e,n,t){"use strict";n.a="/*\nThis helper script bridges compatibility between the Greasemonkey 4 APIs and\nexisting/legacy APIs.  Say for example your user script includes\n\n    // @grant GM_getValue\n\nAnd you'd like to be compatible with both Greasemonkey 3 and Greasemonkey 4\n(and for that matter all versions of Violentmonkey, Tampermonkey, and any other\nuser script engine).  Add:\n\n    // @grant GM.getValue\n    // @require https://greasemonkey.github.io/gm4-polyfill/gm4-polyfill.js\n\nAnd switch to the new (GM-dot) APIs, which return promises.  If your script\nis running in an engine that does not provide the new asynchronous APIs, this\nhelper will add them, based on the old APIs.\n\nIf you use `await` at the top level, you'll need to wrap your script in an\n`async` function to be compatible with any user script engine besides\nGreasemonkey 4.\n\n    (async () => {\n    let x = await GM.getValue('x');\n    })();\n*/\n\nif (typeof GM == 'undefined') {\n  this.GM = {};\n}\n\n\nif (typeof GM_addStyle == 'undefined') {\n  this.GM_addStyle = (aCss) => {\n    'use strict';\n    let head = document.getElementsByTagName('head')[0];\n    if (head) {\n      let style = document.createElement('style');\n      style.setAttribute('type', 'text/css');\n      style.textContent = aCss;\n      head.appendChild(style);\n      return style;\n    }\n    return null;\n  };\n}\n\n\nif (typeof GM_registerMenuCommand == 'undefined') {\n  this.GM_registerMenuCommand = (caption, commandFunc, accessKey) => {\n    if (!document.body) {\n      if (document.readyState === 'loading'\n        && document.documentElement && document.documentElement.localName === 'html') {\n        new MutationObserver((mutations, observer) => {\n          if (document.body) {\n            observer.disconnect();\n            GM_registerMenuCommand(caption, commandFunc, accessKey);\n          }\n        }).observe(document.documentElement, {childList: true});\n      } else {\n        console.error('GM_registerMenuCommand got no body.');\n      }\n      return;\n    }\n    let contextMenu = document.body.getAttribute('contextmenu');\n    let menu = (contextMenu ? document.querySelector('menu#' + contextMenu) : null);\n    if (!menu) {\n      menu = document.createElement('menu');\n      menu.setAttribute('id', 'gm-registered-menu');\n      menu.setAttribute('type', 'context');\n      document.body.appendChild(menu);\n      document.body.setAttribute('contextmenu', 'gm-registered-menu');\n    }\n    let menuItem = document.createElement('menuitem');\n    menuItem.textContent = caption;\n    menuItem.addEventListener('click', commandFunc, true);\n    menu.appendChild(menuItem);\n  };\n}\n\n\nif (typeof GM_getResourceText == 'undefined') {\n  this.GM_getResourceText = (aRes) => {\n    'use strict';\n    return GM.getResourceUrl(aRes)\n      .then(url => fetch(url))\n      .then(resp => resp.text())\n      .catch(function(error) {\n        GM.log('Request failed', error);\n        return null;\n      });\n  };\n}\n\n\nObject.entries({\n  'log': console.log.bind(console),  // Pale Moon compatibility.  See #13.\n  'info': GM_info,\n}).forEach(([newKey, old]) => {\n  if (old && (typeof GM[newKey] == 'undefined')) {\n    GM[newKey] = old;\n  }\n});\n\n\nObject.entries({\n  'GM_addStyle': 'addStyle',\n  'GM_deleteValue': 'deleteValue',\n  'GM_getResourceURL': 'getResourceUrl',\n  'GM_getValue': 'getValue',\n  'GM_listValues': 'listValues',\n  'GM_notification': 'notification',\n  'GM_openInTab': 'openInTab',\n  'GM_registerMenuCommand': 'registerMenuCommand',\n  'GM_setClipboard': 'setClipboard',\n  'GM_setValue': 'setValue',\n  'GM_xmlhttpRequest': 'xmlHttpRequest',\n  'GM_getResourceText': 'getResourceText',\n}).forEach(([oldKey, newKey]) => {\n  let old = this[oldKey];\n  if (old && (typeof GM[newKey] == 'undefined')) {\n    GM[newKey] = function(...args) {\n      return new Promise((resolve, reject) => {\n        try {\n          resolve(old.apply(this, args));\n        } catch (e) {\n          reject(e);\n        }\n      });\n    };\n  }\n});\n"},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _vender_gm4_polyfill_gm4_polyfill_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0);(function f(){eval(_vender_gm4_polyfill_gm4_polyfill_js__WEBPACK_IMPORTED_MODULE_0__.a),"object"==typeof unsafeWindow&&unsafeWindow&&(unsafeWindow.GM=this.GM)}).call(window)}]);