<script setup>
import Footer from './Footer.vue';
import NavigationBar from './NavigationBar.vue'
</script>
<template>
  <NavigationBar/>
  <div class="div">
    <div class="div-2">
      <div class="div-3">
        Empowering Tomorrow, Preserving Today: Where Precision Meets Privacy,
        Your Documents Find a Trusted Home at University of the Immaculate
        Conception's Registrar
      </div>
      <div class="div-4">
        <div class="div-5">
          <div class="column">
            <div class="div-6">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/81babc39-6bf8-4683-b4aa-65f1cb481809?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/81babc39-6bf8-4683-b4aa-65f1cb481809?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/81babc39-6bf8-4683-b4aa-65f1cb481809?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/81babc39-6bf8-4683-b4aa-65f1cb481809?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/81babc39-6bf8-4683-b4aa-65f1cb481809?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/81babc39-6bf8-4683-b4aa-65f1cb481809?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/81babc39-6bf8-4683-b4aa-65f1cb481809?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/81babc39-6bf8-4683-b4aa-65f1cb481809?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                class="img"
              />
              <div class="div-7">
                Submit your official document requests through our streamlined
                service, managed by the University of the Immaculate
                Conception's Registrar. Trust us to maintain the accuracy and
                confidentiality of your records, ensuring a secure and efficient
                process.
              </div>
              <router-link to="/consent" type="button" class="div-8">REQUEST FOR OFFICIAL DOCUMENT</router-link>
            
            </div>
          </div>
          <div class="column-2">
            <div class="div-9">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9cd76ff4-4f74-4f54-adde-ac0e2bc31f99?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9cd76ff4-4f74-4f54-adde-ac0e2bc31f99?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9cd76ff4-4f74-4f54-adde-ac0e2bc31f99?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9cd76ff4-4f74-4f54-adde-ac0e2bc31f99?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9cd76ff4-4f74-4f54-adde-ac0e2bc31f99?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9cd76ff4-4f74-4f54-adde-ac0e2bc31f99?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9cd76ff4-4f74-4f54-adde-ac0e2bc31f99?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9cd76ff4-4f74-4f54-adde-ac0e2bc31f99?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                class="img"
              />
              <div class="div-10">
                Effortlessly track your documents with our 'Track My Document'
                feature. Powered by the University of the Immaculate
                Conception's Registrar, stay informed and assured as we provide
                real-time updates on the status and location of your important
                records.
              </div>
              <router-link to="/login" type="button" class="div-8">TRACK MY DOCUMENT</router-link>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</template>



<style scoped>
.div {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
}
.div-2 {
  display: flex;
  width: 949px;
  max-width: 100%;
  flex-direction: column;
  align-items: center;
  margin: 12px 0 30px;
}
.div-3 {
  color: #000;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  max-width: 861px;
  font: 500 18px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-3 {
    max-width: 100%;
  }
}
.div-4 {
  align-self: stretch;
  margin-top: 21px;
}
@media (max-width: 991px) {
  .div-4 {
    max-width: 100%;
  }
}
.div-5 {
  gap: 20px;
  display: flex;
}
@media (max-width: 991px) {
  .div-5 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}
.column {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 53%;
  margin-left: 0px;
}
@media (max-width: 991px) {
  .column {
    width: 100%;
  }
}
.div-6 {
  box-shadow: 8px 18px 23.3px 0px rgba(0, 0, 0, 0.3);
  background-color: #fff;
  display: flex;
  flex-grow: 1;
  padding-bottom: 25px;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
}
@media (max-width: 991px) {
  .div-6 {
    margin-top: 40px;
  }
}
.img {
  aspect-ratio: 1.2;
  object-fit: contain;
  object-position: center;
  width: 100%;
  box-shadow: 8px 18px 23.3px 0px rgba(0, 0, 0, 0.3) inset;
 
}
.div-7 {
  color: #000;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  align-self: center;
  margin-top: 27px;
  max-width: 315px;
  font: 400 10px Poppins, sans-serif;
}
.div-8 {
  color: #fff;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  white-space: nowrap;
  justify-content: center;
  border-radius: 10px;
  background-color: #e54f70;
  align-self: center;
  margin-top: 27px;
  width: 303px;
  max-width: 100%;
  padding: 9px 20px;
  font: 800 15px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-8 {
    white-space: initial;
  }
}
.div-8:hover{
  background-color: #2f3030;
}
.column-2 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 53%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-2 {
    width: 100%;
  }
}
.div-9 {
  box-shadow: 8px 18px 23.3px 0px rgba(0, 0, 0, 0.3);
  background-color: #fff;
  display: flex;
  flex-grow: 1;
  padding-bottom: 25px;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
}
@media (max-width: 991px) {
  .div-9 {
    margin-top: 40px;
  }
}
.div-10 {
  color: #000;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  align-self: center;
  margin-top: 27px;
  max-width: 315px;
  font: 400 10px Poppins, sans-serif;
}
.div-11 {
  color: #fff;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #e54f70;
  align-self: center;
  margin-top: 27px;
  width: 304px;
  max-width: 100%;
  padding: 9px 20px;
  font: 800 15px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-11 {
    white-space: initial;
  }
}
</style>