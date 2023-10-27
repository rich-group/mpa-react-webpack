<template>
  <Provider :store="store">
    <com-list />
  </Provider>
</template>
<script{{#if ts}} lang="ts"{{/if}}>
import { Provider } from '@/components/Provider';
import ComList from './components/List';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    Provider,
    ComList
  },
  setup () {
    const store = createStore({
      defaultUser: {
        name: 'sa',
        age: 23,
        sex: '男',
        address: '江苏省'
      }
    });
    return {
      store
    }
  }
});
</script>