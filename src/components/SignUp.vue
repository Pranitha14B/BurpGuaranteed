<template>
  <div class="signUp">
    <form>
      <label for="FirstName">First Name</label>
      <input
        type="text"
        name="FirstName"
        placeholder="Enter your First Name"
        required
      />
      <label for="LastName">Last Name</label>
      <input
        type="text"
        name="LastName"
        placeholder="Enter your Last Name"
        required
      />
      <label for="email">E-mail</label>
      <input
        type="email"
        name="email"
        placeholder="Enter your E-mail"
        required
      />
      <label for="phone">Mobile Number</label>
      <input
        type="number"
        name="phone"
        placeholder="Enter your Mobile Number"
        required
      />
      <label for="password">Password</label>
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
        required
      />
      <label for="repassword">Re-enter password</label>
      <input
        type="password"
        name="repassword"
        placeholder="Re-enter your password"
        required
      />
      <div class="togglebar">
        <div class="doubletoggle">
            <input type="checkbox" id="switch" class="checkbox" />
            <label for="switch" class="toggle"></label>
        </div>
        <p>I agree to the terms of service and privacy policy.</p>
    </div>
    <button><img src="@/assets/lock.svg" alt="lock"/><b> SIGN UP </b></button>
    </form>
  </div>
</template>
<style scoped>
.togglebar{
    display: flex;
    flex-direction : row;
}
.doubletoggle{
    padding: 18px 10px 0px 0px;
}
button{
    height: 32px;
    width: 9rem;
    border-radius: 9px;
    background-color: powderblue;
    border: solid #BDBDBD 1px;
    box-shadow: 5px 5px 20px rgb(0 0 0 / 50%);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-inline: auto;
}
button img{
    height: 16px;
}
.signUp {
  /* background-image: url("./src/assets/signupbg.jpg"); */
  height: calc(100vh - 117px);
  justify-content: center;
    display: flex;
}
.signUp form {
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  max-width: 20rem;
    justify-content: left;
    align-items: flex-start;
}

input {
  width: 20rem;
  height: 23px;
  border-radius: 5px;
  margin-bottom: 16px;
}

label {
  padding-bottom: 8px;
}
.toggle {
  position: relative;
  display: inline-block;
  width: 2rem;
  height: 6px;
  background-color:gray;
  border-radius: 30px;
  border: 2px solid white;
}

/* After slide changes */
.toggle:after {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: white;
  top: 2px;
  left: 1px;
  transition: all 0.5s;
}

/* Checkbox checked effect */
.checkbox:checked + .toggle::after {
  left: 21px;
}

/* Checkbox checked toggle label bg color */
.checkbox:checked + .toggle {
  background-color: rgb(76, 142, 218);
}

/* Checkbox vanished */
.checkbox {
  display: none;
}
</style>