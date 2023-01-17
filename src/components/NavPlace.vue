<script>
export default {
  name: "NavPlace",
  computed: {
    searchIconClicked() {
      return this.$store.state.isSearchIconClicked;
    },
  },
  methods: {
    search() {
      this.$store.state.isSearchIconClicked = !this.searchIconClicked;
    },
    gotoHome() {
      this.$router.push({
        name: "home",
      });
    },
    gotoMenu() {
      this.$router.push({
        name: "menu",
      });
    },
  },
};
</script>
<template>
  <div class="heading">
    <div class="icon">
      <img
        alt="icon"
        src="@/assets/BurpGuaranteed.gif"
        width="100"
        height="100"
      />
    </div>
    <div class="bar">
      <div class="search">
        <input
          type="search"
          :style="{ opacity: searchIconClicked ? 100 : 0 }"
        />
        <img src="@/assets/search.svg" @click="search" />
      </div>
      <!--div class="home"><Router-link to="/">Home</Router-link></div-->
      <div class="home" @click="gotoHome">Home</div>
      <div class="about"><Router-link to="/about">About us</Router-link></div>

      <div class="menu" @click="gotoMenu">Menu</div>
      <div class="login"><Router-link to="/login">Login</Router-link></div>
      
    </div>
  </div>
</template>
<style scoped>
.heading {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr;
  /* background-color: rosybrown; */
  height: 100px;
  background-color: mintcream;
}
.search {
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  margin-inline: auto;

}
.home {
  grid-area: 1 / 2 / 2 / 3;
  margin-inline: auto;

}

.about {
  grid-area: 1 / 3 / 2 / 4;
    margin-inline: auto;

}
.menu a,
.home a,
.about a,
.login a {
  text-decoration: none;
  color: black;
}
.menu {
  grid-area: 1 / 4 / 2 / 5;
  margin-inline: auto;

}

.login {
  grid-area: 1 / 5 / 2 / 6;
    margin-inline: auto;

}
.bar {
  grid-area: 1 / 2 / 2 / 3;
  display: grid;
  grid-template-columns: 1.5fr repeat(4, 1fr);
  grid-template-rows: 1fr;
  padding-top: 35px;
  font-family: cursive;
  font-size: 20px;

}
.icon {
  grid-area: 1 / 1 / 2 / 2;
  justify-content: left;
  padding-left: 20px;
}
.icon img {
  background: #f8f8f8;
  border: solid #bdbdbd 1px;
  box-shadow: 0 0 85px rgba(232, 195, 216, 0.8);
  -webkit-box-shadow: 0 0 85px rgba(232, 195, 216, 0.8);
  -moz-box-shadow: 0 0 85px rgba(232, 195, 216, 0.8);
  border-radius: 50%;
}
.search img {
  height: 30px;
}
.search input {
  max-height: 27px;
}
</style>
