<script>
import Header from "../components/Header.vue";
import Main from "./AppHome.vue";
import {RouterView} from "vue-router";
import axios from "axios";

export default {
  name: "Project",
  props: ["project"],
  components: {
    Header,
    Main,
    RouterView
  },
  data(){
    return {
      projects : [],
      baseURL : "http://127.0.0.1:8000/",
      apiURL : {
        projects: "api/projects/"
      }
    }
  },
  methods : {
    getProject() {
      axios.get(this.baseURL + this.apiURL.projects + this.$route.params.slug)
          .then((response)=> {
            // response
            this.projects = response.data.results.data;
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });
    }
  },
  created() {
    this.getProject();
  }
}
</script>

<template>
  <div class="card" >
    <div class="card-body">
      <h5 class="card-title">{{project.name}}</h5>
      <p class="card-text">{{project.description}}</p>
      <a href="#" class="btn btn-primary">Info</a>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>