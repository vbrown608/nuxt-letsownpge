import Vue from 'vue';

Vue.prototype.$objToParams = data => {
  return Object.keys(data)
    .map(key => `${key}=${encodeURIComponent(data[key])}`)
    .join('&');
};
