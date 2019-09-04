<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm5 md5 offset-xs0 offset-lg2>
        <Post />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// eslint-disable-next-line import/no-unresolved
import Post from '../components/Post.vue';

export default {
  components: {
    Post,
  },
};
</script>
