<template>
  <div class="post mt-5">
    <v-card
      class="mx-auto card"
      :flat="flat"
      :loading="loading"
      :outlined="outlined"
      :elevation="elevation"
      :raised="raised"
      :width="width"
      :height="height"
    >
      <v-layout row>
        <v-avatar class="mt-3 ml-5 mb-3" size="48">
          <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
        </v-avatar>
        <v-card-title style="font-size:15px">Nezuko_nezuko</v-card-title>
      </v-layout>

      <v-img v-if="media" max-height="600" :height="height" :src="images.profile"></v-img>
      <v-card-title v-else>I'm a title</v-card-title>

      <v-card-text>I'm Nezuko</v-card-text>
      <v-card-actions v-if="actions">
        <v-btn icon>
          <v-icon>mdi-heart-outline</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-comment-processing-outline</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-tag-outline</v-icon>
        </v-btn>
        <div class="flex-grow-1"></div>
        <v-btn icon>
          <v-icon>mdi-bookmark-outline</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-share-variant</v-icon>
        </v-btn>
      </v-card-actions>

      <v-card-text>40,000 likes</v-card-text>
      <span class="grey--text ml-4">View all comments</span>
    </v-card>
  </div>
</template>
<script>
export default {
  data: () => ({
    flat: false,
    media: true,
    loading: false,
    actions: true,
    outlined: false,
    elevation: undefined,
    raised: true,
    width: 650,
    height: undefined,
    images: {
      // eslint-disable-next-line global-require
      profile: require('@/assets/I.jpeg'),
      // eslint-disable-next-line comma-dangle
    }
  }),
};
</script>
<style scoped>
.v-input__slider {
  width: 100%;
}
.card {
  border-radius: 10px;
}
</style>
