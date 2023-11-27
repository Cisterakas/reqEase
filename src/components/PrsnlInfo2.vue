<script setup>
import ApplicationNavigationBar from './ApplicationNavigationBar.vue';
import Footer from './Footer.vue';

</script>

<template>
<ApplicationNavigationBar />
<main class="main-container">
    <section class="description">
      <h2 class="title">Account Information</h2>
      <div class="content">
        <p>
          Read the items below, before proceeding with your online application.
        </p>
        <ul>
          <li>
            ALL fields must be filled out, unless they are marked as
            <strong>optional</strong>
          </li>
          
        </ul>
      </div>
     <hr>
      <h2 class="title">Sign Up</h2>
      <div class="content">
        <label class="label" for="first-name">Username</label>
        <input type="text" id="first-name" class="input" />
      </div>
      <div class="content">
        <label class="label" for="last-name">Password</label>
        <input type="password" id="last-name" class="input" />
      </div>
      <div class="content">
        <label class="label" for="middle-name">Confirm Password</label>
        <input type="password" id="middle-name" class="input" />
      </div>
      
    </section>
    <section class="navigation">
        <a href="/personalInfo" type="button" class="btnBack">Back</a>
      
      <a href="/docrequest" type="button" class="btnNext">Next</a>
    </section>
    <div class="warning" v-if="showWarning">
      <p>Please fill out all required fields before proceeding.</p>
    </div>
  </main>
    <Footer />
</template>
<style scoped>
</style>
<style scoped>
  .main-container {
    background: linear-gradient(127.55deg, #f6557e, rgba(255, 201, 245, 0.949));
    display: flex;
    flex-direction: column;
  }

  .image-wrapper {
    background-color: #f6557e;
    align-self: stretch;
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 4px 20px 34px;
  }

  @media (max-width: 991px) {
    .image-wrapper {
      max-width: 100%;
    }
  }

  .title {
    color: #000;
    text-align: left;
    align-self: stretch;
    font: 700 30px Saira Condensed, sans-serif;
  }

  

  .description {
    background-color: #fff;
    align-self: center;
    display: flex;
    margin-top: 39px;
    width: 80%;
    max-width: 1117px;
    flex-direction: column;
    border-radius: 10px;
    padding: 5%;
    
  }

  @media (max-width: 991px) {
    .description {
      max-width: 100%;
    }
  }

  .content {
    color: #000;
    align-self: start;
    max-width: 960px;
    margin: 28px 0 0 20px;
    font: 700 25px Saira Condensed, sans-serif;
  }

  @media (max-width: 991px) {
    .content {
      max-width: 100%;
    }
  }

  .label {
    color: #000;
    margin: auto 0;
    font: 400 20px Saira Condensed, sans-serif;
  }

  .input {
    background-color: #d9d9d9;
    align-self: stretch;
    display: flex;
    width: 590px;
    height: 40px;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: auto;
  }

  @media (max-width: 991px) {
    .input {
      max-width: 100%;
    }
  }

  .optional {
    font-weight: 700;
  }

  .img-6 {
    aspect-ratio: 278.33;
    object-fit: cover;
    object-position: center;
    width: 835px;
    stroke-width: 3px;
    stroke: #f6557e;
    overflow: hidden;
    align-self: start;
    max-width: 100%;
    margin: 14px 0 0 20px;
  }

  .img-7 {
    aspect-ratio: 278.33;
    object-fit: cover;
    object-position: center;
    width: 835px;
    stroke-width: 3px;
    stroke: #f6557e;
    overflow: hidden;
    align-self: start;
    max-width: 100%;
    margin: 32px 0 0 20px;
  }

  .navigation {
    align-self: center;
    display: flex;
    margin-top: 62px;
    width: 100%;
    max-width: 1120px;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
  }

  @media (max-width: 991px) {
    .navigation {
      max-width: 100%;
      flex-wrap: wrap;
      margin-top: 40px;
    }
  }



 
  .btnBack {
  font-family: Saira Condensed, sans-serif;
  font-size: 35px;
  font-weight: 700;
  justify-content: center;
  align-items: stretch;
  background-color: #d9d9d9;
  color: #000;
  width: 159px;
  padding: 13px 20px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: none;
  margin-bottom: 30px;
}
@media (max-width: 991px) {
  .btnBack {
    margin-top: 0px;
    margin-bottom: 50px;
  }
}
.btnBack:hover{
  background-color:#000;
  color:#f6557e;
}
.btnNext {
  font-family: Saira Condensed, sans-serif;
  font-size: 35px;
  font-weight: 700;
  justify-content: center;
  align-items: stretch;
  background-color: #0d6605;
  color: #ffffff;
  width: 159px;
  padding: 13px 20px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: none;
  margin-bottom: 30px;
}
@media (max-width: 991px) {
  .btnNext {
    margin-top: 0px;
    margin-bottom: 50px;
  }
}
.btnNext:hover{
  background-color:#ffffff;
  color:#f6557e;
}
</style>