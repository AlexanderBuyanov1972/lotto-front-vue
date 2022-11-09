<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg bg-dark justify-content-center">
      <nav-button
        v-for="button in buttons"
        :key="button.name"
        @click="clickButton(button.name)"
        >{{ button.name }}</nav-button
      >
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      buttons: [
        { name: "Создать базу" },
        { name: "Получить базу" },
        { name: "Редактировать базу" },
        { name: "Добавить запись в базу" },
        { name: "Удалить запись из базы" },
        { name: "Переиндексировать базу" },
        { name: "Заблокировать базу" },
        { name: "Сохранить базу" },
        { name: "Удалить базу" },
      ],
    };
  },
  methods: {
    clickButton(text) {
      if (text == "Получить базу") console.log("Получить базу");
    },
  },
};
</script>
<style scoped></style>
