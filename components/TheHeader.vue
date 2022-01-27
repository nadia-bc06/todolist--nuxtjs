<template>
  <v-app-bar
    absolute
    color="#6A76AB"
    dark
    src="https://picsum.photos/1920/1080?random"
  >
    <template v-slot:img="{ props }">
      <v-img
        v-bind="props"
        gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
      ></v-img>
    </template>

    <div class="d-flex justify-space-between" style="width: 100%">
      <v-app-bar-title>{{ title }}</v-app-bar-title>
      <v-btn class="error" @click="logOut">Log Out</v-btn>
    </div>

    <template v-slot:extension>
      <v-tabs align-with-title>
        <v-tab
          v-for="menuItem in menuItems"
          :key="menuItem.name"
          :to="menuItem.path"
          >{{ menuItem.name }}</v-tab
        >
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
import { defineComponent, reactive, useStore, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'TheHeader',
  setup() {
    const store = useStore()
    const title = ref('Welcome to my app')
    const menuItems = reactive([
      {
        name: 'Todos',
        path: '/todos',
      },
      {
        name: 'User',
        path: '/user',
      },
    ])

    const logOut = () => {
      store.dispatch('logout')
    }
    return {
      title,
      menuItems,
      logOut,
    }
  },
})
</script>

<style lang="scss" scoped>
::v-deep .v-tab {
  color: pink !important;
}

::v-deep .v-tab.v-tab--active {
  color: rgb(252, 71, 170) !important;
}
</style>
