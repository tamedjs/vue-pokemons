<template>
  <v-tab-item :value="'tab-game-indices'">
    <v-card flat>
      <v-card-title> Game index of {{ name }} </v-card-title>
      <blockquote class="blockquote">
        <div>
          <v-data-table
            dense
            :headers="headers"
            :items="games"
            :items-per-page="8"
            class="elevation-1"
          >
            <template v-slot:body="{ items }">
              <tbody>
                <tr v-for="(item, index) in items" :key="index">
                  <td>
                    <b>{{ item.game_index }}</b>
                  </td>
                  <td class="capitalize">
                    {{ item.version.name }}
                  </td>
                </tr>
              </tbody>
            </template>
          </v-data-table>
        </div>
      </blockquote>
    </v-card>
  </v-tab-item>
</template>

<script>
export default {
  name: "PokemonGameIndex",
  props: {
    name: {
      type: String,
    },
    games: {
      type: Array,
    },
  },
  data: function () {
    return {
      search: null,
      headers: [
        {
          text: "Game Index",
          align: "start",
          value: "game_index",
        },
        {
          text: "Game Name",
          align: "start",
          value: "version.name",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
