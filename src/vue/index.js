import ua from '../index';

const Plugin = {
  install(Vue) {
    Vue.prototype.$ua = ua;
  }
};

export default Plugin;
