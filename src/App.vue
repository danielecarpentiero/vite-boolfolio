<script>
import header from "./components/Header.vue";
import main from "./components/Main.vue";
import footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
export default {
  name: "App",
  components: {
    header,
    main,
    footer
  }
}
console.log(Header);
console.log(Main);
console.log(footer);
</script>

<template>
<header />
  <main />
  <footer />
</template>

<style scoped lang="scss">

</style>