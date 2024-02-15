<script>

import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<template>
<Header />
  <Main />
  <Footer />
</template>

<style scoped lang="scss">

</style>