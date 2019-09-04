<template>
  <div class="messages">

      <v-col class="message_card" align="end" justify="end">
        <v-card max-width="344" class="ml-auto mt-auto">
          <v-card-title>
            <v-icon>mdi-message</v-icon>&nbsp;Chat Mal
          </v-card-title>
          <v-card-text>
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
          <v-text-field filled append-icon="mdi-emoticon-poop" label="message pote mal"></v-text-field>
        </v-card>
      </v-col>
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
    isReceived: true,
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
.message_card .received span{
  text-align: right;
 background-color: darkgray; 
 padding: 7px 20px;
 border-radius: 10px 1px;
}
.message_card .send{
  text-align: left;
}
.message_card span{
 background-color: aquamarine; 
 padding: 7px 20px;
 border-radius: 10px 1px;
}
</style>
