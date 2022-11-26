<template>
  <div :class="{ dark: darkThemeEnabled }" class="font-rubik">
    <div class="flex flex-col  bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div
          class="h-52 w-full bg-cover bg-no-repeat bg-mobile-light dark:bg-mobile-dark md:bg-desktop-light dark:md:bg-desktop-dark absolute"></div>
      <div class="w-5/6 sm:w-2/3 md:w-2/4 lg:w-1/3 mx-auto py-4 z-10">
        <Header/>
        <AddTodo/>
        <Todos/>

      </div>
    </div>
  </div>
</template>
<script>

import Header from "./components/Header.vue";
import AddTodo from "./components/AddTodo.vue";
import Todos from "./components/Todos.vue";

import {mapGetters} from "vuex";

export default {
  components: {Header, AddTodo, Todos},
  computed: {
    ...mapGetters({
      'darkThemeEnabled': 'darkThemeEnabled',
    })
  },

}
</script>

<style scoped>

</style>
