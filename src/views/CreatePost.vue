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
      <v-dialog v-model="dialog" max-width="500">
        <v-card class="dcard">
          <v-layout row>
            <v-avatar class="mt-3 ml-5 mb-3" size="40">
              <v-img :src="images.profile"></v-img>
            </v-avatar>
            <v-card-title class="text mb-2" style="font-weight:bold;">Kyi Sin Thant</v-card-title>
            <div class="flex-grow-1"></div>
            <v-card-actions>
              <v-btn color="primary" class="mr-3" text @click="dialog = false">Post</v-btn>
            </v-card-actions>
          </v-layout>
          <v-textarea
            class="ml-3 mr-3"
            v-model="model"
            :auto-grow="autoGrow"
            :clearable="clearable"
            :outlined="outlined"
            :placeholder="placeholder"
            :rounded="rounded"
            :solo="solo"
          ></v-textarea>
          <v-layout row>
            <v-card-text class="option">Add to your post</v-card-text>
            <div class="flex-grow-1"></div>
            <v-btn icon class="tag">
              <v-icon size="30">mdi-map-marker-outline</v-icon>
            </v-btn>
            <v-btn icon class="tag">
              <v-icon>mdi-tag-outline</v-icon>
            </v-btn>
            <v-btn icon class="mr-6 btn" >
              <v-icon>mdi-image-filter</v-icon>
            </v-btn>
          </v-layout>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>
<script>
export default {
  data: () => ({
    model: null,
    autoGrow: false,
    autofocus: true,
    clearable: true,
    placeholder: "What's on your mind?",
    outlined: true,
    rounded: true,
    solo: true,
    dialog: false,
    elevation: 4,
    flat: false,
    media: true,
    loading: false,
    actions: true,
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
.btn {
  margin-top: -2.6rem;
}
.option {
  font-size: 1rem;
  font-weight: bold;
  margin-left: 0.6rem;
  color:gray;
}
.dcard {
  overflow: hidden;
  border-radius: 10px;
}
.text {
  color: gray;
  font-size: 1rem;
}
.tag {
  margin-top: -2.6rem;
}
.card {
  border-radius: 10px;
}
</style>
