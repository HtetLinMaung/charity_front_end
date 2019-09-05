<template>
  <v-navigation-drawer app v-model="$store.state.drawer">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">Hluu Kya Mal</v-list-item-title>
        <v-list-item-subtitle>Tan Kya Mal</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item @click="listAction(item)" v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    items: [{
      icon: 'mdi-logout',
      title: "Logout"
    }],
  }),
  methods: {
    listAction(item) {
      if (item.title.match(/logout/i)) {
        localStorage.setItem('token', '');
        this.$store.dispatch('setDrawer', false);
        this.$router.push('/login');
      }
    }
  }
};
</script>

<style lang="scss">
</style>
