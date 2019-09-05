<template>
<v-app-bar app color dense class="social-toolbar">
  <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

  <v-btn icon @click="$store.dispatch('onOff')">
    <v-icon>mdi-view-headline</v-icon>
  </v-btn>

  <v-toolbar-title v-if="!$vuetify.breakpoint.xs" class="logo-text" @click="redirect('/')">Hluu Mal</v-toolbar-title>

  <v-spacer v-if="!$vuetify.breakpoint.xs"></v-spacer>


  <v-btn icon @click="focusIcon('/')">
    <v-icon :color="currentPage == '/' ? 'primary': ''">mdi-home-outline</v-icon>
  </v-btn>
  <v-btn icon @click="focusIcon('/profile')">
    <v-icon :color="currentPage == '/profile' ? 'primary': ''">mdi-account-outline</v-icon>
  </v-btn>
  <v-btn icon @click="focusIcon('/activity')">
    <v-icon :color="currentPage == '/activity' ? 'primary': ''">mdi-heart-outline</v-icon>
  </v-btn>

  <v-btn icon @click="focusIcon('/messages')">
    <v-icon :color="currentPage == '/messages' ? 'primary': ''">mdi-telegram</v-icon>
  </v-btn>


</v-app-bar>
</template>

<script>
import {
  utils
} from '../mixins/functions';

export default {
  mixins: [utils],
  data: () => ({
    currentPage: '/',
  }),
  methods: {
    focusIcon(path) {
      this.currentPage = path;
      this.redirect(path);
    }
  },
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

@media all and (max-width: 414px) {
    .logo-text {
        display: hidden;
    }
    .social-toolbar {
        .v-toolbar__content {
            margin: 0!important !important;
            display: flex;
            justify-content: space-around;
        }
    }
}
.social-toolbar {
    .v-toolbar__content {
        margin: 0 6rem;
    }
}
</style>
