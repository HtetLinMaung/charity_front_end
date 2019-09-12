<template>
  <div class="mt-5 mb-5 createpost">
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
        <v-card-title class="text mb-3" >What's on your mind?</v-card-title>
        <div class="flex-grow-1"></div>
        <v-btn icon class="mt-4 mb-4 mr-3" color="black">
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
              <v-btn color="primary" class="mr-0" text @click="dialog = false">Post</v-btn>
            </v-card-actions>
          </v-layout>
          <v-textarea
            class="ml-2 mr-2"
            v-model="model"
            :auto-grow="autoGrow"
            :clearable="clearable"
            :outlined="outlined"
            :placeholder="placeholder"
            :solo="solo"
          ></v-textarea>
          <v-layout style="margin-left:0.4rem;margin-right:0.4rem;">
            <v-hover v-slot:default="{ hover }">
              <v-img
                :src="imageUrl"
                v-if="imageUrl"
                class="ml-0 mb-3 mr-3 image"
                height="100%"
                width="100%"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex  v-card--reveal display-3 "
                    style="height: 100%;"
                  >
                    <div class="flex-grow-1"></div>
                    <v-btn icon class="white" @click="removeimage" >
                      <v-icon >mdi-close</v-icon>
                    </v-btn>
                  </div>
                </v-expand-transition>
              </v-img>
            </v-hover>
          </v-layout>

          <v-layout row>
            <v-card-text class="option">Add to your post</v-card-text>
            <div class="flex-grow-1"></div>
            <v-btn icon class="tag" color="primary">
              <v-icon size="30">mdi-map-marker</v-icon>
            </v-btn>
            <v-btn icon class="tag" color="primary">
              <v-icon>mdi-tag</v-icon>
            </v-btn>
            <v-btn icon class="mr-3 btn" @click="pickFile" color="primary">
              <v-icon>mdi-image-filter</v-icon>
            </v-btn>
            <input
              type="file"
              style="display: none"
              ref="image"
              accept="image/*"
              @change="onFilePicked"
              append-icon="close"
            />
          </v-layout>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>
<script>
export default {
  data: () => ({
    image: null,
    imageName: '',
    imageUrl: '',
    imageFile: '',
    model: null,
    autoGrow: false,
    autofocus: true,
    clearable: true,
    placeholder: "What's on your mind?",
    outlined: true,
    rounded: true,
    solo: true,
    dialog: false,
    elevation: 3,
    flat: false,
    media: true,
    loading: false,
    actions: true,
    raised: true,
    width: 500,
    height: 60,
    images: {
      // eslint-disable-next-line global-require
      profile: require('@/assets/lisa.jpg'),
      // eslint-disable-next-line comma-dangle
    }
  }),
  methods: {
    post() {
      const self = this;
      self.dialog = true;
    },
    pickFile() {
      this.$refs.image.click();
    },

    onFilePicked(e) {
      const { files } = e.target;
      if (files[0] !== undefined) {
        this.imageName = files[0].name;
        if (this.imageName.lastIndexOf('.') <= 0) {
          return;
        }
        const fr = new FileReader();
        fr.readAsDataURL(files[0]);
        fr.addEventListener('load', () => {
          this.imageUrl = fr.result;
          // eslint-disable-next-line prefer-destructuring
          this.imageFile = files[0]; // this is an image file that can be sent to server...
        });
      } else {
        this.imageName = '';
        this.imageFile = '';
        this.imageUrl = '';
      }
    },
    removeimage() {
      this.imageUrl = '';
    },
  },
};
</script>
<style scoped>
#fileInput {
  display: none;
}
.btn {
  margin-top: -2.6rem;
}
.option {
  font-size: 1rem;
  font-weight: bold;
  margin-left: 0.2rem;
  color: gray;
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
.image {
  border-radius: 5px;
}
</style>
