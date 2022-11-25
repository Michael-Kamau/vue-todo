export default {
    namespaced: true,
    state: {
        todos: []
    },
    getters: {
        todos: (state) => {
            return (status) => {
                switch (status) {
                    case 'complete':
                        return state.todos.filter(item => item.complete === true)
                    case 'active':
                        return state.todos.filter(item => item.complete === false)
                    default:
                        return state.todos

                }
            }

        }
    },
    mutations: {
        addTodo(state, todo) {
            state.todos = [...state.todos, ...todo]
        },
        markComplete(state, title) {
            state.todos = state.todos.map((item) => {
                if (title === item.title) {
                    item.complete = true
                    return item
                } else {
                    return item
                }
            })

        },
        deleteTodo(state, title) {
            state.todos = state.todos.filter(todo => todo.title !== title)
        },

        clearCompleted(state) {
            state.todos = state.todos.filter(todo => !todo.complete)
        }
    },
    actions: {
        addTodo({commit}, todo) {

            commit('addTodo', todo);
        },

        markComplete({commit}, title) {
            commit('markComplete', title);
        },

        deleteTodo({commit}, title) {
            commit('deleteTodo', title);
        },
        clearCompleted({commit}) {
            commit('clearCompleted');
        }
    }
}
