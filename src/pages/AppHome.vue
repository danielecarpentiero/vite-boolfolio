<script>

import axios from "axios";

export default {
  name: "AppHome",
  data() {
    return {
      projects: [],
      baseURL : "http://127.0.0.1:8000/",
      apiURL : {
        projects: "api/projects/"
      }
    }
  },
  methods: {
    getProjects() {
      // console.log("Projects:", this.projects);
      // ottenere  tutti i progetti
      axios.get(this.baseURL + this.apiURL.projects)
          .then((response)=> {
            this.projects = response.data.results.data
          })
          .catch(function (error){
            console.log(error);
          })
    }
  },
  created() {
    this.getProjects();
  }
};
</script>

<template>
  <div class="container">
    <h1 class="text-center py-3">My Projects</h1>
    <ul class="row list-unstyled">
      <li class="col col-md-4 g-2" v-for="(project, index) in projects" :key="index">
        <RouterLink :to="{name: 'project', params: { slug: project.slug }}">
         {{project.title}}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">

</style>
