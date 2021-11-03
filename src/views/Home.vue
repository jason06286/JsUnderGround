<script>
import { ref } from 'vue';

export default {
  setup(props) {
    const linksArray = ref([
      {
        to: '/lv9',
        name: 'TurnTableLv9',
      },
    ]);

    return {
      linksArray,
    };
  },
};
</script>

<template>
  <div class="flex items-center justify-center w-full h-screen bg-gray-700">
    <router-link
      to="/"
      class="px-5 py-3 mx-3 bg-gray-500 border rounded hover:bg-gray-400"
      >Home</router-link
    >
    <router-link
      :to="item.to"
      class="px-5 py-3 mx-3 bg-gray-500 border rounded hover:bg-gray-400"
      v-for="item in linksArray"
      :key="item.name"
      >{{ item.name }}</router-link
    >
  </div>
</template>

<style>
</style>