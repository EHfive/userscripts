import Consola from 'consola/src/consola'
import BrowserReporter from 'consola/src/reporters/browser'
import preval from 'preval.macro'

const pkgName = preval`
  const pkg = require('../package.json');
  module.exports = pkg.name
`;
const logger = new Consola({
  reporters: [
    new BrowserReporter()
  ],
  defaults: {
    tag: pkgName
  }
});

export default logger
