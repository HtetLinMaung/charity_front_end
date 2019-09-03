<template>
  <div class="post mt-5 mb-10">
    <v-card
      class="mx-auto card"
      :flat="flat"
      :loading="loading"
      :outlined="outlined"
      :raised="raised"
      :width="width"
      :height="height"
    >
      <v-layout row>
        <v-avatar class="mt-3 ml-5 mb-3" size="48">
          <v-img :src="images.profile"></v-img>
        </v-avatar>
        <v-card-title style="font-size:15px">Nezuko_nezuko</v-card-title>
        <div class="flex-grow-1"></div>
        <v-btn icon class="mr-7 mt-5">
          <v-icon>mdi-dots-horizontal</v-icon>
        </v-btn>
      </v-layout>

      <v-img
        class="image-wrapper"
        v-if="media"
        max-height="550"
        :height="height"
        :src="images.profile"
      ></v-img>

      <v-card-text>I'm Nezuko</v-card-text>
      <v-card-actions v-if="actions" class="adjust">
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
      <v-card-text class="adjust">40,000 likes</v-card-text>
      <v-card-text
        class="grey--text adjust"
        style="font-size:12px;margin-bottom:-1rem;"
      >View all comments</v-card-text>

      <v-text-field
      solo
        class="custom ml-5 mr-5 "
        v-model="comment"
        clear-icon="mdi-close-circle"
        clearable
        append-outer-icon="mdi-send "
        @click:append-outer="sendMessage"
        placeholder="Add a comment..."
      ></v-text-field>
    </v-card>
  </div>
</template>
<script>
export default {
  data: () => ({
    comment: null,
    flat: false,
    media: true,
    loading: false,
    actions: true,
    outlined: false,
    raised: true,
    width: 500,
    height: undefined,
    images: {
      // eslint-disable-next-line global-require
      profile: require('@/assets/I.jpeg'),
      // eslint-disable-next-line comma-dangle
    }
  }),
  methods: {
    sendMessage() {
      this.resetIcon();
      this.clearMessage();
    },
    clearMessage() {
      this.message = '';
    },
  },
};
</script>
<style scoped>
.v-input__slider {
  width: 100%;
}
.v-input__control {
  -webkit-box-direction: normal !important;
}
.card {
  border-radius: 10px;
}
.adjust {
  padding-top: 0% !important;
  margin-top: -0.5rem;
}
.custom {
  margin-bottom: -1rem !important;
}
 .v-text-field.v-text-field--solo .v-input__control .v-text-field__details .custom{
   
    margin-bottom: -2.5rem !important;
    padding: 0;
}
</style>
