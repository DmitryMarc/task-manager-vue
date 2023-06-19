import { getTasksFromLocalStorage } from '@/helpers/getTasksFromLocalStorage';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const {tasks, idCounter} = getTasksFromLocalStorage();

const store = new Vuex.Store({
    state: {
        tasks: tasks,
        idCounter: idCounter
    },
    mutations: {
        ADD_TASK(state, payload){
            const newTask = {
                id: state.idCounter,
                text: payload
            }
            state.tasks.push(newTask);
            state.idCounter = (+state.idCounter + 1).toString();
        },
        DELETE_TASK(state, payload){
            state.tasks = state.tasks.filter(item => item.id !== payload);
        },
        EDIT_TASK(state, payload){
            let found = state.tasks.find(item => item.id === payload.id);
            found.text = payload.text;
        }
    },
    getters: {
        getTasks: (state) => {
            return {
                tasks: state.tasks,
                idCounter: state.idCounter
            }
        }
    }
})

export default store;