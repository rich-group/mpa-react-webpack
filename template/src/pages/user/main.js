import { createApp } from 'vue';
import App from './app.vue';
import '@/mock';

async function bootstrap () {
  const app = createApp(App);
  app.mount('#user');
}

bootstrap();