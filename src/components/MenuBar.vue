<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg bg-light flex-column">
      <menu-button v-for="button in buttons" :key="button.name">{{
        button.name
      }}</menu-button>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      buttons: [
        { name: "Генерировать уникальные варианты" },
        { name: "Генерировать варианты случайным образом" },
        { name: "Генерировать варианты 0/6" },
        { name: "Генерировать варианты 1/5" },
        { name: "Генерировать варианты 2/4" },
        { name: "Генерировать варианты 3/3" },
        { name: "button 6" },
        { name: "button 7" },
        { name: "button 8" },
      ],
    };
  },
};
</script>
<style scoped></style>
