<template>
  <v-row justify="center">
    <v-container>
      <BackButton></BackButton>
      <v-sheet v-if="busy" :color="`grey lighten-4`" class="px-3 pt-3 pb-3">
        <v-skeleton-loader class="mx-auto" type="table"></v-skeleton-loader>
      </v-sheet>
      <div v-else>
        <v-container fluid>
          <v-row dense>
            <v-col :lg="3" :md="3" :sm="12">
              <PokemonData :data="pokemon"></PokemonData>
            </v-col>
            <v-col :lg="9" :md="9" :sm="12">
              <v-tabs
                v-model="tab"
                background-color="primary"
                centered
                dark
                icons-and-text
              >
                <v-tabs-slider></v-tabs-slider>

                <v-tab href="#tab-sprites">
                  Sprites
                  <v-icon>mdi-folder-multiple-image</v-icon>
                </v-tab>

                <v-tab href="#tab-moves">
                  Moves
                  <v-icon>mdi-thumb-up</v-icon>
                </v-tab>

                <v-tab href="#tab-game-indices">
                  Game Indices
                  <v-icon>mdi-format-list-bulleted-square</v-icon>
                </v-tab>

                <v-tab href="#tab-stats">
                  Stats
                  <v-icon>mdi-view-list</v-icon>
                </v-tab>
              </v-tabs>
              <v-tabs-items v-model="tab" fixed-tabs>
                <PokemonSprites
                  :name="pokemon.name"
                  :sprites="pokemon.sprites"
                ></PokemonSprites>

                <PokemonMoves
                  :name="pokemon.name"
                  :moves="moves"
                  :on-search="onSearchMoves"
                ></PokemonMoves>

                <PokemonGameIndex
                  :name="pokemon.name"
                  :games="pokemon.game_indices"
                ></PokemonGameIndex>

                <PokemonStats
                  :name="pokemon.name"
                  :games="pokemon.stats"
                ></PokemonStats>
              </v-tabs-items>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-container>
  </v-row>
</template>

<script>
import BackButton from "@/components/BackButton";
import PokemonData from "@/components/PokemonData";
import PokemonSprites from "@/components/PokemonSprites";
import PokemonMoves from "@/components/PokemonMoves";
import PokemonGameIndex from "@/components/PokemonGameIndex";
import PokemonStats from "@/components/PokemonStats";
export default {
  name: "PokemonDetail",
  components: {
    BackButton,
    PokemonData,
    PokemonSprites,
    PokemonMoves,
    PokemonGameIndex,
    PokemonStats,
  },
  created() {
    this.busy = true;
    this.id = this.$route.params.id;
    this.getData();
  },
  data() {
    return {
      busy: false,
      id: 0,
      pokemon: {},
      tab: null,
      searchMove: "",
    };
  },
  computed: {
    moves() {
      return this.pokemon.moves.filter((move) => {
        return (
          move.move.name.toLowerCase().indexOf(this.searchMove.toLowerCase()) >=
          0
        );
      });
    },
  },
  methods: {
    back() {
      history.go(-1);
    },
    getData() {
      this.$api
        .pokemon(this.id)
        .then((response) => {
          this.pokemon = response.data;
          setTimeout(() => {
            this.busy = false;
          }, 1000);
        })
        .catch();
    },
    onSearchMoves(e) {
      this.searchMove = e;
    },
  },
};
</script>

<style scoped>
.v-card__title {
  text-transform: capitalize;
}
</style>
