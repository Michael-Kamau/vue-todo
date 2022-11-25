<template>
  <div :class="{ dark: darkThemeEnabled }">
    <Home/>
  </div>
</template>
<script>

import Home from './components/Home.vue'
import {mapGetters} from "vuex";

export default {
  components: {Home},
  computed: {
    ...mapGetters({
      'darkThemeEnabled': 'darkThemeEnabled',
    })
  },

}
</script>

<style scoped>

</style>
