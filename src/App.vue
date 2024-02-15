<script>

import Footer from "./components/Footer.vue";
import Main from "./components/Main.vue";
import Header from "./components/Header.vue";
import axios from "axios";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    Main
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
    search() {
      axios.get(this.baseURL + this.apiURL.projects)
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
    this.search();
  }
}
</script>

<template>
<Header />
  <Main :projects="projects"/>
  <Footer />
</template>

<style scoped lang="scss">

</style>