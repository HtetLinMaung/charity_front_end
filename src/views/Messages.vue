<template>
  <div class="messages">

    <v-layout row>
      <v-col class="message_card" align="end" justify="end">
        <v-card max-width="344" class="ml-auto mt-auto">
          <v-card-title class="m_card_title">
            <v-icon>mdi-message</v-icon>&nbsp;I'm a ChatBox
          </v-card-title>
          <v-card-text>
            <ul style="list-style-type: none;">
              <li :class="{ send: isSend }">hola</li>
              <li>hello</li>
              <li :class="{ send: isSend }">hello</li>
              <li :class="{ send: isSend }">hey</li>
              <li>hi</li>
              <li>ho</li>
              <li :class="{ send: isSend }">text1</li>
              <li>text1</li>
              <li>text1</li>
              <li :class="{ send: isSend }">text1</li>
              <li>text1</li>
              <li :class="{ send: isSend }">text1</li>
            </ul>
          </v-card-text>
          <v-text-field filled append-icon="mdi-emoticon-poop" label="heee hee haarr harr"></v-text-field>
        </v-card>
      </v-col>
    </v-layout>
    <!-- xaxa -->
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
      <h1>haha</h1><br>
    <!-- xaxa -->

  </div>
</template>

<script>
export default {
  data: () => ({
    isSend: true,
  }),
};
</script>
<style>
.message_card {
  position: fixed;
  /* padding: 25% 15% 0 78%;
  padding: 20% 0% 0 40%; */
  bottom: 0;
}
.message_card .v-card {
  min-width: 330px;
  margin-right: 30rem;
}
.message_card .v-card__title {
  background-color: rgb(226, 219, 219);
  font-size: 1rem;
  height: 3rem;
  line-height: 0rem;
  padding: 10px 16px 9px;
}
.message_card .theme--light.v-card > .v-card__text {
  height: 250px;
  overflow-y: scroll;
}
.m-textarea {
  width: 15px;
}
.message_card .v-input__slot {
  margin-bottom: 0px;
}
.message_card .v-input__slot{
  margin-bottom: -21px;
}
.message_card .send{
  margin-left: auto;
  text-align: left;
}
</style>
