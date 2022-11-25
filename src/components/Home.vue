<template>
  <div class="flex flex-col  bg-gray-900 min-h-screen">
    <div class="h-52 w-full bg-desktop-light absolute"></div>

    <div class="w-4/5 sm:w-2/3 md:w-2/4 mx-auto py-4 z-10">
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
        focus:text-white focus:bg-gray-800  focus:border-blue-600 focus:outline-none
      "
          id="todoInput"
          placeholder="Create a new todo..."
          v-model="todo"
          v-on:keyup.enter="addItem"
      />

      <section class="w-full mx-auto my-5 divide-y divide-gray-600">
          <div>
            <div v-for="item in todos(type)"
                 class="item flex justify-between items-center py-5 px-2  text-white bg-gray-800 ">
           <span class="flex items-center space-x-4">
             <div
                 class="flex items-center justify-center h-5 w-5 rounded-full bg-gradient-to-r from-sky-400 to-violet-500 cursor-pointer"
                 @click="markComplete(item.title)" id="completeButton">
               <div v-if="item.complete == false" class="bg-gray-800 h-4 w-4 rounded-full m-auto"></div>
               <img v-else src="../assets/images/ICON-CHECK.SVG" class="w-2 h-2 col-span-1 bg-red">
            </div>

             <p class="col-span-4" :class="item.complete ?'line-through':''">{{ item.title }}</p>
           </span>
              <img id="clearComplete" src="../assets/images/ICON-CROSS.SVG"
                   class="w-4 h-4 cursor-pointer transform duration-30 hover:scale-105"
                   @click="deleteTodo(item.title)">
            </div>
            <div
                class="flex justify-between items-center py-4 px-2  text-white bg-gray-800 text-gray-400 rounded-b text-xs font-semibold">
              <p id="itemsLeft">{{ todos('active').length }} items left</p>
              <div class="flex space-x-2">
                <p class="cursor-pointer hover:text-white" :class="{ 'text-blue-400' : type=='all' }"
                   @click="type='all'">
                  All</p>
                <p class="cursor-pointer hover:text-white hover:scale-105" :class="{ 'text-blue-400' : type=='active' }"
                   @click="type='active'">Active</p>
                <p class="cursor-pointer hover:text-white" :class="{ 'text-blue-400' : type=='complete' }"
                   @click="type='complete'">Completed</p>
              </div>
              <p class="cursor-pointer  hover:text-gray-100" @click="clearCompleted">Clear Completed</p>

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
    ...mapActions({
      'addTodo': 'todos/addTodo',
      'markComplete': 'todos/markComplete',
      'deleteTodo': 'todos/deleteTodo',
      'clearCompleted': 'todos/clearCompleted',
    })
  }
}

</script>

<style scoped lang="scss">

</style>
