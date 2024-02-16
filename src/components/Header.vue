<script>
export default {
  name: "Header"
}
</script>

<template>
<header>
  <div class="container d-flex justify-content-between align-items-center">
    <div class="logo">Logo</div>
    <nav>
      <ul class="d-flex list-unstyled">
        <li class="px-3">Link</li>
        <li class="px-3">Link</li>
        <li class="px-3">Link</li>
      </ul>
    </nav>
  </div>
</header>
</template>

<style scoped lang="scss">
  header{
    background-color: lightcyan;
  }
</style>