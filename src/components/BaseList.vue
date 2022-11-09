<template>
  <div class="container list">
    <transition-group name="base-list">
      <item-list
        v-for="item in lines"
        :key="item.num0"
        :line="item"
        :edit="edit"
      />
    </transition-group>
  </div>
</template>
<script>
import ItemList from "./ItemList.vue";
export default {
  components: { ItemList },
  props: {
    lines: {
      type: Array,
      required: true,
    },
    edit: Boolean,
  },
};
</script>
<style scoped>
.list {
  height: 800px;
  overflow: auto;
}
</style>
