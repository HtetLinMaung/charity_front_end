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
    >
      <v-layout row>
        <v-avatar class="mt-3 ml-5 mb-3" size="40">
          <v-img :src="images.profile"></v-img>
        </v-avatar>
      </v-layout>
    </v-card>
  </div>
</template>
<script>
export default {
  data: () => ({
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
};
</script>
<style scoped>
</style>
