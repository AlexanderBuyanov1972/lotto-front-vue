<template>
  <button class="btn"><slot></slot></button>
</template>
<script>
export default {
  name: "menu-button",
};
</script>
<style scoped>
.btn {
  padding: 10px;
  margin: 10px;
  background: none;
  color: red;
  border: 1px solid teal;
  min-width: 180px;
}
</style>
