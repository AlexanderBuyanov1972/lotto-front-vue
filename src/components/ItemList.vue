<template>
  <div class="line-item">
    <one-item class="number" :edit="edit" :num="line.num0" />
    <one-item class="option" :edit="edit" :num="line.num1" />
    <one-item class="option" :edit="edit" :num="line.num2" />
    <one-item class="option" :edit="edit" :num="line.num3" />
    <one-item class="option" :edit="edit" :num="line.num4" />
    <one-item class="option" :edit="edit" :num="line.num5" />
    <one-item class="option" :edit="edit" :num="line.num6" />
    <one-item class="add" :edit="edit" :num="line.num7" />
  </div>
</template>
<script>
import OneItem from "./OneItem.vue";
export default {
  components: {
    OneItem,
  },
  props: {
    line: Object,
    edit: Boolean,
  },
};
</script>
<style scoped>
.line-item {
  display: flex;
  justify-self: center;
  margin: auto;
}
.number {
  border-color: black;
}
.option {
  border-color: red;
}
.add {
  border-color: green;
}
</style>
