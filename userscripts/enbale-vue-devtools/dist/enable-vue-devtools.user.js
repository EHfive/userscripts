// ==UserScript==
// @name              Force Enable Vue Devtools
// @version           0.2.2
// @author            Huang-Huang Bao <eh5@sokka.cn> (https://github.com/EHfive)
// @description       Force enable Vue Devtools for any Vue2 or Vue3 production build.
// @homepage          https://github.com/EHfive/userscripts/tree/master/userscripts/enbale-vue-devtools
// @supportURL        https://github.com/EHfive/userscripts/issues
// @namespace         https://eh5.me
// @name:zh-CN        强制开启Vue Devtools
// @name:zh-TW        強制開啓Vue Devtools
// @description:zh-CN 为生产构建的Vue2或Vue3应用强制开启Vue Devtools
// @description:zh-TW 爲生產構建的Vue2或Vue3應用強制開啓Vue Devtools
// @license           MIT
// @updateURL         https://github.com/EHfive/userscripts/raw/master/userscripts/enbale-vue-devtools/dist/enable-vue-devtools.meta.js
// @downloadURL       https://github.com/EHfive/userscripts/raw/master/userscripts/enbale-vue-devtools/dist/enable-vue-devtools.user.js
// @run-at            document-start
// @noframes          
// @include           /^.*$/
// @grant             unsafeWindow
// @grant             GM_info
// @grant             GM.info
// ==/UserScript==

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "https://localhost:9000/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);(function(){"object"==typeof unsafeWindow&&unsafeWindow&&(unsafeWindow.GM=this.GM)}).call(window)},function(e,t){(function(){"undefined"==typeof GM&&(this.GM={}),"undefined"==typeof GM_addStyle&&(this.GM_addStyle=e=>{"use strict";let t=document.getElementsByTagName("head")[0];if(t){let n=document.createElement("style");return n.setAttribute("type","text/css"),n.textContent=e,t.appendChild(n),n}return null}),"undefined"==typeof GM_registerMenuCommand&&(this.GM_registerMenuCommand=(e,t,n)=>{if(!document.body)return void("loading"===document.readyState&&document.documentElement&&"html"===document.documentElement.localName?new MutationObserver((o,r)=>{document.body&&(r.disconnect(),GM_registerMenuCommand(e,t,n))}).observe(document.documentElement,{childList:!0}):console.error("GM_registerMenuCommand got no body."));let o=document.body.getAttribute("contextmenu"),r=o?document.querySelector("menu#"+o):null;r||(r=document.createElement("menu"),r.setAttribute("id","gm-registered-menu"),r.setAttribute("type","context"),document.body.appendChild(r),document.body.setAttribute("contextmenu","gm-registered-menu"));let u=document.createElement("menuitem");u.textContent=e,u.addEventListener("click",t,!0),r.appendChild(u)}),"undefined"==typeof GM_getResourceText&&(this.GM_getResourceText=e=>{"use strict";return GM.getResourceUrl(e).then(e=>fetch(e)).then(e=>e.text()).catch((function(e){return GM.log("Request failed",e),null}))}),Object.entries({log:console.log.bind(console),info:GM_info}).forEach(([e,t])=>{t&&void 0===GM[e]&&(GM[e]=t)}),Object.entries({GM_addStyle:"addStyle",GM_deleteValue:"deleteValue",GM_getResourceURL:"getResourceUrl",GM_getValue:"getValue",GM_listValues:"listValues",GM_notification:"notification",GM_openInTab:"openInTab",GM_registerMenuCommand:"registerMenuCommand",GM_setClipboard:"setClipboard",GM_setValue:"setValue",GM_xmlhttpRequest:"xmlHttpRequest",GM_getResourceText:"getResourceText"}).forEach(([e,t])=>{let n=this[e];n&&void 0===GM[t]&&(GM[t]=function(...e){return new Promise((t,o)=>{try{t(n.apply(this,e))}catch(e){o(e)}})})})}).call(window)}]);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: /home/eh5/Projects/userscripts/packages/polyfills/dist/index.js
var dist = __webpack_require__(0);

