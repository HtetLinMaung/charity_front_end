<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm5 md5 offset-xs0 offset-lg1>
        <CreatePost />
      </v-flex>
    </v-layout>
    <Sidebar />
    <v-layout>
      <v-flex xs12 sm5 md5 offset-xs0 offset-lg1>
        <Posts />
      </v-flex>
    </v-layout>
    <v-layout>
      <Messages />
    </v-layout>
  </v-container>
</template>

<script>
// eslint-disable-next-line import/no-unresolved
import Posts from '@/views/Posts.vue';
import CreatePost from '@/views/CreatePost.vue';
import Messages from '@/views/Messages.vue';
import Sidebar from '@/views/Sidebar.vue';

export default {
  components: {
    Posts,
    CreatePost,
    Messages,
    Sidebar,
  },
};
</script>
