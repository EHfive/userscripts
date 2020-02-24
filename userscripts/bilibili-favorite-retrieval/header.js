const isDev = require('./utils').isDev

module.exports = function (data) {
  return {
    version: isDev ? `[version]-build.[buildTime].no[buildNo]` : `[version]`,
    'run-at': 'document-body',
    include: [
      /^https?:\/\/space.bilibili.com\/[0-9]+(\/.*$|$)/
    ].map(reg => reg.toString()),
    connect: [
      '*'
    ],
    grant: [
      'unsafeWindow',
      'GM_info',
      'GM.info',
      'GM_xmlhttpRequest',
      'GM.xmlhttpRequest',
    ]
  }
}
