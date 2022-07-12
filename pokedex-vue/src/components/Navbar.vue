<template>
  <v-container>
    <v-row>
      <v-container>
        <v-img
          :src="require('../assets/pokedex.png')"
          class="my-3"
          contain
          height="200"
        />  
      </v-container>
    </v-row>

  </v-container>
</template>

<script>
export default {
  name: "Navbar",
  props: [""]
};
</script>