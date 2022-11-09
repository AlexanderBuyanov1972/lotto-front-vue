import base from "@/help/base";
// import axios from "axios";

export default {
  state: () => ({
    database: [],
    isDataBaseLoading: false,
  }),
  getters: {
    indexDataBase(state) {
      return [...state.database].sort((line1, line2) => {
        return line1.num0 - line2.num0;
      });
    },
  },
  mutations: {
    setDataBase(state, value) {
      state.database = value;
    },
    setIsDataBaseLoading(state, bool) {
      state.isDataBaseLoading = bool;
    },
  },
  actions: {
    async fetchDataBase({ commit }) {
      try {
        commit("setIsDataBaseLoading", true);
        // const response = await axios.get("https://localhost:8090/getbase");
        setTimeout(() => {
          commit("setDataBase", [...base]);
        }, 2000);
      } catch (error) {
        console.log("Error while loading database");
      } finally {
        commit("setIsDataBaseLoading", false);
      }
    },
  },
  namespaced: true,
};
