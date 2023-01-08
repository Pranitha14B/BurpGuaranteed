<script>
export default{
  name:"NavPlace",
  computed:{
    searchIconClicked(){
      return this.$store.state.isSearchIconClicked;
    }
  },
  methods:{
    search(){
      this.$store.commit('components/searchIconClicked',true)
      console.log("clicked")
    }
  }
}
</script>
<template>
  <div class="heading">
    <div class="icon">
      <img alt="icon" src="@/assets/BurpGuaranteed.gif" width="100" height="100" />
    </div>
    <div class="bar">
        <input type="search" v-if="searchIconClicked" />
        <div class="search" @click="search">🔍</div>
        <div class="home">Home</div>
        <div class="service">Services</div>
        <div class="about">About us</div>
        <div class="blog">Blog</div>
    </div>
  </div>
</template>
<style scoped>
.heading {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  /* background-color: rosybrown; */
  height:100px;
}
.search { grid-area: 1 / 1 / 2 / 2; }
.home { grid-area: 1 / 2 / 2 / 3; }
.service { grid-area: 1 / 3 / 2 / 4; }
.about { grid-area: 1 / 4 / 2 / 5; }
.blog { grid-area: 1 / 5 / 2 / 6; }
.bar {
  grid-area: 1 / 2 / 2 / 3;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  padding-top: 35px;
  font-family:cursive;
  font-size:20px;
}
.icon {
    grid-area: 1 / 1 / 2 / 2;
  justify-content: left;
  padding-left: 20px;
  
}
.icon img{
    background: #F8F8F8; 
	border: solid #BDBDBD 1px; 
	box-shadow: 0 0 85px rgba(232, 195, 216, 0.8)  ; 
	-webkit-box-shadow: 0 0 85px rgba(232, 195, 216, 0.8)  ; 
	-moz-box-shadow: 0 0 85px rgba(232, 195, 216, 0.8)  ; 
    border-radius: 50%;

}
</style>
