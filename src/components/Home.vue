<template>
  <div class="flex flex-col  bg-gray-100 dark:bg-gray-900 min-h-screen">
    <div
        class="h-52 w-full bg-cover bg-no-repeat bg-mobile-light dark:bg-mobile-dark md:bg-desktop-light dark:md:bg-desktop-dark absolute"></div>

    <div class="w-4/5 sm:w-2/3 md:w-2/4 mx-auto py-4 z-10">
      <div class="flex justify-between items-center">
        <h1 class=" text-white text-3xl font-bold my-8">TODO</h1>
        <div class="w-6 h-7 bg-no-repeat bg-moon-icon dark:bg-sun-icon cursor-pointer" @click="toggleTheme()"></div>
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
        text-gray-600
        dark:text-gray-300
        dark:bg-gray-800
        rounded
        transition
        ease-in-out
        m-0
        dark:focus:text-gray-300
        dark:focus:bg-gray-800
        focus:outline-none
      "
          id="todoInput"
          placeholder="Create a new todo..."
          v-model="todo"
          v-on:keyup.enter="addItem"
      />

      <section class="w-full mx-auto my-5 ">
        <div class="divide-y divide-gray-200 dark:divide-gray-600">
          <div v-for="item in todos(type)"
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
          <div
              class="flex justify-between items-center py-4 px-4  dark:text-gray-300 bg-white dark:bg-gray-800 text-gray-400 dark:text-gray-300 rounded-b text-xs font-semibold">
            <p id="itemsLeft" class="font-normal">{{ todos('active').length }} items left</p>
            <div class="flex space-x-2 mx-1">
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

    </div>
  </div>


</template>
<script>
import {mapActions, mapGetters} from 'vuex';

export default {
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
    addItem() {
      if (this.todo.length > 0 && this.todos('all').filter(todo => todo.title === this.todo).length < 1) {
        this.addTodo([{title: this.todo, complete: false}])
        this.todo = ''
      }

    },

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
      'addTodo': 'todos/addTodo',
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

</style>
