<template>
  <button class="btn"><slot></slot></button>
</template>
<script>
export default {
  name: "nav-button",
};
</script>
<style scoped>
.btn {
  padding: 10px;
  margin: 5px;
  background: none;
  color: red;
  border: 1px solid teal;
  /* align-self: flex-end; */
  min-width: 100px;
  /* text-align: left; */
}
</style>
