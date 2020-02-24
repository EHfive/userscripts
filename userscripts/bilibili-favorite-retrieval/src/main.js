export default main

import {setAxiosDefaults} from "@userscripts/axios-config"
import axios from 'axios'

setAxiosDefaults(axios);

const _global = (typeof unsafeWindow === 'object' && unsafeWindow) || globalThis;

async function main() {
  const rootEl = await getVueRootEl();
  const root = rootEl.__vue__;
  const app = root.__proto__;
  const Vue = app.constructor;
  const store = root.$store;
  Vue.config.devtools = true;
  const devtoolHook = _global.__VUE_DEVTOOLS_GLOBAL_HOOK__;
  if (devtoolHook) {
    // TODO change to logger
    console.log('enabling devtools');
    devtoolHook.emit('init', Vue);
    devtoolStorePlugin(store, devtoolHook)
  }
}


function getVueRootEl(elSelector = '#app') {
  const el = document.querySelector(elSelector);
  if (el) return Promise.resolve(el);
  return new Promise((resolve => {
    new MutationObserver((mutations, observer) => {
      const el = document.querySelector(elSelector);
      if (el) {
        observer.disconnect();
        resolve(el)
      }
    }).observe(document.documentElement, {subtree: true, childList: true});
  }))
}

function devtoolStorePlugin(store, devtoolHook) {
  if (!devtoolHook) return;

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', targetState => {
    store.replaceState(targetState)
  });

  store.subscribe((mutation, state) => {
    devtoolHook.emit('vuex:mutation', mutation, state)
  })
}
