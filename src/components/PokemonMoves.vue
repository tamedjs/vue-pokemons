<template>
  <v-tab-item :value="'tab-moves'">
    <v-card flat>
      <v-card-title> Moves of {{ name }} </v-card-title>
      <blockquote class="blockquote">
        <v-row>
          <v-col :cols="12">
            <v-text-field
              label="Move"
              placeholder="Search"
              outlined
              v-model="search"
              @keyup="onSearchHandler"
            ></v-text-field>
          </v-col>
          <v-col
            :lg="3"
            :md="3"
            :sm="6"
            :xs="6"
            v-for="(move, index) in moves"
            :key="index"
          >
            {{ move.move.name }}
          </v-col>
        </v-row>
      </blockquote>
    </v-card>
  </v-tab-item>
</template>

<script>
export default {
  name: "PokemonMoves",
  props: {
    name: {
      type: String,
    },
    moves: {
      type: Array,
    },
    onSearch: {
      type: Function,
    },
  },
  data() {
    return {
      search: "",
    };
  },
  methods: {
    onSearchHandler() {
      this.onSearch(this.search);
    },
  },
};
</script>

<style scoped></style>
