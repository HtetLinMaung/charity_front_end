<template>
  <div class="mt-5 createpost">
    <v-card
      fixed-top
      class="mx-auto card"
      :flat="flat"
      :loading="loading"
      :outlined="outlined"
      :raised="raised"
      :width="width"
      :height="height"
      :elevation="elevation"
      @click="post"
    >
      <v-layout row>
        <v-avatar class="mt-3 ml-5 mb-3" size="40">
          <v-img :src="images.profile"></v-img>
        </v-avatar>
        <v-card-title class="text">What's on your mind?</v-card-title>
        <div class="flex-grow-1"></div>
        <v-btn icon class="mt-5 mb-3 mr-3">
          <v-icon>mdi-image-filter</v-icon>
        </v-btn>
      </v-layout>
    </v-card>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="500">
        <v-card>

          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn color="primary" text @click="dialog = false">Cancel</v-btn>
            <v-btn color="primary" text @click="dialog = false">Post</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>
<script>
export default {
  data: () => ({
    dialog: false,
    elevation: 4,
    flat: false,
    media: true,
    loading: false,
    actions: true,
    outlined: false,
    raised: true,
    width: 500,
    height: 70,
    images: {
      // eslint-disable-next-line global-require
      profile: require('@/assets/group.jpg'),
      // eslint-disable-next-line comma-dangle
    }
  }),
  methods: {
    post() {
      const self = this;
      self.dialog = true;
    },
  },
};
</script>
<style scoped>
.text {
  color: gray;
  font-size: 1rem;
}
</style>
