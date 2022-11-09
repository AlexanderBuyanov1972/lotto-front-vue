<template>
  <div class="container main">
    <h2 class="text">Data Base</h2>
    <hr />
    <h1 v-if="isDataBaseLoading">Loading...</h1>
    <base-list v-else :lines="database" :edit="edit" />
  </div>
</template>
<script>
import BaseList from "@/components/BaseList";
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  components: { BaseList },
  data() {
    return {
      edit: true,
    };
  },
  methods: {
    ...mapActions({
      fetchDataBase: "database/fetchDataBase",
    }),
  },
  computed: {
    ...mapState({
      database: (state) => state.database.database,
      isDataBaseLoading: (state) => state.database.isDataBaseLoading,
    }),
    ...mapGetters({
      indexDataBase: "database/indexDataBase",
    }),
  },
  mounted() {
    this.fetchDataBase();
  },
};
</script>
<style scoped>
.main {
  background: lightgray;
}
.text {
  text-align: center;
}
</style>
