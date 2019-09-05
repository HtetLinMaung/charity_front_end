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
      :elevation="elevation"
    >
      <v-layout row>
        <v-avatar class="mt-3 ml-5 mb-3" size="48">
          <v-img :src="images.profile"></v-img>
        </v-avatar>
        <v-card-title style="font-size:15px;font-weight:bold;">Kyi Sin Thant</v-card-title>
        <div class="flex-grow-1"></div>
        <!-- <v-btn icon class="mr-7 mt-5" @click="option">
          <v-icon>mdi-dots-horizontal</v-icon>
        </v-btn>-->

        <v-menu transition="scroll-x-reverse-transition" width="400">
          <template v-slot:activator="{ on }">
            <v-btn icon class="mr-7 mt-5" v-on="on">
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
          </template>
          <v-card class="mx-auto" tile>
            <v-list rounded>
              <v-list-item-group color="primary">
                <v-list-item>Hide Post</v-list-item>

                <v-list-item>Delete Post</v-list-item>

                <v-list-item>Edit Post</v-list-item>

                <v-list-item>Privacy</v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-menu>
      </v-layout>

      <v-img
        class="image-wrapper"
        v-if="media"
        max-height="550"
        :height="height"
        :src="images.profile"
      ></v-img>

      <v-card-text style="font-weight:bold">Hello...........</v-card-text>
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
        flat
        solo
        class="custom"
        v-model="comment"
        prepend-inner-icon="mdi-camera-outline"
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
    elevation: 4,
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
      profile: require('@/assets/group.jpg'),
      // eslint-disable-next-line comma-dangle
    }
  }),
  methods: {
    sendMessage() {
      this.resetIcon();
      this.clearMessage();
    },
    clearMessage() {
      this.comment = '';
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
  border-radius: 30px;
  margin-bottom: -2rem;
}
.card .v-input__slot {
  margin-bottom: -100px !important;
}
.adjust {
  padding-top: 0% !important;
  margin-top: -0.5rem;
}
</style>
<style>
.custom .v-input__control .v-text-field__details {
  margin-bottom: -6rem !important;
}
</style>
