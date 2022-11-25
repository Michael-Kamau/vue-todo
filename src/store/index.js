import {createApp} from 'vue'
import {createStore} from 'vuex'
import todos from "./modules/todos.js";

// Create a new store instance.
const store = createStore({
    state() {
        return {
            darkTheme:false
        }
    },
    getters: {
        darkThemeEnabled: (state) => state.darkTheme
    },
    mutations: {
        toggleTheme(state) {
            state.darkTheme = !state.darkTheme
        },
    },
    actions:{
        toggleTheme({commit}) {
            commit('toggleTheme');
        },
    },
    modules:{
        todos
    }
})

export default store
