<template>
  <h1 class="box">{{ msg }}11111111111</h1>
  <div>{{ mainStore.name }}</div>
  <p>
    See
    <code>README.md</code>
    for more information.
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useMainStore } from '@/store/main'

const mainStore = useMainStore()

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<style scoped lang="scss">
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
.box {
  color: $test-color;
}
</style>
