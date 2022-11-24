<script setup>
import {ref} from 'vue'

defineProps({
  msg: String
})

</script>

<template>
  <div class="flex flex-col  bg-gray-900 h-screen">
    <div class="h-52 w-full bg-desktop-light absolute"></div>

    <div class="w-4/5 sm:w-2/3 md:w-2/4 mx-auto py-4 z-10" >
      <div class="flex justify-between items-center">
      <h1 class=" text-white text-3xl font-bold my-6">TODO</h1>
        <img src="../assets/images/ICON-SUN.SVG" alt="" class="h-6 w-6">

      </div>
      <input
          type="text"
          class="
        form-control
        block
        w-full
        mx-auto
        my-1
        px-3
        py-4
        text-base
        font-normal
        text-white
        bg-gray-800 bg-clip-padding
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
          id="exampleText0"
          placeholder="Create a new todo..."
      />

      <section class="w-full mx-auto my-5 divide-y divide-gray-600">
        <div v-for="item in [1,2,3]" class="item flex justify-between items-center py-5 px-2  text-white bg-gray-800 ">
           <span class="flex items-center space-x-2">
             <div
                 class="flex items-center justify-center h-5 w-5 rounded-full bg-gradient-to-r from-sky-400 to-violet-500">
<!--               <div class="bg-gray-800 h-4 w-4 rounded-full m-auto"></div>-->
                         <img src="../assets/images/ICON-CHECK.SVG" class="w-2 h-2 col-span-1 bg-red">
            </div>

             <p class="col-span-4">Jog around the park</p>
           </span>
          <img src="../assets/images/ICON-CROSS.SVG" class="w-4 h-4">
        </div>
        <div
            class="flex justify-between items-center py-4 px-2  text-white bg-gray-800 text-gray-400 rounded-b text-xs font-semibold">
          <p>5 Items left</p>
          <div class="flex space-x-2">
            <p>All</p>
            <p>Active</p>
            <p>Completed</p>
          </div>
          <p>Clear Completed</p>

        </div>

      </section>

    </div>
  </div>


</template>

<style scoped lang="scss">
section .item:first-child {
  @apply rounded-t;
}
</style>
