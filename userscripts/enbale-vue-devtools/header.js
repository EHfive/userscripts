const isDev = require('./utils').isDev

module.exports = function (data) {
  const {author} = data
  return {
    version: isDev ? `[version]-build.[buildTime].no[buildNo]` : `[version]`,
    'run-at': 'document-start',
    include: [
      /^.*$/
    ].map(reg => reg.toString()),
    grant: [
      'unsafeWindow',
      'GM_info',
      'GM.info'
    ]
  }
}
