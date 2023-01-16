<script>
export default{
    name:"ForgotPass",
    methods:{
        generateLink(){

        }
    }
}
</script>
<template>
    <div class="forgotpass">
    <div class="disp">
      <img src="@/assets/disp.jpg" alt="take away" />
    </div>
    <div class="userinput">
      <form>
        <label for="email">E-mail</label>
        <input type="email" placeholder="Enter your email id" />
        <div class="backtologin"><Router-link to="/login">back</Router-link></div>
        <button type="submit" @submit="generateLink">Submit</button>       
      </form>
      <div class="signup">Don't have an account?<Router-link to="/signup">SignUp</Router-link></div>
    </div>
  </div>
</template>
<style scoped>
.forgotpass {
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  overflow: hidden;
    height: calc(100vh - 116px);
}
.userinput{
    grid-area: 1 / 1 / 2 / 2;
    margin-top: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.disp {
    grid-area: 1 / 2 / 2 / 3;

}
.disp img {
  max-width: 100%;
}
.userinput form{
    display: flex;
    flex-direction: column;
}
.userinput label{
    padding-bottom: 8px;
}

.userinput input{
    margin-bottom: 16px;
    padding: 8px;
    border-radius: 18px;
    width: 18rem;
}
.userinput button{
    border-radius: 30px;
    background-color: mintcream;
    font-family: cursive;
    padding: 8px;
    margin-block: 8px;
    font-weight: 600;
    font-size: 15px;
    width: 10rem;
    margin-inline: auto;
}
</style>