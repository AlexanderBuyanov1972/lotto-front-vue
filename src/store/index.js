import { createStore } from "vuex";
import database from "./DataBase";

export default createStore({
  modules: {
    database,
  },
});
