<template>
  <div class="flex justify-between items-center">
    <h1 class=" text-white text-3xl font-bold my-8">TODO</h1>
    <div class="w-6 h-7 bg-no-repeat bg-moon-icon dark:bg-sun-icon cursor-pointer" @click="toggleTheme()"></div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "Header",
  methods: {
    ...mapActions({
      'toggleTheme': 'toggleTheme',
    })
  }
}
</script>

<style scoped>

</style>