// CONCATENATED MODULE: /home/eh5/Projects/userscripts/.yarn/cache/consola-npm-2.15.0-71e35f623c-9a20844425.zip/node_modules/consola/src/logLevels.js
const LogLevel = {};
LogLevel[LogLevel.Fatal = 0] = 'Fatal';
LogLevel[LogLevel.Error = 0] = 'Error';
LogLevel[LogLevel.Warn = 1] = 'Warn';
LogLevel[LogLevel.Log = 2] = 'Log';
LogLevel[LogLevel.Info = 3] = 'Info';
LogLevel[LogLevel.Success = 3] = 'Success';
LogLevel[LogLevel.Debug = 4] = 'Debug';
LogLevel[LogLevel.Trace = 5] = 'Trace';
LogLevel[LogLevel.Silent = -Infinity] = 'Silent';
LogLevel[LogLevel.Verbose = Infinity] = 'Verbose';
// CONCATENATED MODULE: /home/eh5/Projects/userscripts/.yarn/cache/consola-npm-2.15.0-71e35f623c-9a20844425.zip/node_modules/consola/src/types.js

/* harmony default export */ var src_types = ({
  // Silent
  silent: {
    level: -1
  },
  // Level 0
  fatal: {
    level: LogLevel.Fatal
  },
  error: {
    level: LogLevel.Error
  },
  // Level 1
  warn: {
    level: LogLevel.Warn
  },
  // Level 2
  log: {
    level: LogLevel.Log
  },
  // Level 3
  info: {
    level: LogLevel.Info
  },
  success: {
    level: LogLevel.Success
  },
  // Level 4
  debug: {
    level: LogLevel.Debug
  },
  // Level 5
  trace: {
    level: LogLevel.Trace
  },
  // Verbose
  verbose: {
    level: LogLevel.Trace
  },
  // Legacy
  ready: {
    level: LogLevel.Info
  },
  start: {
    level: LogLevel.Info
  }
});
// CONCATENATED MODULE: /home/eh5/Projects/userscripts/.yarn/cache/consola-npm-2.15.0-71e35f623c-9a20844425.zip/node_modules/consola/src/utils/index.js
function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
} // TODO: remove for consola@3

function isLogObj(arg) {
  // Should be plain object
  if (!isPlainObject(arg)) {
    return false;
  } // Should contains either 'message' or 'args' field


  if (!arg.message && !arg.args) {
    return false;
  } // Handle non-standard error objects


  if (arg.stack) {
    return false;
  }

  return true;
}
// CONCATENATED MODULE: /home/eh5/Projects/userscripts/.yarn/cache/consola-npm-2.15.0-71e35f623c-9a20844425.zip/node_modules/consola/src/consola.js


let paused = false;
const queue = [];

class consola_Consola {
  constructor(options = {}) {
    this._reporters = options.reporters || [];
    this._types = options.types || src_types;
    this.level = options.level !== undefined ? options.level : 3;
    this._defaults = options.defaults || {};
    this._async = options.async !== undefined ? options.async : undefined;
    this._stdout = options.stdout;
    this._stderr = options.stderr;
    this._mockFn = options.mockFn;
    this._throttle = options.throttle || 1000;
    this._throttleMin = options.throttleMin || 5; // Create logger functions for current instance

    for (const type in this._types) {
      this[type] = this._wrapLogFn(Object.assign({
        type
      }, this._types[type], this._defaults));
    } // Use _mockFn if is set


    if (this._mockFn) {
      this.mockTypes();
    } // Keep serialized version of last log


    this._lastLogSerialized = undefined;
    this._lastLog = undefined;
    this._lastLogTime = undefined;
    this._lastLogCount = 0;
    this._throttleTimeout = undefined;
  }

  get stdout() {
    return this._stdout || console._stdout; // eslint-disable-line no-console
  }

  get stderr() {
    return this._stderr || console._stderr; // eslint-disable-line no-console
  }

  create(options) {
    return new consola_Consola(Object.assign({
      reporters: this._reporters,
      level: this.level,
      types: this._types,
      defaults: this._defaults,
      stdout: this._stdout,
      stderr: this._stderr,
      mockFn: this._mockFn
    }, options));
  }

  withDefaults(defaults) {
    return this.create({
      defaults: Object.assign({}, this._defaults, defaults)
    });
  }

