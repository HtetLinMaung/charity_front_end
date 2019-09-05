<template>
<div class="flex-container">
  <span class="dot1"></span>
  <span class="dot2"></span>
  <span class="dot3"></span>
  <span class="dot4"></span>
  <span class="dot5"></span>
  <span class="dot6"></span>
  <h2 class="app-title">Login</h2>
  <div class="highlight"></div>
  <div class="mt-5 r-width">
    <v-text-field label="Username or Email" single-line outlined shaped clearable v-model="username"></v-text-field>
  </div>
  <div class="mt-5 mb-3 r-width">
    <v-text-field label="Password" single-line v-model="password" :append-icon="show1 ? 'mdi-eye-outline' : 'mdi-eye-off-outline'" :rules="[rules.required, rules.min]" hint="At least 8 characters" counter @click:append="show1 = !show1"
      :type="show1 ? 'text' : 'password'" outlined shaped></v-text-field>
  </div>
  <div class="text-center mt-5">
    <v-btn @click="login" class="gradient-btn r-p" dark >Continue</v-btn>
  </div>
</div>
</template>

<script>
export default {
  data: () => ({
    username: 'Developer',
    show1: false,
    password: '12345678',
    rules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 8 || 'Min 8 characters',
      emailMatch: () => ('The email and password you entered don\'t match'),
    },
  }),
  methods: {
    login() {
      const {
        username,
        password
      } = this;
      if (username == 'Developer') {
        if (password == '12345678') {
          localStorage.setItem('token', 'authenticated');
          this.$router.push('/');
        } else {
          alert('Incorrect Password');
        }
      } else {
        alert('Incorrect Username');
      }

    }
  }
};
</script>

<style lang="scss">
.r-width {
    width: 400px;
}
.r-p {
  padding: 0 8rem;
}
@media all and (max-width: 375px) {
    .r-width {
        width: 320px!important;
    }
    .r-p {
      padding: 0 5rem!important;
    }
}
@media all and (max-width: 320px) {
    .r-width {
        width: 300px!important;
    }
    .r-p {
      padding: 0 5rem!important;
    }
}
.dot1 {
    height: 350px;
    width: 350px;
    background-color: #34daff;
    border-radius: 50%;
    display: inline-block;
    position: fixed;
    top: 30%;
    left: 89%;
}
.dot2 {
    width: 100px;
    height: 100px;
    background: #feb04e;
    border-radius: 50%;
    display: inline-block;
    position: fixed;
    top: 50%;
    left: 85%;
    opacity: 0.7;
}
.dot3 {
    height: 50px;
    width: 50px;
    background-color: #34daff;
    border-radius: 50%;
    display: inline-block;
    position: fixed;
    top: 78%;
    left: 81%;
}
@media all and (min-width: 1324px) {
    .dot4 {
        transform: rotate(20deg);
        height: 300px;
        width: 660px;
        background: linear-gradient(to right, #ee71b7, #d176d3);
        border-radius: 0 0 0 10px;
        display: inline-block;
        position: fixed;
        top: -10%;
        left: 69%!important;
        opacity: 0.9;
    }
}
.dot4 {
    transform: rotate(20deg);
    height: 300px;
    width: 660px;
    background: linear-gradient(to right, #ee71b7, #d176d3);
    border-radius: 0 0 0 10px;
    display: inline-block;
    position: fixed;
    top: -10%;
    left: 60%;
    opacity: 0.9;
}
.dot5 {
    transform: rotate(-10deg);
    height: 500px;
    width: 600px;
    background: linear-gradient(-45deg, #00F260, #0575E6);
    border-radius: 0 10px 0 0;
    display: inline-block;
    position: fixed;
    top: 70%;
    left: -20%;
    opacity: 0.9;
}
.dot6 {
    background: linear-gradient(45deg, #1dc8cd 0%, #55fabe 100%);
    width: 300px;
    height: 300px;
    border-radius: 50%;
    position: fixed;
    top: -10%;
    left: -10%;
}
.app-title {
    text-align: center;
    color: #5f537d;
    font-size: 51px;
    z-index: 4;
}
.flex-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
.highlight {
    background-image: linear-gradient(to right,#FFBA42,#e373c5);
    height: 5px;
    width: 140px;
    margin-bottom: 2rem;
    z-index: 4;
}
.gradient-btn {
    background-image: linear-gradient(to bottom right,#FF6EAA 20%,#8989FF);
}
</style>
