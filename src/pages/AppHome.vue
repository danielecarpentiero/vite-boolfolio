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
    <h1 class="text-center py-3">My Projects</h1>
    <ul class="row list-unstyled">
      <li class="col col-md-4 g-2" v-for="(project, index) in projects" :key="index">
        <router-link :to="{name: 'project', params: { slug: project.slug }}">
         {{project.name}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">

</style>
