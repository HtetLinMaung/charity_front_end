<template>
  <div class="messages">
    <h1>zzz</h1>

    <v-layout row>
      <v-col class="message_card" align="end" justify="end">
        <v-card max-width="344" class="ml-auto mt-auto">
          <v-card-title class="m_card_title"><v-icon>mdi-message</v-icon>&nbsp;I'm a title</v-card-title>
          <v-card-text>I'm card text</v-card-text>
          <v-textarea></v-textarea>
          <v-card-actions>
            <v-btn text>Send</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-layout>
  </div>
</template>

<script>
export default {
  data: () => ({}),
};
</script>
<style>
.message_card {
  position: absolute;
  padding: 25% 15% 0 78%;
}
.message_card .v-card {
  min-width: 330px;
}
.message_card .v-card__title {
  background-color: lightseagreen;
  font-size: 1rem;
  height: 3rem;
  line-height: 0rem;
  padding: 10px 16px 9px;
}
</style>