  withTag(tag) {
    return this.withDefaults({
      tag: this._defaults.tag ? this._defaults.tag + ':' + tag : tag
    });
  }

  addReporter(reporter) {
    this._reporters.push(reporter);

    return this;
  }

  removeReporter(reporter) {
    if (reporter) {
      const i = this._reporters.indexOf(reporter);

      if (i >= 0) {
        return this._reporters.splice(i, 1);
      }
    } else {
      this._reporters.splice(0);
    }

    return this;
  }

  setReporters(reporters) {
    this._reporters = Array.isArray(reporters) ? reporters : [reporters];
    return this;
  }

  wrapAll() {
    this.wrapConsole();
    this.wrapStd();
  }

  restoreAll() {
    this.restoreConsole();
    this.restoreStd();
  }

  wrapConsole() {
    for (const type in this._types) {
      // Backup original value
      if (!console['__' + type]) {
        // eslint-disable-line no-console
        console['__' + type] = console[type]; // eslint-disable-line no-console
      } // Override


      console[type] = this[type]; // eslint-disable-line no-console
    }
  }

  restoreConsole() {
    for (const type in this._types) {
      // Restore if backup is available
      if (console['__' + type]) {
        // eslint-disable-line no-console
        console[type] = console['__' + type]; // eslint-disable-line no-console

        delete console['__' + type]; // eslint-disable-line no-console
      }
    }
  }

  wrapStd() {
    this._wrapStream(this.stdout, 'log');

    this._wrapStream(this.stderr, 'log');
  }

  _wrapStream(stream, type) {
    if (!stream) {
      return;
    } // Backup original value


    if (!stream.__write) {
      stream.__write = stream.write;
    } // Override


    stream.write = data => {
      this[type](String(data).trim());
    };
  }

  restoreStd() {
    this._restoreStream(this.stdout);

    this._restoreStream(this.stderr);
  }

  _restoreStream(stream) {
    if (!stream) {
      return;
    }

    if (stream.__write) {
      stream.write = stream.__write;
      delete stream.__write;
    }
  }

  pauseLogs() {
    paused = true;
  }

  resumeLogs() {
    paused = false; // Process queue

    const _queue = queue.splice(0);

    for (const item of _queue) {
      item[0]._logFn(item[1], item[2]);
    }
  }

  mockTypes(mockFn) {
    this._mockFn = mockFn || this._mockFn;

    if (typeof this._mockFn !== 'function') {
      return;
    }

    for (const type in this._types) {
      this[type] = this._mockFn(type, this._types[type]) || this[type];
    }
  }

  _wrapLogFn(defaults) {
    function logFn() {
      if (paused) {
        queue.push([this, defaults, arguments]);
        return;
      }

      return this._logFn(defaults, arguments);
    }

    return logFn.bind(this);
  }

  _logFn(defaults, args) {
    if (defaults.level > this.level) {
      return this._async ? Promise.resolve(false) : false;
    } // Construct a new log object


    const logObj = Object.assign({
      date: new Date(),
      args: []
    }, defaults); // Consume arguments

    if (args.length === 1 && isLogObj(args[0])) {
      Object.assign(logObj, args[0]);
    } else {
      logObj.args = Array.from(args);
    } // Aliases


    if (logObj.message) {
      logObj.args.unshift(logObj.message);
      delete logObj.message;
    }

    if (logObj.additional) {
      if (!Array.isArray(logObj.additional)) {
        logObj.additional = logObj.additional.split('\n');
      }

      logObj.args.push('\n' + logObj.additional.join('\n'));
      delete logObj.additional;
    } // Normalize type and tag to lowercase


    logObj.type = typeof logObj.type === 'string' ? logObj.type.toLowerCase() : '';
    logObj.tag = typeof logObj.tag === 'string' ? logObj.tag.toLowerCase() : ''; // Resolve log

    /**
     * @param newLog false if the throttle expired and
     *  we don't want to log a duplicate
     */

    const resolveLog = (newLog = false) => {
      const repeated = this._lastLogCount - this._throttleMin;

      if (this._lastLog && repeated > 0) {
        const args = [...this._lastLog.args];

        if (repeated > 1) {
          args.push(`(repeated ${repeated} times)`);
        }

        this._log({ ...this._lastLog,
          args
        });

        this._lastLogCount = 1;
      } // Log


      if (newLog) {
        this._lastLog = logObj;

        if (this._async) {
          return this._logAsync(logObj);
        } else {
          this._log(logObj);
        }
      }
    }; // Throttle


    clearTimeout(this._throttleTimeout);
    const diffTime = this._lastLogTime ? logObj.date - this._lastLogTime : 0;
    this._lastLogTime = logObj.date;

    if (diffTime < this._throttle) {
      try {
        const serializedLog = JSON.stringify([logObj.type, logObj.tag, logObj.args]);
        const isSameLog = this._lastLogSerialized === serializedLog;
        this._lastLogSerialized = serializedLog;

        if (isSameLog) {
          this._lastLogCount++;

          if (this._lastLogCount > this._throttleMin) {
            // Auto-resolve when throttle is timed out
            this._throttleTimeout = setTimeout(resolveLog, this._throttle);
            return; // SPAM!
          }
        }
      } catch (_) {// Circular References
      }
    }

    resolveLog(true);
  }

