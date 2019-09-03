<template>
  <v-app-bar app color dense class="social-toolbar">
    <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

    <v-toolbar-title class="logo-text" @click="redirect('/')">Hlu Mal</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon @click="redirect('/')">
      <v-icon>mdi-home-outline</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-account-outline</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-heart-outline</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-telegram</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { utils } from "../mixins/functions";

export default {
  mixins: [utils]
};
</script>

<style lang="scss">
$main-color: linear-gradient(45deg, #1dc8cd 0%, #55fabe 100%);
.logo-text {
  font-family: "Lobster", cursive;
  background: black;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
}
.social-toolbar {
  .v-toolbar__content {
    margin: 0 6rem;
  }
}
</style>
