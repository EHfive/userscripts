const _global = (typeof unsafeWindow === 'object' && unsafeWindow) || globalThis

function main() {
  console.log('sssssss', GM, _global)
  document.body.style.background = 'red'
}

export default main
