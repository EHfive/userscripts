import '@userscripts/polyfills'
import main from './main'
import logger from './logger'

try {
  main();
  if (module.hot) {
    module.hot.accept(
      function (err) {
        logger.error(err)
      }
    );
    module.hot.accept('./main', function () {
      main()
    })
  }
} catch (e) {
  logger.error(e)
}
