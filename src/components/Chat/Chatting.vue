<template>

  <v-col class="card_message" align="end" justify="end">
    <v-card max-width="344" class="ml-auto mt-auto">
      <v-card-title @click="show_message_toggle = !show_message_toggle">
        <v-icon>mdi-message</v-icon>&nbsp;<b>Chat Mal </b><i>(Wai Yan)</i>
      </v-card-title>
      <v-card-text v-show="show_message_toggle">
          <p :class="{ received: isReceived }"><span>hola</span></p>
          <p :class="{ send: isReceived }"><span>hello</span></p>
          <p :class="{ send: isReceived }"><span>hello</span></p>
          <p :class="{ received: isReceived }"><span>hey</span></p>
          <p :class="{ received: isReceived }"><span>hi</span></p>
          <p :class="{ send: isReceived }"><span>ho</span></p>
          <p :class="{ received: isReceived }"><span>text1</span></p>
          <p :class="{ received: isReceived }"><span>text1</span></p>
          <p :class="{ send: isReceived }"><span>text1</span></p>
          <p :class="{ send: isReceived }"><span>text1</span></p>
          <p :class="{ received: isReceived }"><span>text1</span></p>
          <p :class="{ received: isReceived }"><span>text1</span></p>
      </v-card-text>
      <v-text-field v-show="show_message_toggle" filled append-icon="mdi-emoticon-poop" label="message pote mal"></v-text-field>
    </v-card>
  </v-col>

</template>


<script>
export default {
  data: () => ({
    isReceived: true,
    show_message_toggle: true,
  }),
};
</script>


<style>
.card_message {
  position: fixed;
  bottom: 0;
  right: 0;
  width: auto;
}
.card_message .v-card {
  min-width: 330px;
  margin-right: 30rem;
  border-radius: 18px 18px 0px 0px ;
}
.card_message .v-card__title {
  background-color: rgb(226, 219, 219);
  font-size: 1rem;
  height: 3rem;
  line-height: 0rem;
  padding: 10px 16px 9px;
}
.card_message .theme--light.v-card > .v-card__text {
  height: 250px;
  overflow-y: scroll;
}
.m-textarea {
  width: 15px;
}
.card_message .v-input__slot {
  margin-bottom: 0px;
}
.card_message .v-input__slot{
  margin-bottom: -21px;
}
.card_message .received span{
  text-align: right;
 background-color: darkgray;
 padding: 7px 20px;
 border-radius: 10px 1px;
}
.card_message .send{
  text-align: left;
}
.card_message span{
 background-color: aquamarine;
 padding: 7px 20px;
 border-radius: 10px 1px;
}

</style>
