<template>
  <div>
    <v-row class="mt-1" align="center" justify="center">
      <v-img
        :src="images.coverPhoto"
        class="grey lighten-2 coverPhoto"
        max-width="800"
        max-height="300"
      ></v-img>
    </v-row>

    <v-row class="profilePhoto" align="center" justify="center">
      <v-avatar size="150">
        <img :src="images.profilePhoto" />
      </v-avatar>
    </v-row>

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
.coverPhoto {
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
}
.profilePhoto {
  margin-top: -5rem;
}
.Header {
  font-size: 2rem;
  font-weight: bold;
}
.textBold{
   font-weight: bold;
}
</style>