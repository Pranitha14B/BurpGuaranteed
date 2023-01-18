<script>
export default {
  name: "AboutView",
  computed: {
    imageSlide() {
      return [
        {id:0,url:"./src/assets/pic1.jpg"},
        {id:1,url:"./src/assets/pic2.jpg"},
        {id:2,url:"./src/assets/pic3.jpg"},
        {id:3,url:"./src/assets/pic4.jpg"},
        {id:4,url:"./src/assets/pic5.jpg"}
      ];
    },
  },
  updated: {
    
    },
   
  
  method:{
    slideShow(){
        let i;
        for(i=0;i<this.imageSlide.length;i++){
          let x=document.getElementsByClassName(`image${i}`);
          x[i].style.display=none;
        }
    }
  }
};
</script>
<template>
  <div class="about">
    <div class="head">About Us</div>
    <div class="slideshow">
      <img v-for="image in imageSlide" :key="image.id" :src="image.url" :class="`image${image.id.toString()}`" />
    </div>
  </div>
</template>

<style>
img {
  max-width: 100%;
}
</style>
