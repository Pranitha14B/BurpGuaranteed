<template>
   <div class="signUp">
    <form>
    <label for="FirstName">First Name</label>
    <input type="text" name="FirstName" placeholder="Enter your First Name" required/>
    <label for="LastName">Last Name</label>
    <input type="text" name="LastName" placeholder="Enter your Last Name" required/>
    <label for="email">E-mail</label>
    <input type="email" name="email" placeholder="Enter your E-mail" required/>
    <label for="phone">Mobile Number</label>
    <input type="number" name="phone" placeholder="Enter your Mobile Number" required/>
    <label for="password">Password</label>
    <input type="password" name="password" placeholder="Enter your password" required/>
    <label for="repassword">Re-enter password</label>
    <input type="password" name="repassword" placeholder="Re-enter your password" required/>
    </form>
   </div> 
</template>
<style scoped>
.signUp{
    background-image: url("./src/assets/signupbg.jpg"); 
    height: 100vh;
}
.signUp form{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 9rem;
}

input{
    width: 20rem;
    height: 23px;
    border-radius:5px;
    margin-bottom: 16px;
}

label{
    padding-bottom: 8px;
}
</style>