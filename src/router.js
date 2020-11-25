import Router from "vue-router";

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "index",
      redirect: {
        name: "pokemons",
      },
    },
    {
      path: "/pokemons",
      name: "pokemons",
      component: () => import("./components/Pokemons"),
      meta: {
        title: "Pokemons",
      },
    },
    {
      path: "/detail/:id",
      name: "pokemon-detail",
      component: () => import("./components/PokemonDetail"),
      meta: {
        title: "Información del pokemon",
      },
    },
    {
      path: "/404",
      name: "404",
      component: () => import("./components/404"),
      meta: {
        title: "404",
      },
    },
    {
      path: "/*",
      name: "404-redirect",
      redirect: {
        name: "404",
      },
    },
  ],
});
router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);
  if (nearestWithTitle) document.title = `${nearestWithTitle.meta.title}`;
  next();
});

export default router;
