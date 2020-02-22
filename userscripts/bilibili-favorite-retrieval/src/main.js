const _global = (typeof unsafeWindow === 'object' && unsafeWindow) || globalThis

if(typeof unsafeWindow === 'object' && unsafeWindow) {
  unsafeWindow.$_GM = window
  window.$_GM = window
}

function main() {
  console.log($_GM)
  document.body.style.background = 'blue'
}

export default main
