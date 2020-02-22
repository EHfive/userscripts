const isDev = require('./utils').isDev

module.exports = function (data) {
  return {
    version: isDev ? `[version]-build.[buildTime].no[buildNo]` : `[version]`,
    include: [
      '/^https?://space.bilibili.com/[0-9]+/favlist.*$/'
    ],
    grant: [
      'unsafeWindow',
      'GM_xmlhttpRequest'
    ]
  }
}
