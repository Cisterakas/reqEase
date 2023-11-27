
import Category from './Category.vue';
<!-- NavigationBar.vue -->
<template>
  
    <nav
    class="navbar navbar-expand-lg navbar-light"
    style="background-color: #f986a3" 
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="https://www.uic.edu.ph/wp-content/themes/uic/images/logo.png"
          class="uic-logo"
        />
        <span class="navbar-text" style="color: #ffffff">
          Office of the Registrar
        </span>
      </a>
    </div>
  </nav>

  
  </template>

  <style scoped>

.uic-logo {
  width: auto;
  margin-top: -5px;
  margin-left: 20px;
  background-color: #f986a3;
}

.navbar-light {
  width: auto;
  background-color: #e65b7a;
}
.navbar-text {
  width: auto;
  margin-left: 20px;
  font-family: "Saira Condensed", sans-serif;
  font-size: 200%;
}
</style>