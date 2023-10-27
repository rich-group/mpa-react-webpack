import { createApp } from 'vue';
import App from './app.vue';
import {initI18n, site} from '@/site';
import 'tailwindcss/tailwind.css';

async function bootstrap () {
  const app = createApp(App);
  app.config.performance = true;
  app.use(initI18n());
  app.config.errorHandler = (err) => {
    /* 处理错误 */
  };
  app.mount('#language');
}

bootstrap();