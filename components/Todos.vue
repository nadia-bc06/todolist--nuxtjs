<template>
  <v-container class="todo-list-container">
    <h1 class="todo-heading">My Todo List</h1>
    <v-row class="justify-center">
      <v-col cols="6">
        <!-- input task -->
        <todo-input></todo-input>

        <!-- task list -->
        <v-list class="task-list">
          <v-list-item
            class="task-item"
            v-for="(task, index) in filteredTasks"
            :key="task.id"
          >
            <todo-item :task="task" :index="index"></todo-item>
          </v-list-item>
        </v-list>
        <!-- filter -->
        <todo-filter></todo-filter>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { computed, defineComponent, useStore } from '@nuxtjs/composition-api'
import TodoItem from './TodoItem.vue'
import TodoInput from './TodoInput.vue'
import TodoFilter from './TodoFilter.vue'

export default defineComponent({
  components: {
    TodoItem,
    TodoInput,
    TodoFilter,
  },
  setup() {
    const store = useStore()

    const filteredTasks = computed(function () {
      return store.getters.filteredTasks
    })
    return {
      filteredTasks,
    }
  },
})
</script>

<style lang="scss" scoped>
.todo-list-container {
  margin-top: 140px;
  .todo-heading {
    text-align: center;
    margin-bottom: 40px;
  }
}

.task-item {
  display: flex;
  justify-content: space-between;
}
</style>