  _log(logObj) {
    for (const reporter of this._reporters) {
      reporter.log(logObj, {
        async: false,
        stdout: this.stdout,
        stderr: this.stderr
      });
    }
  }

  _logAsync(logObj) {
    return Promise.all(this._reporters.map(reporter => reporter.log(logObj, {
      async: true,
      stdout: this.stdout,
      stderr: this.stderr
    })));
  }

} // Legacy support


consola_Consola.prototype.add = consola_Consola.prototype.addReporter;
consola_Consola.prototype.remove = consola_Consola.prototype.removeReporter;
consola_Consola.prototype.clear = consola_Consola.prototype.removeReporter;
consola_Consola.prototype.withScope = consola_Consola.prototype.withTag;
consola_Consola.prototype.mock = consola_Consola.prototype.mockTypes;
consola_Consola.prototype.pause = consola_Consola.prototype.pauseLogs;
consola_Consola.prototype.resume = consola_Consola.prototype.resumeLogs; // Export class

/* harmony default export */ var consola = (consola_Consola);
// CONCATENATED MODULE: /home/eh5/Projects/userscripts/.yarn/cache/consola-npm-2.15.0-71e35f623c-9a20844425.zip/node_modules/consola/src/reporters/browser.js
class BrowserReporter {
  constructor(options) {
    this.options = Object.assign({}, options);
    this.defaultColor = '#7f8c8d'; // Gray

    this.levelColorMap = {
      0: '#c0392b',
      // Red
      1: '#f39c12',
      // Yellow
      3: '#00BCD4' // Cyan

    };
    this.typeColorMap = {
      success: '#2ecc71' // Green

    };
  }

  log(logObj) {
    const consoleLogFn = logObj.level < 1 // eslint-disable-next-line no-console
    ? console.__error || console.error : // eslint-disable-next-line no-console
    logObj.level === 1 && console.warn ? console.__warn || console.warn : console.__log || console.log; // Type

    const type = logObj.type !== 'log' ? logObj.type : ''; // Tag

    const tag = logObj.tag ? logObj.tag : ''; // Styles

    const color = this.typeColorMap[logObj.type] || this.levelColorMap[logObj.level] || this.defaultColor;
    const style = `
      background: ${color};
      border-radius: 0.5em;
      color: white;
      font-weight: bold;
      padding: 2px 0.5em;
    `;
    const badge = `%c${[tag, type].filter(Boolean).join(':')}`; // Log to the console

    if (typeof logObj.args[0] === 'string') {
      consoleLogFn(`${badge}%c ${logObj.args[0]}`, style, // Empty string as style resets to default console style
      '', ...logObj.args.slice(1));
    } else {
      consoleLogFn(badge, style, ...logObj.args);
    }
  }

}
// CONCATENATED MODULE: ./src/logger.js


const pkgName = "enable-vue-devtools";
const logger = new consola({
  reporters: [new BrowserReporter()],
  defaults: {
    tag: pkgName
  }
});
/* harmony default export */ var src_logger = (logger);
// CONCATENATED MODULE: ./src/main.js
/* harmony default export */ var main = (main_main);


