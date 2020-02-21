import main from './main'

main()

if(module.hot) {
  module.hot.accept(
    function (err) {
      console.error(err)
    }
  )
  module.hot.accept('./main', function () {
    main()
  })
}
