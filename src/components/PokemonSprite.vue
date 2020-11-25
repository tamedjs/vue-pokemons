<template>
  <v-col :cols="6" :lg="3" :md="3" :sm="6">
    <v-card>
      <v-img
        :src="image"
        class="white--text align-end"
        height="200px"
        :contain="true"
      ></v-img>
      <v-card-title
        class="image-title capitalize"
        v-text="spriteName(name)"
      ></v-card-title>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "PokemonSprites",
  props: {
    src: [String, Object],
    name: String,
  },
  mounted() {
    this.image = typeof this.src === 'string'? this.src : "https://cdn.pixabay.com/photo/2016/07/23/13/18/pokemon-1536847_960_720.png";
  },
  data() {
    return {
      image:""
    };
  },
  methods: {
    spriteName($sprite) {
      return $sprite.replace(/_/g, " ");
    },
  },
};
</script>

<style scoped></style>
