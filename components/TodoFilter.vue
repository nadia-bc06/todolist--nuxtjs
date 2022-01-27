<template>
  <div class="filter-btns">
    <v-btn
      :class="{ active: filterType === 'all' }"
      @click="changeFilterType('all')"
      >All</v-btn
    >
    <v-btn
      class="ml-2"
      :class="{ active: filterType === 'active' }"
      @click="changeFilterType('active')"
      >Active</v-btn
    >
    <v-btn
      class="ml-2"
      :class="{ active: filterType === 'done' }"
      @click="changeFilterType('done')"
      >Done</v-btn
    >
  </div>
</template>

<script>
import { computed , defineComponent, useStore} from "@nuxtjs/composition-api"

export default defineComponent({
  name: "TodoFilter",
  setup() {
    const store = useStore();
    const filterType = computed(function () {
      return store.state.filterType
    })

    function changeFilterType(type) {
      store.dispatch("changeFilterType", type)
    }

    return {
      filterType,
      changeFilterType,
    }
  },
})
</script>

<style lang="scss" scoped>
.filter-btns {
  float: left;
}
.active {
  background-color: salmon !important;
  color: white;
}
</style>
