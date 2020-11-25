<template>
  <v-container class="text-center d-flex justify-center page__404">
    <div>
      <h1>404</h1>
      <span class="d-block">Sorry, that page can't be found</span>
      <v-btn color="primary" class="mt-1" :to="{ name: 'pokemons' }">
        <v-icon class="mr-2">mdi-home</v-icon>
        Go to Home
      </v-btn>
    </div>
    <div class="container__img__400">
      <v-img class="img-404" src="https://i.pinimg.com/originals/00/2d/57/002d5714c44f88a16c1f0bdfa97ca05e.jpg" />
      <small>
        Image from
        <a target="_blank" href="https://co.pinterest.com/pin/595671488204645078/">Pinterest</a>
      </small>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "404",
};
</script>

<style lang="scss">
.page__404 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  
  @media (max-width: 717px) {
    flex-direction: column-reverse;
    .container__img__400 {
      padding: 0px !important;
      padding-left: 24px !important;
    }
  }

  > div {
    width: 50%;
    &.container__img__400 {
      padding: 0px 60px 0 0px;
    }

    h1 {
      font-size: 7rem;
      font-weight: 400;
      margin: 0;
    }

    .img-404{
      max-width: 500px;
      margin: auto;
    }
  }
}
</style>
