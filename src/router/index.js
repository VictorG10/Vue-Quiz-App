import QuizesView from "@/views/QuizesView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "quizes", component: QuizesView },
    {
      path: "/quiz/:id",
      name: "quiz",
      component: () => import("@/views/QuizView.vue"),
    },
  ],
});

export default router;
