<template>
  <div class="flex">
    <p>
      <span>姓名: \{{ defaultUser.name }}</span>
      <span>年龄: \{{ defaultUser.age }}</span>
      <span>性别: \{{ defaultUser.sex }}</span>,
      <span>地址: \{{ defaultUser.address }}</span>
    </p>
    <div v-for="u in users">
      <p>
        <span>姓名: \{{ u.name }}</span>,
        <span>年龄: \{{ u.age }}</span>,
        <span>性别: \{{ u.sex }}</span>,
        <span>地址: \{{ u.address }}</span>
      </p>
    </div>
  </div>
</template>
<script{{#if ts}} lang="ts"{{/if}}>
import { defineComponent, ref } from 'vue';
{{#if ts}}import { UserModel, User } from '@/apis/model/UserModel';{{/if}}
export default defineComponent({
  props: {
    defaultUser: {
      type: Object,
      default: () => ({})
    }
  },
  setup () {
    const users = ref{{#if ts}}<User[]>{{/if}}([]);
    $API.USER_detail{{#if ts}}<UserModel>{{/if}}().then(res => {
      if (res.retCode === 20000) {
        console.log(res.data);
        users.value = res.data;
      }
    });
    return {
      users
    };
  }
});
</script>