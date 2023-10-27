<template>
  <div>
    <h2>Loading</h2>
    <div class="flex">
      <Loading1 class="mr-[40px]" />
      <Loading2 />
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import { Loading1, Loading2 } from '@/components/Loading';
export default defineComponent({
  name: 'DEMO',
  components: {
    Loading1,
    Loading2
  }
});
</script>