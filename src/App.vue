<template>
  <v-app>
    <nav-drawer v-if="$route.path != '/login'" />
    <nav-bar v-if="$route.path != '/login'" />

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
import NavDrawer from "./components/NavDrawer";

export default {
  name: "App",
  components: {
    "nav-bar": NavBar,
    "nav-drawer": NavDrawer
  },
  data: () => ({
    //
  })
};
</script>
