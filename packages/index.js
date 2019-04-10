import { version } from '../package.json';
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

export {
  version,
  install,
  ZlTitle,
};

export default {
  version,
  install,
};
