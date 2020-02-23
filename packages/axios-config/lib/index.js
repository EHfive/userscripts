function getDefaultAdapter() {
  var adapter;
  if (
    (typeof GM === 'object' && GM.xmlHttpRequest)
    || (typeof GM_xmlhttpRequest !== 'undefined' && GM_xmlhttpRequest)
  ) {
    // For userscript use gmxhr adapter
    adapter = require('axios-gmxhr-adapter')
  } else if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = require('axios/lib/adapters/xhr');
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = require('axios/lib/adapters/http');
  }
  return adapter;
}

function setAxiosDefaults(axios) {
  axios.defaults.adapter = getDefaultAdapter()
}

function createAxios() {
  var axios = require('axios').create();
  setAxiosDefaults(axios);
  return axios
}

module.exports = {
  getDefaultAdapter,
  setAxiosDefaults,
  createAxios
};
