<template>
  <div class="item">
    <input v-if="edit" type="text" v-model="value" />
    <div v-else>{{ value }}</div>
  </div>
</template>
<script>
export default {
  props: {
    edit: {
      type: Boolean,
      required: true,
    },
    num: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      value: this.num,
    };
  },
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.item {
  width: 53px;
  height: 53px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px;
  font-size: 22px;
  border: 2px solid;
  background-color: white;
}
input {
  width: 40px;
  height: 30px;
  background: white;
  border: 1px solid white;
  text-align: center;
  padding: 0;
  margin: 0;
}
</style>
