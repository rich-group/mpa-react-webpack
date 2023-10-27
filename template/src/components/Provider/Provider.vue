<script{{#if ts}} lang="ts"{{/if}}>
import { provide, defineComponent } from 'vue';
export default defineComponent({
  name: 'Provider',
  props: {
    store: {
      type: Object,
      default: () => ({})
    }
  },
  setup (props, {slots}) {
    provide('store', props.store);
    return slots.default;
  }
});
</script>