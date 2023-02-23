<template>
  <select :value="modelValue" @change="changeOption">
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "my-select",
  props: {
    modelValue: {
      type: String,
      required: false,
    },
    options: {
      type: Array,
    },
  },
  methods: {
    changeOption(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
select {
  font-family: nyt-franklin, helvetica, arial, sans-serif;
  margin: 10px;
  background: none;
  padding: 10px 15px;
  border-radius: 5px;
  color: rgb(0, 0, 0);
  font-size: 14px;
  border: 2px solid rgb(114, 114, 114);
  cursor: pointer;
  align-self: flex-end;
}
option {
  width: 100%;
}
select:hover {
  background-color: rgb(213, 213, 213);
}
</style>
