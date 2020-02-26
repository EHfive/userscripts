import Consola from 'consola/src/consola'
import BrowserReporter from 'consola/src/reporters/browser'
import pkg from '../package'

const logger = new Consola({
  reporters: [
    new BrowserReporter()
  ],
  defaults: {
    tag: pkg.name
  }
})

export default logger
