import { createApp } from 'vue';
import App from './app.vue';
import '@/mock';

async function bootstrap () {
  const app = createApp(App);
  app.config.errorHandler = (err) => {
    /* 处理错误 */
  };
  app.mount('#user');
}

bootstrap();