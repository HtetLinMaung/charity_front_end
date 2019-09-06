<template>
  <div class="post">
    <v-card class="card" flat>
      <v-img class="image-wrapper center" :src="images.coverPhoto" width="700" height="250"></v-img>

      <v-layout>
        <v-avatar class="center profilePhoto" size="150">
          <img :src="images.profilePhoto" />
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

      <v-tabs fixed-tabs>
        <v-tab ml-1>
          <v-icon>mdi-image-filter</v-icon>POSTS
        </v-tab>
        <v-tab>
          <v-icon>mdi-bookmark-outline</v-icon>SAVED
        </v-tab>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    images: {
      coverPhoto: require("@/assets/Cover.jpg"),
      profilePhoto: require("@/assets/group.jpg")
    }
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
.v-tab{
  margin-left: 0 !important;
}
</style>
