<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm5 md5 offset-xs0 offset-lg2>
        <CreatePost />
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12 sm5 md5 offset-xs0 offset-lg2>
        <Post />
      </v-flex>
    </v-layout>
    <v-layout>
      <Messages />
    </v-layout>
  </v-container>
</template>

<script>
// eslint-disable-next-line import/no-unresolved
import Post from '../components/Post.vue';
import CreatePost from '@/views/CreatePost.vue';
import Messages from '@/views/Messages.vue';

export default {
  components: {
    Post,
    CreatePost,
    Messages
  },
};
</script>
