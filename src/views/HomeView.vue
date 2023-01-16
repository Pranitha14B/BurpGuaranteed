<template>
  <div class="whole">
    <div class="motto">
      <p style="margin-block: 0">Handmade,</p>
      <p style="margin-block: 0">with an Extra Pinch of Love</p>
    </div>
    <div class="content">
      <p style="margin-block: 0; color: darkgray" class="matter">
        We harvest our own vegitables and make own spices which make then even
        healthier and tastier
      </p>
      <div class="buttons">
        <button class="getinfo">Get Info -></button>
        <button class="order">Order Now</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.whole {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  font-family: cursive;
  padding: 60px 0px 0px 150px;
  background-color: mintcream;
}

.motto {
  grid-area: 1 / 1 / 2 / 2;
  font-size: 50px;
  width: 30%;
}
.content {
  grid-area: 2 / 1 / 3 / 2;
  font-size: 20px;
  width: 30%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
}

.buttons {
  display: flex;
  flex-direction: row;
}
button {
  margin: 10px 30px 10px 0px;
  padding: 7px;
  max-height: 35px;
  border-radius: 10px;
  font-family: cursive;
}
</style>
