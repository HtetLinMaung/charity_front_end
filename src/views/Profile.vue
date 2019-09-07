<template>
  <div class="post">
    <v-card class="card" flat>
      <v-img class="image-wrapper center" :src="images.coverPhoto" width="700" height="250" :aspect-ratio="16/9"></v-img>

      <v-layout>
        <v-avatar class="center profilePhoto" size="150">
          <img :src="images.profilePhoto"/>
        </v-avatar>
      </v-layout>

      <v-layout justify-center>
        <v-text class="text-center Header">Magic Candy</v-text>
      </v-layout>

      <v-layout justify-center>
        <v-text class="text-center">Take memories , Leave footprints..........</v-text>
      </v-layout>

      <v-layout justify-center mt-3>
        <v-flex xs4 sm2 md2 class="text-center">
          <v-text class="textBold">18</v-text>
          <v-text>&nbsp;&nbsp;posts</v-text>
        </v-flex>
        <v-flex xs4 sm2 md2 class="text-center">
          <v-text class="textBold">180</v-text>
          <v-text>&nbsp;&nbsp;followers</v-text>
        </v-flex>
        <v-flex xs4 sm2 md2 class="text-center">
          <v-text class="textBold">95</v-text>
          <v-text>&nbsp;&nbsp;followings</v-text>
        </v-flex>
      </v-layout>
      &nbsp;

      <v-flex class="tabs">
        <v-tabs fixed-tabs>
          <v-tab>
            <v-icon>mdi-image-filter</v-icon>POSTS
          </v-tab>
          <v-tab>
            <v-icon>mdi-bookmark-outline</v-icon>SAVED
          </v-tab>

          <v-tab-item>
            <v-card flat>
              <v-container fluid>
                <v-row>
                  <v-col
                    v-for="n in posts"
                    :key="n"
                    class="d-flex child-flex"
                    cols="4"
                  >
                    <v-card flat tile class="d-flex">
                      <v-img
                        :src="n.imagesrc"
                        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                        aspect-ratio="1"
                        class="grey lighten-2"
                      >
                        <template v-slot:placeholder>
                          <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                          >
                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                          </v-row>
                        </template>
                      </v-img>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-tab-item>

          <v-tab-item>
            <v-card flat>
              <v-container fluid>
                <v-row>
                  <v-col
                    v-for="n in saved"
                    :key="n"
                    class="d-flex child-flex"
                    cols="4"
                  >
                    <v-card flat tile class="d-flex">
                      <v-img
                        :src="n.imagesrc"
                        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                        aspect-ratio="1"
                        class="grey lighten-2"
                      >
                        <template v-slot:placeholder>
                          <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                          >
                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                          </v-row>
                        </template>
                      </v-img>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-tab-item>

        </v-tabs>
      </v-flex>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    images: {
      coverPhoto: require("@/assets/Cover.jpg"),
      profilePhoto: require("@/assets/group.jpg")
    },
    posts:[
      {
        imageId: 1,
        postId: 1,
        imagesrc: require("@/assets/post1.jpg")
      },
      {
        imageId: 2,
        postId: 2,
        imagesrc: require("@/assets/post2.jpg")
      },
      {
        imageId: 3,
        postId: 3,
        imagesrc: require("@/assets/post3.jpg")
      },
      {
        imageId: 4,
        postId: 4,
        imagesrc: require("@/assets/post4.jpg")
      },
      {
        imageId: 5,
        postId: 5,
        imagesrc: require("@/assets/post5.png")
      },
      {
        imageId: 6,
        postId: 6,
        imagesrc: require("@/assets/post1.jpg")
      },
      {
        imageId: 7,
        postId: 7,
        imagesrc: require("@/assets/post2.jpg")
      },
      {
        imageId: 8,
        postId: 8,
        imagesrc: require("@/assets/post3.jpg")
      },
      {
        imageId: 9,
        postId: 9,
        imagesrc: require("@/assets/post4.jpg")
      },
      {
        imageId: 10,
        postId: 10,
        imagesrc: require("@/assets/post5.png")
      }
    ],
    saved:[
      {
        imageId: 1,
        postId: 1,
        imagesrc: require("@/assets/post4.jpg")
      },
      {
        imageId: 2,
        postId: 2,
        imagesrc: require("@/assets/post2.jpg")
      },
      {
        imageId: 3,
        postId: 3,
        imagesrc: require("@/assets/group.jpg")
      },
      {
        imageId: 4,
        postId: 4,
        imagesrc: require("@/assets/lisa.jpg")
      }
    ]
  })
};
</script>

<style scoped>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.profilePhoto {
  margin-top: -4rem;
}
.Header {
  font-size: 2rem;
  font-weight: bold;
}
.textBold {
  font-weight: bold;
}
.card {
  margin-right: -2rem;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
}
.v-tab {
  margin-left: 0 !important;
}
.col-4{
  padding: 2px;
}
</style>

<style>
.tabs {
  margin: 0px;
}
@media only screen and (min-width: 800px){
  .tabs {
    margin-left: 19%;
    margin-right: 20%;
  }
}
</style>
