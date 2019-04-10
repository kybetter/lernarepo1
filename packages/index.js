import ZlTitle from './title/index';

const components = [
  ZlTitle,
];

const install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });

  // Vue.prototype.$XYUI = {
  //   size: opts.size || '',
  // };
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const API = {
  version: '1.0.0',
  install,
  ZlTitle,
};

export default API;
