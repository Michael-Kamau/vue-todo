import {createApp} from 'vue'
import {createStore} from 'vuex'
import todos from "./modules/todos.js";

// Create a new store instance.
const store = createStore({
    state() {
        return {
        }
    },
    mutations: {},

    modules:{
        todos
    }
})

export default store
