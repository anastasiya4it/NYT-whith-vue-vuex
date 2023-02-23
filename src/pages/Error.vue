<template>
  <div class="error">
    <h3>Error. Not Found.</h3>
    <router-link to="/">Try again.</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.error {
  margin-top: 30px;
  font-size: 30px;
  display: flex;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  font-weight: 900;
}

a {
  color: rgba(114, 114, 114);
  text-decoration-line: none;
}
a:hover {
  color: rgb(114, 0, 0);
}
</style>
