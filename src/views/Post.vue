<template>
  <div class="post mt-5">
    <v-card
      class="mx-auto"
      :flat="flat"
      :loading="loading"
      :outlined="outlined"
      :elevation="elevation"
      :raised="raised"
      :width="width"
      :height="height"
    >
      <v-img
        v-if="media"
        class="white--text"
        height="500px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title class="align-end fill-height">I'm a title</v-card-title>
      </v-img>
      <v-card-title v-else>I'm a title</v-card-title>

      <v-card-text>I'm card text</v-card-text>
      <v-card-actions v-if="actions">
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-comment-processing-outline</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-tag-outline</v-icon>
        </v-btn>
        <div class="flex-grow-1"></div>
        <v-btn icon>
          <v-icon>mdi-bookmark</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-share-variant</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flat: false,
      media: true,
      loading: false,
      actions: true,
      outlined: false,
      elevation: undefined,
      raised: false,
      width: 650,
      height: undefined,
    };
  },
};
</script>
<style scoped>
.v-input__slider {
  width: 100%;
}
</style>
