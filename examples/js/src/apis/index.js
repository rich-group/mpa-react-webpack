import { createAxios } from 'rich-axios';
import USER from './user';

const configs = {
  USER
};

const instance = createAxios({
  timeout: 5000
});
const modules = {};
const moduleNames = Object.keys(configs);
let length = moduleNames.length;

while(length--) {
  const moduleName = moduleNames[length];
  const moduleApis = configs[moduleName];
  if (Array.isArray(moduleApis) && moduleApis.length > 0) {
    const res = moduleApis.reduce((apis, api) => {
      return Object.assign(apis, {
        [moduleName + '_' + api.name]: (obj, resetConfig) => 
          ['POST', 'CANCELPOST'].includes(api.type.toUpperCase()) 
            ? instance[api.type](api.path, obj, resetConfig)
            : instance[api.type](api.path, obj)
      });
    }, {});
    Object.assign(modules, res);
  }
}

export default modules;