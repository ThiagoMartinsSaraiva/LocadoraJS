import { createRouter, createWebHistory } from "vue-router";
import store from "@/store"
import Home from "@/views/Home"
import Login from "@/views/Login"
import MovieForm from "@/views/MovieForm"
import MoviesList from "@/views/MoviesList"

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/movies",
    name: "movies",
    component: MoviesList,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/Movie/:id?",
    name: "movie",
    component: MovieForm,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      return next()
    }
    return next('/login')
  } else {
    return next()
  }
})

export default router;
