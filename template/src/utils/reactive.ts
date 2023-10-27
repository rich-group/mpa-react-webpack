import { reactive } from 'vue';

export function createStore (data) {
  return reactive(data);
}