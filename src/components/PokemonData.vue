<template>
  <v-card>
    <v-img
      :src="data.sprites.front_default"
      class="white--text align-end"
      height="200px"
      :contain="true"
    >
    </v-img>
    <v-card-title v-text="data.name"></v-card-title>
    <v-card-subtitle class="pb-0">
      <div><b>Weight: </b>{{ data.weight }}</div>
      <div><b>Height: </b>{{ data.height }}</div>
      <div><b>Order: </b>{{ data.order }}</div>
      <div><b>Base Experience: </b>{{ data.base_experience }}</div>
    </v-card-subtitle>
    <v-chip
      class="ma-2"
      v-text="type.type.name"
      v-for="(type, index) in data.types"
      :key="index"
    ></v-chip>
  </v-card>
</template>

<script>
export default {
  name: "PokemonData",
  props: {
    data: Object,
  },
};
</script>

<style scoped>
.v-chip {
  text-transform: capitalize;
}
.v-card__title {
  text-transform: capitalize;
}
.v-image__image--cover {
  background-size: contain;
}
</style>
