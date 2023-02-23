<template>
  <input type="text" :value="modelValue" @input="updateInput" />
</template>

<script>
export default {
  name: "my-input",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
input {
  padding: 10px 20px;
  border-radius: 5px;
  margin: 10px;
  border: 1px solid rgb(114, 114, 114);
  width: 95%;
}
</style>