const _global = typeof unsafeWindow === 'object' && unsafeWindow || globalThis; // devtool hook should be ready when <body> exists


const _devtoolHook = _global.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function main_main() {
  if (!_devtoolHook) {
    src_logger.warn('No Vue Devtools hook found', _global.location);
    return;
  }

  observeVueRoot(function (app, disconnect) {
    emitDevtoolVue2Hooks(app);
  }, function (app, disconnect) {
    emitDevtoolVue3Hooks(app);
  });
}

function emitDevtoolVue2Hooks(app) {
  let Vue = app.constructor;
  const store = app.$store;

  while (Vue.super) {
    // find base Vue
    Vue = Vue.super;
  }

  Vue.config.devtools = true;
  src_logger.info('enabling devtools for Vue instance', app); // must re-emit 'init' if this Vue is different with other Vue(s)
  // otherwise this `Vue`'s root instance would not be added to Devtools store
  // https://github.com/vuejs/vue-devtools/blob/933063fd06860464be4bfd8c83ba09d7fc2c753e/packages/app-backend/src/index.js#L218-L225

  _devtoolHook.emit('init', Vue); // TODO validate Vuex instance


  if (store) {
    src_logger.info('enabling devtools for Vuex instance', store);
    devtoolStorePlugin(store, _devtoolHook);
  }
}

function emitDevtoolVue3Hooks(app) {
  if (!Array.isArray(_devtoolHook.apps)) return;
  if (_devtoolHook.apps.includes(app)) return;
  let version = app.version;

  if (!version) {
    src_logger.warn('no Vue version detected, fallback to "3.0.0"');
    version = '3.0.0';
  }

  src_logger.info('enabling devtools for Vue 3 instance', app); // FIXME: impossible to get those Symbols,
  // https://github.com/vuejs/vue-next/blob/410e7abbbb78e83989ad2e5a1793c290129dfdc7/packages/runtime-core/src/devtools.ts#L38

  const types = {
    Fragment: undefined,
    Text: undefined,
    Comment: undefined,
    Static: undefined
  };

  _devtoolHook.emit('app:init', app, version, types);

  const unmount = app.unmount.bind(app);

  app.unmount = function () {
    _devtoolHook.emit('app:unmount', app);

    unmount();
  };
}

function checkVue2Instance(target) {
  const vue = target && target.__vue__;
  return !!(vue && typeof vue === 'object' && vue._isVue && typeof vue.constructor === 'function');
}

function checkVue3Instance(target) {
  const app = target && target.__vue_app__;
  return !!app;
}

function noop() {}

function observeVueRoot(callbackVue2, callbackVue3) {
  if (typeof callbackVue2 !== 'function') {
    callbackVue2 = noop;
  }

  if (typeof callbackVue3 !== 'function') {
    callbackVue3 = noop;
  }

  const vue2RootSet = new WeakSet();
  const vue3RootSet = new WeakSet();
  const observer = new MutationObserver((mutations, observer) => {
    const disconnect = observer.disconnect.bind(observer);

    for (const {
      target
    } of mutations) {
      if (!target) {
        return;
      } else if (checkVue2Instance(target)) {
        const inst = target.__vue__;
        const root = inst.$parent ? inst.$root : inst;

        if (vue2RootSet.has(root)) {
          // already callback, continue loop
          continue;
        }

        vue2RootSet.add(root);
        callbackVue2(root, disconnect);
      } else if (checkVue3Instance(target)) {
        const app = target.__vue_app__;

        if (vue3RootSet.has(app)) {
          // already callback, continue loop
          continue;
        }

        vue3RootSet.add(app);
        callbackVue3(app, disconnect);
      }
    }
  });
  observer.observe(document.documentElement, {
    attributes: true,
    subtree: true,
    childList: true
  });
  return observer;
}

function devtoolStorePlugin(store, devtoolHook) {
  store._devtoolHook = devtoolHook;
  devtoolHook.emit('vuex:init', store);
  devtoolHook.on('vuex:travel-to-state', targetState => {
    store.replaceState(targetState);
  });
  store.subscribe((mutation, state) => {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}
// CONCATENATED MODULE: ./src/index.js




try {
  main();

  if (false) {}
} catch (e) {
  src_logger.error(e);
}

/***/ })
/******/ ]);