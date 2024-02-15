<script>
export default {
  name: "Project",
  props: ["project"]
}
</script>

<template>
  <div class="card" >
    <div class="card-body">
      <h5 class="card-title">{{project.title}}</h5>
      <p class="card-text">{{project.description}}</p>
      <a href="#" class="btn btn-primary">Info</a>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>