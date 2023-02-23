<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style scoped>
button {
  margin: 10px 0;
  background: none;
  padding: 10px 20px;
  border-radius: 3px;
  color: rgb(0, 0, 0);
  font-size: 14px;
  border: 1px solid rgb(114, 114, 114);
  cursor: pointer;
  align-self: flex-end;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

button:hover {
  border: 1px solid rgb(114, 0, 0);
  color: white;
  background-color: rgb(114, 0, 0);
}
</style>
