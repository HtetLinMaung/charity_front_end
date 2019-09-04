<template>
  <div>
    <span class="dot1"></span>
    <span class="dot2"></span>
    <span class="dot3"></span>
    <span class="dot4"></span>
    <span class="dot5"></span>
    <span class="dot6"></span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
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
  background-color: #2cad31;
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
</style>
