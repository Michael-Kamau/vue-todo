<template>
  <div class="relative text-gray-600 focus-within:text-gray-400">
      <span class="absolute inset-y-0 left-0 flex items-center pl-4">
        <div
            class="flex items-center justify-center h-5 w-5 rounded-full bg-gray-400 hover:bg-gradient-to-r hover:from-sky-400 hover:to-violet-500 cursor-pointer">
      <div class="bg-white dark:bg-gray-800 h-[1.15rem] w-[1.15rem] rounded-full m-auto"></div>
    </div>
      </span>
    <input
        type="text"
        class="
        form-control
        block
        w-full
        mx-auto
        my-1
        pr-3
        pl-10
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
  </div>

</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "AddTodo",
  data() {
    return {
      todo: '',
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
    })
  }

}
</script>

<style scoped>

</style>
