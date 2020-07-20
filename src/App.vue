<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-btn class="d-flex align-center" :to="{ name: 'pokemons' }" text>
        Pokemon
      </v-btn>
      <v-spacer></v-spacer>

      <v-btn href="https://pokeapi.co/" target="_blank" text>
        <span class="mr-2">
          PokeAPI
        </span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <router-view :key="$route.fullPath"></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
    // eslint-disable-next-line
  },
};
</script>
