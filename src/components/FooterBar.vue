<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg bg-dark justify-content-center">
      <nav-button v-for="button in buttons" :key="button.name">{{
        button.name
      }}</nav-button>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      buttons: [
        { name: "Получить варианты" },
        { name: "Редактировать варианты" },
        { name: "Сохранить варианты" },
        { name: "button 3" },
        { name: "button 4" },
        { name: "button 5" },
        { name: "button 6" },
        { name: "button 7" },
      ],
    };
  },
};
</script>
<style scoped></style>
