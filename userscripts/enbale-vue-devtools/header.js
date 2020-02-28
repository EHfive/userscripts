const isDev = require('./utils').isDev

module.exports = function (data) {
  return {
    'name': 'Force Enable Vue Devtools',
    'name:zh-CN': '强制开启Vue Devtools',
    'name:zh-TW': '強制開啓Vue Devtools',
    'description:zh-CN': '为生产构建的Vue应用强制开启Vue Devtools',
    'description:zh-TW': '爲生產構建的Vue應用強制開啓Vue Devtools',
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
