// import Vue from "vue"
import { ref } from '@nuxtjs/composition-api'
import Vuex from 'vuex'
// import router from "@/router"

// Vue.use(Vuex)
// JSON.parse(localStorage.getItem("users")) ||
// user: JSON.parse(localStorage.getItem("user")),
// token: localStorage.getItem("token"),
const createStore = () => {
  return new Vuex.Store({
    state: {
      users:  [ {

      }],
      user: {
        
      },
      token:'123456',
      filterType: 'all',
      taskList: [
        {
          id: 1,
          title: 'An com',
          isEditing: false,
          isDone: true,
        },
        {
          id: 2,
          title: 'Hoc Vue',
          isEditing: false,
          isDone: false,
        },
      ],
    },
    mutations: {
      add_new_task(state, newTask) {
        state.taskList.unshift(newTask)
      },

      updateCheckStatus(state, { index, updatedStatus }) {
        state.taskList[index].isDone = updatedStatus
      },

      remove_task(state, index) {
        state.taskList.splice(index, 1)
      },
      update_task(state, data) {
        let index = state.taskList.findIndex((task) => task.id === data.id)
        state.taskList[index].title = data.title
        state.taskList[index].isDone = data.isDone
      },
      change_filter_type(state, type) {
        state.filterType = type
      },
    },
    actions: {
      updateCheckStatus({ commit }, { index, updatedStatus }) {
        commit('updateCheckStatus', { index, updatedStatus })
      },

      addNewTask({ commit }, newTask) {
        commit('add_new_task', newTask)
      },

      removeTask({ commit }, index) {
        commit('remove_task', index)
      },
      updateTask({ commit }, data) {
        commit('update_task', data)
      },
      changeFilterType({ commit }, type) {
        commit('change_filter_type', type)
      },
    },
    getters: {
      allTasks: (state) => state.taskList,
      filteredTasks(state) {
        if (state.filterType === 'all') {
          return state.taskList
        } else if (state.filterType === 'active') {
          return state.taskList.filter((task) => !task.isDone)
        } else if (state.filterType === 'done') {
          return state.taskList.filter((task) => task.isDone)
        }
        return state.taskList
      },
      token(state){
        if(process.client){
          return state.token
        }
      },
      user(state){
        if(process.client){
          return state.user
        }
      },
      users(state){
        if(process.client){
          return state.users
        }
      },
    },
  })
}

export default createStore

// export const store = new Vuex.Store({
//   state: {

  // },
  // getters: {

  // },
  // mutations: {
    // removeToken(state) {
    //   localStorage.removeItem("token")
    //   state.token = ""
    // },
    // addToken(state, payload) {
    //   localStorage.setItem("token", payload)
    //   state.token = localStorage.getItem("token")
    // },
    // setUser(state, payload) {
    //   localStorage.setItem("user", JSON.stringify(payload))
    //   state.user = JSON.parse(localStorage.getItem("user"))
    // },
    // addUser(state, payload) {
    //   let users = JSON.parse(localStorage.getItem("users")) || []
    //   users.push(payload)
    //   localStorage.setItem("users", JSON.stringify(users))
    // },
    // updateInfo(state, payload) {
    //   let users = state.users
    //   let index = users.findIndex((user) => user.id === payload.id)
    //   state.users[index].name = payload.name
    //   state.users[index].email = payload.email
    //   state.users[index].gender = payload.gender
    //   localStorage.setItem("user", JSON.stringify(payload))
    //   localStorage.setItem("users", JSON.stringify(users))
    // },
  // },
  // actions: {
    // updateInfo({ commit }, payload) {
    //   commit("updateInfo", payload)
    // },
    // logout({ commit }) {
    //   commit("removeToken")
    //   router.push("/login")
    // },
    // login({ commit }, { token, user }) {
    //   commit("addToken", token)
    //   commit("setUser", user)
    //   router.push("/todos")
    // },
    // register({ commit }, payload) {
    //   commit("addUser", payload)
    //   router.push("/login")
    // },
//   },
// })
