<template>
  <div class="flash">
    <p>姓名：{{ name }}</p>
    <p>年龄：{{ age }}</p>
  </div>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{
  name: string,
  age: number
}>(), {
  name: '',
  age: 0
});

</script>