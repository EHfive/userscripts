const _global = (typeof unsafeWindow === 'object' && unsafeWindow) || globalThis

function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

async function test() {
  console.log('start sleeping')
  await sleep(2000)
  console.log('end sleeping')
}

function main() {
  test()
  console.log(_global)
  document.body.style.background = 'blue'
}

export default main
