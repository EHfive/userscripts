const isDev = require('./utils').isDev
const pkg = require('./package')

module.exports = function (data) {
  return {
    namespace: 'https://eh5.me',
    name: 'Force Enable Vue Devtools',
    'name:zh-CN': '强制开启Vue Devtools',
    'name:zh-TW': '強制開啓Vue Devtools',
    'description:zh-CN': '为生产构建的Vue应用强制开启Vue Devtools',
    'description:zh-TW': '爲生產構建的Vue應用強制開啓Vue Devtools',
    license: pkg.license,
    version: isDev ? `[version]-build.[buildTime].no[buildNo]` : `[version]`,
    updateURL: 'https://github.com/EHfive/userscripts/raw/master/userscripts/enbale-vue-devtools/dist/enable-vue-devtools.meta.js',
    downloadURL: 'https://github.com/EHfive/userscripts/raw/master/userscripts/enbale-vue-devtools/dist/enable-vue-devtools.user.js',
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
