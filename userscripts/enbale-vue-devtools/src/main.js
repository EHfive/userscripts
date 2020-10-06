export default main

import logger from './logger'

const _global = (typeof unsafeWindow === 'object' && unsafeWindow) || globalThis;

// devtool hook should be ready when <body> exists
const _devtoolHook = _global.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function main() {
  if (!_devtoolHook) {
    logger.warn('No Vue Devtools hook found', _global.location);
    return
  }
  observeVueRoot(
    function (app, disconnect) {
      emitDevtoolVue2Hooks(app);
    },
    function (app, disconnect) {
      emitDevtoolVue3Hooks(app);
    }
  );
}

function emitDevtoolVue2Hooks(app) {
  let Vue = app.constructor;
  const store = app.$store;
  while (Vue.super) {
    // find base Vue
    Vue = Vue.super
  }
  Vue.config.devtools = true;
  logger.info('enabling devtools for Vue instance', app);
  // must re-emit 'init' if this Vue is different with other Vue(s)
  // otherwise this `Vue`'s root instance would not be added to Devtools store
  // https://github.com/vuejs/vue-devtools/blob/933063fd06860464be4bfd8c83ba09d7fc2c753e/packages/app-backend/src/index.js#L218-L225
  _devtoolHook.emit('init', Vue);
  // TODO validate Vuex instance
  if (store) {
    logger.info('enabling devtools for Vuex instance', store);
    devtoolStorePlugin(store, _devtoolHook);
  }
}

function emitDevtoolVue3Hooks(app) {
  if (!Array.isArray(_devtoolHook.apps)) return;
  if (_devtoolHook.apps.includes(app)) return;
  let version = app.version;
  if (!version) {
    logger.warn('no Vue version detected, fallback to "3.0.0"')
    version = '3.0.0';
  }
  logger.info('enabling devtools for Vue 3 instance', app);

  // FIXME: impossible to get those Symbols,
  // https://github.com/vuejs/vue-next/blob/410e7abbbb78e83989ad2e5a1793c290129dfdc7/packages/runtime-core/src/devtools.ts#L38
  const types = {
    Fragment: undefined,
    Text: undefined,
    Comment: undefined,
    Static: undefined
  }
  _devtoolHook.emit('app:init', app, version, types);

  const unmount = app.unmount.bind(app);
  app.unmount = function () {
    _devtoolHook.emit('app:unmount', app);
    unmount();
  }
}

function checkVue2Instance(target) {
  const vue = target && target.__vue__
  return !!(
    vue
    && (typeof vue === 'object')
    && vue._isVue
    && (typeof vue.constructor === 'function')
  )
}

function checkVue3Instance(target) {
  const app = target && target.__vue_app__
  return !!app
}

function noop() {
}

function observeVueRoot(callbackVue2, callbackVue3) {
  if (typeof callbackVue2 !== 'function') {
    callbackVue2 = noop
  }
  if (typeof callbackVue3 !== 'function') {
    callbackVue3 = noop
  }
  const vue2RootSet = new WeakSet();
  const vue3RootSet = new WeakSet();
  const observer = new MutationObserver(
    (mutations, observer) => {
      const disconnect = observer.disconnect.bind(observer);
      for (const {target} of mutations) {
        if (!target) {
          return
        } else if (checkVue2Instance(target)) {
          const inst = target.__vue__;
          const root = inst.$parent ? inst.$root : inst;
          if (vue2RootSet.has(root)) {
            // already callback, continue loop
            continue
          }
          vue2RootSet.add(root);
          callbackVue2(root, disconnect);
        } else if (checkVue3Instance(target)) {
          const app = target.__vue_app__;
          if (vue3RootSet.has(app)) {
            // already callback, continue loop
            continue
          }
          vue3RootSet.add(app);
          callbackVue3(app, disconnect);
        }
      }
    }
  );
  observer.observe(document.documentElement, {
    attributes: true,
    subtree: true,
    childList: true
  });
  return observer
}

function devtoolStorePlugin(store, devtoolHook) {
  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', targetState => {
    store.replaceState(targetState)
  });

  store.subscribe((mutation, state) => {
    devtoolHook.emit('vuex:mutation', mutation, state)
  })
}
