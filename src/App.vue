<script>

import Main from "./pages/AppHome.vue";
import Header from "./components/Header.vue";
import {RouterView} from "vue-router";
import axios from "axios";
export default {
  name: "App",
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
        projects: "api/projects"
      }
    }
  },
  methods : {
    getProject() {
      axios.get(this.baseURL + this.apiURL.projects)
          .then((response)=> {
            // response
            if (response.data.success){
              this.projects = response.data.results.data;
            } else {
              this.$router.push({name: 'not-found'})
            }
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
<Header />
  <RouterView/>
</template>

<style scoped lang="scss">

</style>