<template>
  <section class="w-full mx-auto my-5 ">

    <div class="divide-y divide-gray-200 dark:divide-gray-600">
      <TransitionGroup name="todos" tag="div" class="divide-y divide-gray-200 dark:divide-gray-600">
        <div v-for="(item, index) in todos(type)"
             :key="index"
             draggable="true"
             @dragstart="startDrag($event, item)"
             @drop="onDrop($event, item)"
             @dragenter.prevent
             @dragover.prevent
             class="item flex justify-between items-center py-5 px-4  text-gray-500 dark:text-gray-300 bg-white dark:bg-gray-800 font-normal">
           <span class="flex items-center space-x-4 ">
             <div
                 class="flex items-center justify-center h-5 w-5 rounded-full bg-gray-400 hover:bg-gradient-to-r hover:from-sky-400 hover:to-violet-500 cursor-pointer"
                 :class="item.complete ?'bg-gradient-to-r from-sky-400 to-violet-500':''"
                 @click="markComplete(item.title)"
                 id="completeButton"

             >
               <div v-if="item.complete == false"
                    class="bg-white dark:bg-gray-800 h-[1.15rem] w-[1.15rem] rounded-full m-auto"></div>
               <img v-else src="../assets/images/ICON-CHECK.png" class="w-2 h-2 col-span-1 bg-red">
            </div>

             <p class="col-span-4 cursor-pointer hover:scale-105"
                :class="item.complete ?'line-through text-gray-400 dark:text-gray-600':''">{{ item.title }}</p>
           </span>
          <img id="clearComplete" src="../assets/images/ICON-CROSS.png"
               class="w-4 h-4 cursor-pointer transform duration-30 hover:scale-105"
               @click="deleteTodo(item.title)">
        </div>
      </TransitionGroup>

      <div
          class="flex justify-between items-center py-4 px-2 sm:px-4  dark:text-gray-300 bg-white dark:bg-gray-800 text-gray-400 dark:text-gray-300 rounded-b text-xs font-semibold">
        <p id="itemsLeft" class="font-normal">{{ todos('active').length }} items left</p>
        <div class="flex space-x-1 sm:space-x-2 sm:mx-1">
          <p class="cursor-pointer hover:text-gray-500 dark:hover:text-gray-100 hover:scale-105"
             :class="{ 'text-blue-400' : type=='all' }"
             @click="type='all'">
            All</p>
          <p class="cursor-pointer hover:text-gray-500 dark:hover:text-gray-100 hover:scale-105"
             :class="{ 'text-blue-400' : type=='active' }"
             @click="type='active'">Active</p>
          <p class="cursor-pointer hover:text-gray-500 dark:hover:text-gray-100 hover:scale-105"
             :class="{ 'text-blue-400' : type=='complete' }"
             @click="type='complete'">Completed</p>
        </div>
        <p class="cursor-pointer hover:text-gray-500 dark:hover:text-gray-100 font-normal" @click="clearCompleted">
          Clear Completed</p>

      </div>

    </div>

  </section>

</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "Todos",
  data() {
    return {
      todo: '',
      type: 'all'
    }
  },
  computed: {
    ...mapGetters({
      'todos': 'todos/todos',
    })
  },
  methods: {

    startDrag(event, item) {
      event.dataTransfer.dropEffect = 'move'
      event.dataTransfer.effectAllowed = 'move'
      event.dataTransfer.setData('itemTitle', item.title)

    },

    onDrop(event, item) {
      const itemTitle = event.dataTransfer.getData('itemTitle')
      if (itemTitle !== item.title) {
        this.reOrderElements({a: itemTitle, b: item.title})
      }
    },
    ...mapActions({
      'markComplete': 'todos/markComplete',
      'deleteTodo': 'todos/deleteTodo',
      'clearCompleted': 'todos/clearCompleted',
      'toggleTheme': 'toggleTheme',
      'reOrderElements': 'todos/reOrderElements'
    })
  }
}
</script>

<style scoped lang="scss">
section .item:first-child {
  @apply rounded-t;
}

.todos-enter-active{
  transition: all 0.5s ease;
}
.todos-enter-from, {
  opacity: 0;
  transform: translateX(30px);
}

</style>
