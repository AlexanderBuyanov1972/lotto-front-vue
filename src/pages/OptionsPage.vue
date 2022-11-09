<template>
  <div class="container main">
    <h2 class="text">Data Options</h2>
    <hr />
    <base-list :lines="lines" />
  </div>
</template>
<script>
import BaseList from "@/components/BaseList";
import base from "@/help/base";
export default {
  components: { BaseList },
  data() {
    return {
      lines: base,
    };
  },
};
</script>
<style scoped>
.main {
  background: lightgoldenrodyellow;
}
.text {
  text-align: center;
}
</style>
