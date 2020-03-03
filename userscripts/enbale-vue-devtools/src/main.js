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
  observeVueRoot(function (app, disconnect) {
    emitDevtoolHooks(app);
  });
}

function emitDevtoolHooks(app) {
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

function checkVueInstance(vue) {
  return !!(
    vue
    && (typeof vue === 'object')
    && vue._isVue
    && (typeof vue.constructor === 'function')
  )
}

function observeVueRoot(callback) {
  const vueRootSet = new WeakSet();
  const observer = new MutationObserver(
    (mutations, observer) => {
      for (const {target} of mutations) {
        if (target && checkVueInstance(target.__vue__)) {
          const inst = target.__vue__;
          const root = inst.$parent ? inst.$root : inst;
          if (vueRootSet.has(root)) {
            // already callback, continue loop
            continue
          }
          vueRootSet.add(root);
          if (typeof callback === 'function') {
            callback(root, observer.disconnect.bind(observer));
          }
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
