<script>
import SingleProject from "./SingleProject.vue";

export default {
  name: "Main",
  components: {
    SingleProject
  },
  props: ["projects"]
};
</script>

<template>
  <div class="container">
    <h1>My Projects</h1>
    <ul>
      <li class="list-unstyled" v-for="project in projects">
        <SingleProject :project="project" />
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">

</style>
