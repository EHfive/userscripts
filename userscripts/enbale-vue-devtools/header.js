const isDev = require('./utils').isDev

module.exports = function (data) {
  return {
    version: isDev ? `[version]-build.[buildTime].no[buildNo]` : `[version]`,
    'run-at': 'document-start',
    'name:zh-CN': '强制开启VueDevtools',
    'name:zh-TW': '強制開啓VueDevtools',
    'description:zh-CN': '为生产构建的Vue应用强制开启VueDevtools',
    'description:zh-TW': '爲生產構建的Vue應用強制開啓VueDevtools',
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
