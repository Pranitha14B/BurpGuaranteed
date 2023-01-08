<template>
  <div class="whole">
    <div class="motto">Handmade,<div class="motto1">with an Extra Pinch of Love</div></div>
    <div class="content">
      We harvest our own vegitables and make own spices which make then even
      healthier and tastier
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
  color: darkgray;
}
</style>