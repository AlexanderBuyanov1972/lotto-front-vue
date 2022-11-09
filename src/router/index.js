import { createRouter, createWebHistory } from "vue-router";
import BasePage from "@/pages/BasePage";
import OptionsPage from "@/pages/OptionsPage";

const routes = [
  { path: "/", component: BasePage },
  { path: "/second", component: OptionsPage },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
