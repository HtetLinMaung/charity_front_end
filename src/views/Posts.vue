<template>
  <div class="post mt-5 mb-10">
      <v-col v-for="card in cards" :key="card.id">
        <v-card
          class="mx-auto card mb-3"
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
              <v-img :src="card.profile"></v-img>
            </v-avatar>
            <v-card-title class="profilename" v-text="card.name"></v-card-title>
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
            :src="card.postimage"
            @click="postimage"
          ></v-img>
          <v-card-text style="font-weight:bold" v-text="card.postcaption"></v-card-text>
          <v-card-actions v-if="actions" class="adjust">
            <v-btn icon color="black" v-if="seen" @click="seen = !seen;likecounter+=1;">
              <v-icon>mdi-heart-outline</v-icon>
            </v-btn>

            <v-btn icon color="red" v-else @click="seen = !seen; likecounter-=1;">
              <v-icon>mdi-heart</v-icon>
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
            <v-menu transition="scroll-x-reverse-transition" width="400">
              <template v-slot:activator="{ on }">
                <v-btn icon color="black" v-on="on">
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </template>
              <v-card class="mx-auto" tile>
                <v-list rounded>
                  <v-list-item-group color="primary">
                    <v-list-item>share to Group</v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-card>
            </v-menu>
          </v-card-actions>
          <v-card-text class="adjust">{{likecounter}} likes</v-card-text>
          <a class="grey--text commentlink ml-4" @click="commentdialog">View all comments</a>
          <v-card flat @click="commentdialog">
            <v-layout row>
              <v-btn icon class="ml-5 mt-2" color="black">
                <v-icon>mdi-camera-outline</v-icon>
              </v-btn>

              <v-text-field
                flat
                solo
                class="custom mr-5"
                clear-icon="mdi-close-circle"
                clearable
                append-outer-icon="mdi-send "
                placeholder="Add a comment..."
                disabled
              ></v-text-field>
            </v-layout>
          </v-card>
        </v-card>
          <!-- <v-dialog max-width="500" v-model="imagedialog" :key="card.id">
        <v-img class="image-wrapper" v-if="media" width="100%" height="100%" :src="card.postimage" :key="card.id"></v-img>
      </v-dialog> -->

      <v-dialog v-model="dialogcomment" persistent width="800" flat class="commentdialog">
        <v-card max-width="800" tile flat>
          <v-list>
            <v-layout row>
              <v-btn color="primary" class="mr-0" text disabled style="font-weight:bold;">Comments</v-btn>
              <div class="flex-grow-1"></div>
              <v-btn color="primary" class="mr-0" text @click="dialogcomment = false">Cancel</v-btn>
            </v-layout>
            <v-divider></v-divider>
            <v-list-item-group color="primary">
              <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content style="margin-left:-1rem;margin-right:-3rem;">
                  <v-list-item-title v-text="item.name" fixed></v-list-item-title>
                </v-list-item-content>
                <v-list-item-content>
                  <v-list-item-title v-text="item.text" class="multi-line"></v-list-item-title>
                </v-list-item-content>
                <div class="flex-grow-1"></div>
                <v-list-item-icon>
                  <v-icon v-text="item.likeicon" size="15"></v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <v-layout row>
            <v-btn icon class="ml-3 mt-2" @click="pickFile" color="black">
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
              class="custom mr-3"
              v-model="comments"
              clear-icon="mdi-close-circle"
              clearable
              append-outer-icon="mdi-send "
              @click:append-outer="sendMessages"
              placeholder="Add a comment..."
            ></v-text-field>
          </v-layout>
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
        </v-card>
      </v-dialog>
      </v-col>
   
  </div>
</template>
<script>
export default {
  data: () => ({
    items: [
      {
        text: "wow",
        icon: "mdi-account",
        likeicon: "mdi-heart-outline",
        name: "May"
      },
       {
        text: "wow",
        icon: "mdi-account",
        likeicon: "mdi-heart-outline",
        name: "May"
      }
    ],
    comments: null,
    likecounter: 1000,
    seen: true,
    dialogcomment: false,
    imagedialog: false,
    commentimage: null,
    hasImage: false,
    image: null,
    imageName: "",
    imageUrl: "",
    imageFile: "",
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
    cards: [
      {
          id:1,
        name: "Kyi Sin Thant",
        profile: require("@/assets/lisa.jpg"),
        postimage: require("@/assets/lisa.jpg"),
        postcaption: "Hello"
      },
      {
          id:2,
        name: "Wai Yan",
        profile: require("@/assets/WY.jpg"),
        postimage: require("@/assets/WY.jpg"),
        postcaption: "Hola"
      },
      {
          id:3,
        name: "Aye Thu Zar",
        profile: require("@/assets/lisa.jpg"),
        postimage: require("@/assets/lisa.jpg"),
        postcaption: "Hi"
      },
      {
          id:4,
        name: "Htet Lynn Maung",
        profile: require("@/assets/HLM.png"),
        postimage: require("@/assets/HLM.png"),
        postcaption: "Kal Kal"
      },
      {
          id:5,
        name: "Ben Ro",
        profile: require("@/assets/BR.jpg"),
        postimage: require("@/assets/BR.jpg"),
        postcaption: "Hi"
      }
    ]
  }),
  methods: {
    sendMessages() {
      this.items.push({
        text: this.comments,
        icon: "mdi-account",
        likeicon: "mdi-heart-outline",
        name: "May"
      });
      this.comments = "";
    },
    sendMessage() {
      this.clearMessage();
      this.imageUrl = "";
    },
    clearMessage() {
      this.comment = "";
    },
    pickFile() {
      this.$refs.image.click();
    },

    onFilePicked(e) {
      const { files } = e.target;
      if (files[0] !== undefined) {
        this.imageName = files[0].name;
        if (this.imageName.lastIndexOf(".") <= 0) {
          return;
        }
        const fr = new FileReader();
        fr.readAsDataURL(files[0]);
        fr.addEventListener("load", () => {
          this.imageUrl = fr.result;
          // eslint-disable-next-line prefer-destructuring
          this.imageFile = files[0]; // this is an image file that can be sent to server...
        });
      } else {
        this.imageName = "";
        this.imageFile = "";
        this.imageUrl = "";
      }
    },
    removeimage() {
      this.imageUrl = "";
    },
    postimage() {
      this.imagedialog = true;
    },
    commentdialog() {
      this.dialogcomment = true;
    }
  }
};
</script>
<style>
.profilename {
  font-size: 15px;
  font-weight: bold;
  margin-top: -0.5rem;
}
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
  margin-bottom: -1rem;
}
#fileInput {
  display: none;
}

.commentlink {
  font-size: 12px;
  margin-bottom: -2.5rem;
}
.multi-line {
  white-space: pre-line;
}
</style>
<style>
.custom .v-input__control .v-text-field__details {
  margin-bottom: -6rem !important;
}
.v-dialog .v-dialog--active .v-dialog--persistent {
  overflow-y: unset !important;
}
</style>