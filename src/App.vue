<script>

import Main from "./pages/AppHome.vue";
import Header from "./components/Header.vue";
import {RouterView} from "vue-router";

export default {
  name: "App",
  components: {
    Header,
    Main,
    RouterView
  },
}
</script>

<template>
<Header />
  <RouterView/>
</template>

<style scoped lang="scss">

</style>