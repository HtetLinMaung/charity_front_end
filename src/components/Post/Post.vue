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
        <v-card-title style="font-size:15px;font-weight:bold;margin-top:-0.5rem;">Kyi Sin Thant</v-card-title>
        <div class="flex-grow-1"></div>
        <v-menu transition="scroll-x-reverse-transition" width="400">
          <template v-slot:activator="{ on }">
            <v-btn icon class="mr-3 mt-5" v-on="on" color="black">
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
        @click="postimage"
      ></v-img>

      <v-card-text style="font-weight:bold">Hello...........</v-card-text>
      <v-card-actions v-if="actions" class="adjust">
        <v-btn icon color="black">
          <v-icon>mdi-heart-outline</v-icon>
        </v-btn>
        <v-btn icon color="black" @click="commentdialog">
          <v-icon>mdi-comment-processing-outline</v-icon>
        </v-btn>
        <v-btn icon color="black">
          <v-icon>mdi-tag-outline</v-icon>
        </v-btn>
        <div class="flex-grow-1"></div>
        <v-btn icon color="black">
          <v-icon>mdi-bookmark-outline</v-icon>
        </v-btn>
        <v-btn icon color="black">
          <v-icon>mdi-share-variant</v-icon>
        </v-btn>
      </v-card-actions>
      <v-card-text class="adjust">40,000 likes</v-card-text>
      <v-card-text
        class="grey--text adjust"
        style="font-size:12px;margin-bottom:-0.5rem;"
      >View all comments</v-card-text>
      <v-hover v-slot:default="{ hover }">
        <v-layout style="margin-left:1rem;">
          <v-img
            :src="imageUrl"
            v-if="imageUrl"
            class="mb-3 image"
            :clearable="clearable"
            max-width="159.53"
            max-height="159.53"
          >
            <v-expand-transition>
              <div v-if="hover" class="d-flex v-card--reveal display-3" style="height: 100%;">
                <div class="flex-grow-1"></div>
                <v-btn icon class="white" @click="removeimage">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </div>
            </v-expand-transition>
          </v-img>
        </v-layout>
      </v-hover>
      <v-layout row>
        <v-btn icon class="ml-5 mt-2" @click="pickFile" color="black">
          <v-icon>mdi-camera-outline</v-icon>
        </v-btn>
        <input
          type="file"
          style="display: none"
          ref="image"
          accept="image/*"
          @change="onFilePicked"
        />

        <v-text-field
          flat
          solo
          class="custom mr-5"
          v-model="comment"
          clear-icon="mdi-close-circle"
          clearable
          append-outer-icon="mdi-send "
          @click:append-outer="sendMessage"
          placeholder="Add a comment..."
        ></v-text-field>
      </v-layout>
    </v-card>
    <v-dialog max-width="500" v-model="imagedialog">
      <v-img class="image-wrapper" v-if="media" width="100%" height="100%" :src="images.profile"></v-img>
    </v-dialog>

    <v-dialog v-model="dialogcomment" persistent max-width="600" >
      <v-card class="mx-auto" max-width="600" tile>
        <v-list>
          <v-layout row>
            <v-btn color="primary" class="mr-0" text disabled style="font-weight:bold;">Comments</v-btn>
            <div class="flex-grow-1"></div>
            <v-btn color="primary" class="mr-0" text @click="dialogcomment = false">Cancel</v-btn>
          </v-layout>
          <v-divider></v-divider>
          <v-list-item-group v-model="item" color="primary">
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.name"></v-list-item-title>
              </v-list-item-content>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
                <div class="flex-grow-1"></div>
               <v-list-item-icon>
                <v-icon v-text="item.likeicon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data: () => ({
    items: [
      { text: 'I love lisa too <3', icon: 'mdi-account', likeicon: 'mdi-heart-outline' ,name:'May'},
      { text: 'Lisa is amazing', icon: 'mdi-account', likeicon: 'mdi-heart-outline' ,name:'June'},
      { text: 'Yay new song is so good', icon: 'mdi-account', likeicon: 'mdi-heart-outline',name:'July' },
      { text: 'I love lisa too <3', icon: 'mdi-account', likeicon: 'mdi-heart-outline' ,name:'August'},
      { text: 'I love lisa too <3', icon: 'mdi-account', likeicon: 'mdi-heart-outline' ,name:'Sept'},
      { text: 'I love lisa too <3', icon: 'mdi-account', likeicon: 'mdi-heart-outline',name:'Oct' },
      { text: 'I love lisa too <3', icon: 'mdi-account', likeicon: 'mdi-heart-outline' ,name:'Nov'},
      { text: 'I love lisa too <3', icon: 'mdi-account', likeicon: 'mdi-heart-outline',name:'Dec' },
      { text: 'I love lisa too <3', icon: 'mdi-account', likeicon: 'mdi-heart-outline',name:'Jan' },
      { text: 'I love lisa too <3', icon: 'mdi-account', likeicon: 'mdi-heart-outline',name:'Kyi' },
      { text: 'I love lisa too <3', icon: 'mdi-account', likeicon: 'mdi-heart-outline' ,name:'Sin'},
      { text: 'I love lisa too <3', icon: 'mdi-account', likeicon: 'mdi-heart-outline',name:'Thant' },
    ],
    dialogcomment: false,
    imagedialog: false,
    commentimage: null,
    hasImage: false,
    image: null,
    imageName: '',
    imageUrl: '',
    imageFile: '',
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
      profile: require('@/assets/lisa.jpg'),
      // eslint-disable-next-line comma-dangle
    }
  }),
  methods: {
    sendMessage() {
      this.clearMessage();
      this.imageUrl = '';
    },
    clearMessage() {
      this.comment = '';
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
    postimage() {
      this.imagedialog = true;
    },
    commentdialog() {
      this.dialogcomment = true;
    },
  },
};
</script>
<style scoped>
.image {
  border-radius: 5px;
}
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
#fileInput {
  display: none;
}
</style>
<style>
.custom .v-input__control .v-text-field__details {
  margin-bottom: -6rem !important;
}
</style>
