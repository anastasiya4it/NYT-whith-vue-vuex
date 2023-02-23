<template>
  <h3 v-bind:style="{ color: randomColors }">
    <slot> </slot>
  </h3>
</template>

<script>
export default {
  name: "my-h3",

  computed: {
    randomColors() {
      return "#" + Math.floor(Math.random() * 16777215).toString(16);
    },
  },
};
</script>

<style scoped>
h3 {
  padding: 5px;
}
</style>
