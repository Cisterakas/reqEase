<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { onMounted, onUnmounted } from 'vue';
import router from '@/router';


</script>
<template>
    <nav class="div1">
      <router-link to="/adminH" type="button">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2bb03f6a7046d1f6c536e7d031945114f9a449209ec032d3cac12a0d41dce334?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2bb03f6a7046d1f6c536e7d031945114f9a449209ec032d3cac12a0d41dce334?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2bb03f6a7046d1f6c536e7d031945114f9a449209ec032d3cac12a0d41dce334?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2bb03f6a7046d1f6c536e7d031945114f9a449209ec032d3cac12a0d41dce334?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2bb03f6a7046d1f6c536e7d031945114f9a449209ec032d3cac12a0d41dce334?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2bb03f6a7046d1f6c536e7d031945114f9a449209ec032d3cac12a0d41dce334?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2bb03f6a7046d1f6c536e7d031945114f9a449209ec032d3cac12a0d41dce334?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2bb03f6a7046d1f6c536e7d031945114f9a449209ec032d3cac12a0d41dce334?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
        class="img"
      />
    </router-link>
      <div class="div-2">
        <router-link to="/" type="button" class="div-3">Home</router-link>
       

  <div class="dropdown">
    <button class="dropbtn">Features
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <router-link to="/login" class="div-51">Request Now</router-link>
      <router-link to="/login" class="div-51">Track Document</router-link>
      <button @click="logout">logout</button>
    </div>
  </div>


        <router-link to="/about" type="button" class="div-5">About Us</router-link>
        
       
            <router-link to="/login" type="button" class="div-6">
                
                <div class="div-7">{{ name }} </div></router-link>
      
          
    
        
      </div>
    </nav>
  </template>
  
  
  
  <style scoped>

.dropdown {
  float: left;

}
.dropbtn{
  color: var(--Cinza-claro, #fcfcfc);
    margin: auto 0;
    font: 700 18px Roboto, sans-serif;
}

/* Dropdown button */
.dropdown .dropbtn {
  
  border: none;
  outline: none;

  padding: 14px 16px;
  background-color: inherit;
  font: 700 18px Roboto, sans-serif; /* Important for vertical align on mobile phones */
  margin: 0; /* Important for vertical align on mobile phones */
}

/* Add a red background color to navbar links on hover */
a:hover, .dropdown:hover .dropbtn {
  color: #4fb0e5;
}

/* Dropdown content (hidden by default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #2f3030;
  min-width: 180px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  font: 700 18px Roboto, sans-serif;
  float: none;
  color: #fcfcfc;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

/* Add a grey background color to dropdown links on hover */
.dropdown-content a:hover {
  background-color: #e54f70;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}


.div-51 {
    color: var(--Cinza-claro, #fcfcfc);
    align-self: center;
    margin: auto 0;
    font: 700 18px Roboto, sans-serif;
  }









  .div1 {
    background-color: #2f3030;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 16px 46px 16px 61px;
  }
  @media (max-width: 991px) {
    .div1 {
      flex-wrap: wrap;
      padding: 0 20px;
    }
  }
  .img {
    aspect-ratio: 0.99;
    object-fit: contain;
    object-position: center;
    width: 68px;
    overflow: hidden;
    max-width: 100%;
  }
  .div-2 {
    align-self: center;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 80px;
    margin: auto 0;
  }
  @media (max-width: 991px) {
    .div-2 {
      max-width: 100%;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  .div-3 {
    color: var(--Cinza-claro, #fcfcfc);
    align-self: center;
    margin: auto 0;
    font: 700 18px Roboto, sans-serif;
  }
  .div-3:hover{
   color: #4fb0e5;
  }
  .div-4 {
    color: var(--Cinza-claro, #fcfcfc);
    margin: auto 0;
    font: 700 18px Roboto, sans-serif;
  }
  .div-4:hover{
   color: #4fb0e5;
  }
  .div-5 {
    color: var(--Cinza-claro, #fcfcfc);
    align-self: center;
    margin: auto 0;
    font: 700 18px Roboto, sans-serif;
  }
  .div-5:hover{
   color: #4fb0e5;
  }
  .div-6 {
    justify-content: space-between;
    border-radius: 20px;
    background-color: #e54f70;
    align-self: center;
    display: flex;
    gap: 15px;
    padding: 10px 58px;
  }
  @media (max-width: 991px) {
    .div-6 {
      padding: 0 20px;
    }
  }
  .div-6:hover{
    background-color: #4fb0e5;
  }
  .div-7 {
    color: var(--Cinza-claro, #fcfcfc);
    font: 700 18px Roboto, sans-serif;
  }
 
  </style>