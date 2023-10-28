import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const languageFiles = require.context('@/locales', true, /(?<!index)\.ts/);
const sitefiles = require.context('.', true, /(?<!index)\.ts/);
const defaultSite = 'www';

const prefixReg = /[\.]\w+/g;
const hostPrefix = window.location.host.replace(prefixReg, ''); 
const siteName = window.location.protocol === 'https:' ? hostPrefix : defaultSite;

const languages = languageFiles.keys()
  .reduce((obj, modulePath) => {
    const fileName = /[a-zA-Z]+/.exec(modulePath)?.[0] || '';
    return Object.assign({}, obj, {[fileName]: {translation: languageFiles(modulePath)?.default }});
  }, {});

const sites = sitefiles.keys()
  .reduce((obj, modulePath) => {
    const moduleName = /[a-zA-Z]+/.exec(modulePath)?.[0] || '';
    return Object.assign({}, obj, { [moduleName]: sitefiles(modulePath)?.default });
  }, {});


export const initI18n = () => {
  i18n
    .use(initReactI18next)
    .init({
      resources: languages,
      lng: sites[siteName].lang
    })
};


export const site = sites[siteName];
