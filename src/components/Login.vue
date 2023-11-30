<script setup>
import NavigationBar from './NavigationBar.vue';
</script>
<template>
  <NavigationBar />
    <div class="bg">
        <div class="login-container">
    <form class="login-form">
      <div class="form-group">
        <label for="username">School ID Number:</label>
        <input type="text" id="username" name="username" placeholder="Enter your username">
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="Enter your password">
      </div>
      <router-link to="/docrequest" type="button" class="button">Login</router-link>
      
    </form>
  </div>
    </div>
    
  </template>
  
  <style scoped>
.bg {
    position: relative;
background: #fff;
width: 100%;
height: 100vh;
overflow: hidden;
}
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-form {
  text-align: left;
 /* background: rgba(255, 255, 255, 0.8);  */
  padding: 20px;
  border-radius: 10px;
   /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);  */
  width: 1000px;
}

.form-group {
  margin: 10px 0;
}

input {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  font: 100 30px Saira Condensed, sans-serif;
}
label{
color: #000000;
font: 700 30px Saira Condensed, sans-serif;
}
.button {
  background: #da0272;
  color: #fff;
  border: none;
  padding: 10px 100px;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  font: 700 30px Saira Condensed, sans-serif;
}
.button:hover{
    background: #ffffff;
  color: #da0272;
}
</style>